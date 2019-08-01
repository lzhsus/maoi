
const congif={
    appid:"wx94cef103c31d2d96",
    secret:"fa60e2f838330d03608ae21d321066a4",
    access_token: "23_b3W4FigutsWn2uBMNmrB_nQfvTLUy86OrZpX--5OzsLwo2mEOnGYu1LXzJSy0dE-ymSn_fDlJyIEEd9U3YHo5aIpGqU0RdrKfu7TRMUR6U-YoIRRWAO9rwLP0zKaR1a040Ioz7SQf8MHzqheUBPjACALSG"

};
var weixin={}
weixin.wxlogin=(next_to)=>{
    var obj = new WxLogin({
        id:"login_container", 
        appid: congif.appid, 
        scope: "", 
        redirect_uri: "",
        state: "",
        style: "",
        href: ""
      });
      $.ajax({
          url:"https://api.weixin.qq.com/sns/oauth2/access_token",
          data:{
            appid:congif.appid,
            secret:congif.secret,
            code:'',
            grant_type:"authorization_code"
          }
      })
}
weixin.getCode=()=>{ 
    let redirectUrl = encodeURIComponent('https://1434253600.xyz/')
    let oAuthUrl = `https://open.weixin.qq.com/connect/qrconnect?appid=${congif.appid}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo`
    console.log(oAuthUrl)
    window.location.href = oAuthUrl
  
}
weixin.token=()=>{
    let oAuthUrl = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx94cef103c31d2d96&secret=7147a292a0655bc09a0217fb86f7f1d5`
    console.log(oAuthUrl)
    window.location.href = oAuthUrl
}
weixin.access_token=()=>{
    let access_token="https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code"
}
module.exports=weixin