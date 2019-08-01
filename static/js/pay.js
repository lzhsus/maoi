var Api = require('../services/api/index');
var appConfig = require('./app_config');

// // 立即支付（签名）
 function pay(tid) {
    Api.miniappshopUserorderPay({
        tid: tid
    }).then(res => {
        if (res.success) {
            requestPayment(res.result.payRes, tid)
        } else {
            wx.redirectTo({
                url: '/buy/payresult?payresult=0&msg=支付失败！'
            })
        }
    })
}

// // 立即支付
function requestPayment(payRes, tid) {
    wx.requestPayment({
        timeStamp: payRes.timeStamp + '',
        nonceStr: payRes.nonceStr,
        package: payRes.package,
        signType: payRes.signType,
        paySign: payRes.paySign,
        success: (res) => {
            wx.redirectTo({
                url: '/buy/payresult?tid=' + tid + '&payresult=1',
                complete: res => {
                    //console.log(res)
                }
            })
        },
        fail: (res) => {
            //console.log(res)
            wx.redirectTo({
                url: '/buy/payresult?payresult=0&msg=支付失败！'
            })
        }
    })
}

// 跳小程序立即支付
function  ToMiniProgramPay(tid) {
    wx.navigateToMiniProgram({
        appId: appConfig.payappid,
        path: 'pages/pay',
        extraData: {
            userinfo: wx.getStorageSync('userInfo'),
            id: tid,
            appid: appConfig.appid,
            paySuccess: false,
        },
        envVersion: appConfig.envVersion,
        success(res) {
            //console.log(res)
            appConfig.payBack = true
        },
        fail(res) {
            wx.redirectTo({
                url: '/order/orderlist?orderIndex=1'
            })
        }
    })
}
module.export={
    ToMiniProgramPay,
    pay
}


