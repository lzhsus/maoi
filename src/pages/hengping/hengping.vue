<template>
    <section v-horizontal-screen @touchmove.prevent>
        <!-- 页面具体内容 -->
        <slotCom></slotCom>
    </section>
</template>
<script>
import Vue from 'vue';
import Api from "src/services/api"
import { Popup ,Picker } from 'mint-ui';
// 拖动进度
import { Range } from 'mint-ui';
Vue.component(Range.name, Range);

// 轮播
require("assets/css/swiper.min.css");
import Swiper from "static/js/swiper.min.js";
// 时间格式化
import { setTimeout, setInterval } from 'timers';
// cropper图片处理
import cropper from "static/js/plugins/cropper"
// 组件
import headTop from "components/headTop";
import slotCom from "components/slot-com";

export default {
    components:{
        slotCom
    },
	directives: {
        'horizontal-screen': {
            bind(el, binding, vnode){
                let self = vnode.context;
                
                function reset(init){
                    
                    let width = document.documentElement.clientWidth,
                        height = document.documentElement.clientHeight;
                    //在竖屏状态我们通过添加transform:rotate(90deg)，来让这个页面横过来
                    if(window.orientation == null || window.orientation === 180 || window.orientation === 0){//竖屏状态
                        el.style.webkitTransform = el.style.transform = `rotate(90deg)`;
                        el.style.width = `${height}px`;
                        el.style.height = `${width}px`;
                        el.style.webkitTransformOrigin = el.style.transformOrigin = `${width / 2}px center`;
                        //如果已经处于横屏状态就不做其他处理了
                    }else if(window.orientation === 90 || window.orientation === -90){//横屏状态
                        el.style.webkitTransform = el.style.transform = `rotate(0)`;
                        el.style.width = `${width}px`;
                        el.style.height = `${height}px`;
                    }
                }
                reset(true);

                let timer = null;
                el.fn = function(e) {
                    clearTimeout(timer);
                    timer = setTimeout(reset, 300);
                }
                
                window.addEventListener('resize', el.fn, false);

                if("onorientationchange" in window){
                    window.addEventListener('orientationchange', el.fn, false);
                }
            },
            unbind(el, binding, vnode){
                window.removeEventListener('resize', el.fn, false);
                window.removeEventListener('orientationchange', el.fn, false);
            }
        },
    }
}
</script>