<template>
    <div class="text" id="promise">
        <div class="text-content">
            <div class="text-maddle">
                
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
export default {
    data(){
        return{
            navLi:1,
            banners:[],
        }
    },
    components:{
    },
    methods:{

    },
    mounted(){

    }
}
</script>
<style lang="less" scoped>
#promise{
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
        }
    }
}
</style>

