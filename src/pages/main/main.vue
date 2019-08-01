<template>
    <div class="text" id="main">
        <div class="text-content">
            <!-- <div class="gather-title">MAOI</div> -->
            <div class="text-maddle">
                
                <tabbar :seleid="seleid"></tabbar>
            </div>
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
export default {
    data(){
        return{
            seleid:2,
            navLi:1,
            banners:[],
        }
    },
    components:{
          tabbar
    },
    methods:{
        navBtn(id){
            this.navLi=id
        },

    },
    mounted(){

    }
}
</script>
<style lang="less" scoped>
#text{
    width: 100%;height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    .text-content{
        width: 100%;height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
        .gather-title{
            width: 100%;height: 50Px;line-height: 50Px;
            font-size: 40px;color: #000;
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
            .nav-ul{
                width: 100%;height: 80px;
                display: flex;justify-content: space-around;align-items: center;
                margin-bottom: 12px;
                li{
                    width: 20%;height: 100%;
                    text-align: center;line-height: 80px;
                    font-size: 14Px;color: #000;
                    border-bottom: 1px solid rgba(230, 227, 227, 0);
                    &.active{
                        color: orange;
                        border-bottom: 1px solid orange;
                    }
                }
            }

        }
    }
}
</style>

