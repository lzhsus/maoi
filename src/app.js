// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'lib-flexible'

Vue.config.productionTip = false
import {Indicator, MessageBox} from "mint-ui";
//import Krpano from "vue-krpano";
import QRCode from 'qrcode'


require("assets/css/reset.css");
require("assets/css/login.css");
require("assets/css/mint-ui.css")
require("assets/css/cropper.css")
// require('assert/css/swiper.min.css')
// require('static/js/jquery-1.9.1.min')
// require('static/js/jquery.fly.min')

require("assets/scss/global.scss");
console.info("main初始化...");

/**
 * 全局配置 
 */
export const config = {
    // serverPath: "https://1434253600.xyz/", 
    serverPath: "http://127.0.0.1:3003/",
    nodeServerPath:"http://127.0.0.1:3003/",
    nodeServerPathZS:"https://1434253600.xyz/",
    kf:"https://kefu.easemob.com/webim/im.html?configId=8f26ca96-37ea-42a2-8a62-4237b0f8963e",
    ly:'https://kefu.easemob.com/webim/easemob.js?configId=8f26ca96-37ea-42a2-8a62-4237b0f8963e'
};

export var href=function (name) { 
    if(!name){
      return config.serverPath;
    }
    if(config.serverPath=="https://1434253600.xyz/"){
      // 正式
      // return config.serverPath+'html/zl/'+name+'.html'
      return config.serverPath+name+'.html'
    }else{
      return config.serverPath+name+'.html'
    }
}
/**
 * rqCode
 */

/**
 * 全局数据
 */
export var globaData = {};
/**
 * 事件管理中心
 */
// export const globalDispatcher = new Vue();
/**
 * ui
 */
let Loading=Indicator;
let alert=MessageBox;
// console.log("loading use",Loading)
export { Indicator, MessageBox ,Loading,alert};
/**
 * tabbar 显示
 */
export var tabbar={
  show:true
}
// 微信初始化
console.log('微信初始化...')
// export const weixin=require("static/js/weixin/weixin");
// var shareObj = {
//     title: "610元免单劵免费送?动动手指帮孩子抢吧!",
//     desc: "玩具反斗城六一玩具节火爆进行中！pick宝宝喜欢的玩具吧",
//     link: "https://1434253600.xyz/html/zl/main.html",
//     imgUrl: "https://1434253600.xyz/static/images/main/all-orders-icon.png?v=201906141040",
//     success: function (type) {
//         // tracking.trackEvent(type, "wxshare", "toysrus20190601");
//     },
//     cancel: function () {
//     }
// };
// $.getJSON("//r.eintone.com/wx/jsticket?callback=?").done(function (res) {
//     if (res.success) {
//         weixin.init(res.result.ticket, res.result.appID, shareObj, false);
//     }
// });

export function pageInit(app, data = {}) {
  return new Vue({
      el: "#app",
      data: data,
      // components: { app },
      render: h => h(app)
      /**
       * 置入路由
       */
      // router
  });
}


// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
