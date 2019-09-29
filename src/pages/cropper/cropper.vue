<template>
    <div class="text" id="cropper">
        <input type="file" name="" id="">
        <div class="text-content">
            <div class="img-box" >
                <div class="range">
                    <mt-range v-model="rangeValue" :max="360"></mt-range>
                </div>
            </div>
            <div class="cropper-img">

            </div>
            <div class="result-img"></div>
            <button class="ok" @click="ok">裁切</button>
        </div>
    </div>
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
import tabbar from "components/tabbar";
import { create } from 'domain';

export default {
    data(){
        return{
            rangeValue:0,
            src:''
        }
    },
    components:{
          tabbar,
          headTop
    },
    methods:{
        // 删除cropper
        // $image.cropper('destroy');
        upLoadFilePhoto(){
            var _this=this
            $('input[type="file"]').on("change",function(e){
                var files =this.files;
                var img = new Image();
                var reader =new FileReader();
                reader.readAsDataURL(files[0]);
                reader.onload =function(e){
                    var dx =(e.total/1024)/1024;
                    if(dx>=2){
                        alert("文件大小大于2M");
                        return;
                    }
                    img.src =this.result;
                    console.log(img)
                    this.src=img.src
                    $('.text-content>.img-box').append(img);
                    _this.cropperF()
                }
            })
        },
        cropperF(){
            $('.text-content  img').cropper({
                aspectRatio: 1,
                crop: function(data) {
                    // Output the result data for cropping image.
                    console.log(data)
                },
                checkImageOrigin:true,
                // preview:$('.cropper-img'),
            });
        },
        async ok(){
             var newImgUrl=$('.img0').cropper('getCroppedCanvas');
            //  var imgurl = dataURL.toDataURL("image/jpeg", 0.5);
             console.log(newImgUrl)
             var img=await this.convertCanvasToImage(newImgUrl)
             console.log(img)
            //  $('.result-img').append(img);
        },
        convertCanvasToImage(canvas) {

            var image = new Image();
            console.log(canvas)
            // image.src = canvas.toDataURL("image/png");
            return image;
        }
    },
    
    mounted(){
        this.upLoadFilePhoto()
    },
    created(){
        this.$watch("rangeValue", function (newValue, oldValue) {
            if(newValue>oldValue){
                $('.text-content  img').cropper('rotate', newValue-oldValue)
            }else{
                $('.text-content  img').cropper('rotate', -(oldValue-newValue))
            }
            
        })
    }
}
</script>
<style lang="less" scoped>



// .range{
//     position: absolute;top: 20px;left: 50%;z-index: 999;
//     transform: translateX(-50%);
//     width: 90%;height: 60px;
//     // background: rebeccapurple;
// }
.text-content{
    position: relative;
}
#cropper{
    img{
        width: 100%;display: block;
    }
    .cropper-img{
        width: 300px;height: 240px;margin:100px auto;
        border:1px  solid #000;overflow: hidden;
        img{

        }
    }
}
</style>

