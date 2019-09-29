<template>
    <div class="text" id="main">
        <div class="text-content">
            <!-- <div class="gather-title">MAOI</div> -->
            <!-- <headTop></headTop> -->
            <!-- <canvas id="canvas"></canvas> -->
            <div class="text-maddle">
                <div class="swiper-container swiper1">
	            	<div class="swiper-wrapper">
	            		<div class="swiper-slide">
	            			<img src="static/images/gif/2094434.gif" alt="" srcset="">
                            <img src="static/images/gif/1.png" alt="" srcset="">
                        </div>
                        <div class="swiper-slide">
                            <img src="static/images/gif/2097608.gif" alt="" srcset="">
                            <img src="static/images/gif/2.png" alt="" srcset="">
                        </div>
                        <div class="swiper-slide">
	            			<img src="static/images/gif/2097611.gif" alt="" srcset="">
                            <img src="static/images/gif/3.png" alt="" srcset="">
                        </div>
                        <div class="swiper-slide">
	            			<img src="static/images/gif/2097613.gif" alt="" srcset="">
                            <img src="static/images/gif/4.jpg" alt="" srcset="">
                        </div>
                        <div class="swiper-slide">
	            			<img src="static/images/gif/2097615.gif" alt="" srcset="">
                            <img src="static/images/gif/5.jpg" alt="" srcset="">
                        </div>
                        <div class="swiper-slide">
	            			<img src="static/images/gif/2097617.gif" alt="" srcset="">
                            <img src="static/images/gif/6.jpg" alt="" srcset="">
                        </div>
                        <div class="swiper-slide">
	            			<img src="static/images/gif/2097619.gif" alt="" srcset="">
                            <img src="static/images/gif/7.jpg" alt="" srcset="">
                        </div>
                        <div class="swiper-slide">
	            		    <img src="static/images/gif/2097621.gif" alt="" srcset="">
                            <img src="static/images/gif/8.jpg" alt="" srcset="">
                        </div>
                        <div class="swiper-slide">
                            <img src="static/images/gif/2097623.gif" alt="" srcset="">
                            <img src="static/images/gif/9.jpg" alt="" srcset="">
                        </div>
                        <div class="swiper-slide">
	            			<img src="static/images/gif/2097625.gif" alt="" srcset="">
                            <img src="static/images/gif/10.jpg" alt="" srcset="">
                        </div>
                        <div class="swiper-slide">
	            			<img src="static/images/gif/2097627.gif" alt="" srcset="">
                            <img src="static/images/gif/11.jpg" alt="" srcset="">
	            		</div>
	            	</div>
	            </div>
                <tabbar :seleid="seleid"></tabbar>
            </div>
            <div class="yuan"></div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Api from "src/services/api"
import { Popup ,Picker } from 'mint-ui';

require("assets/css/swiper.min.css");
import Swiper from "static/js/swiper.min.js";
import { setTimeout, setInterval } from 'timers';
// 组件
import headTop from "components/headTop";
import tabbar from "components/tabbar";
import { create } from 'domain';

import flesh from 'src/flesh/index'
export default {
    data(){
        return{
            seleid:1,
            navLi:1
        }
    },
    components:{
          tabbar,
          headTop
    },
    methods:{
        navBtn(id){
            this.navLi=id
        },

    },
    mounted(){
        var _this=this
        this.$nextTick(data=>{
        	var swiper1=new Swiper(".swiper1",{
            });
        })
    }
}
</script>
<style lang="less" scoped>
#main{
    width: 100%;height: 100%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    flex: 1;
    .text-content{
        width: 100%;height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
        canvas{
            display: flex;width: 100%;height: 100%;
            position: fixed;top: 0;left: 0;
            z-index: 999;
            pointer-events:none;
        }
        .gather-title{
            width: 100%;height: 42Px;line-height: 42Px;
            font-size: 26px;color: #000;
            padding: 0 20px;box-sizing: border-box;
            font-weight: bold;
            background: #ffffff;
            box-shadow: 0 2px 10px rgba(230, 227, 227, 0.8);
        }
        .text-maddle{
            width: 100%;height: 100%;
            display: flex;
            flex-direction: column;
            flex: 1;
            .swiper1{
                width: 100%;height: 100%;display: block;
                img{
                    width: 100%;display: block;
                }
            }
        }
    }
    .yuan{
        
    }
}
</style>

