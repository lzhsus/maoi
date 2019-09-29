<template>
    <div class="text" id="landscape">
        <div class="page-content">
            <div class="content">
                <!-- <div v-for="item,index in modules" :class="[index]"></div> -->
                <div v-for="item,index in modules" :class="['img-box'+index,item.images.length?'':'add']" @click="moveBtn(item,index)">
                    <span v-if="!item.images[0]"><input type="file" name="" id="" :data-index="index"></span>
                    <img :class="['img'+index]" :src="item.images[0]" alt="" srcset="">
                    <img v-if="item.images[1]" :class="['img'+index]" :src="item.images[1]" alt="" srcset="">
                </div>
            </div>
            <button @click="ok">确认裁切</button>
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
var newImgUrl;
export default {
    data(){
        return{
            modules:[{
                id:1,
                images:[]
            },{
                id:2,
                images:[]
            },{
                id:3,
                images:[]
            }],
            index:-1
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
                
                var index=parseInt(e.target.dataset.index)
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
                    
                    _this.src=img.src
                    console.log(_this.modules)
                    _this.modules[index].images.push(_this.src)
                    // var clsssName='img-box'+index;
                    // console.log(clsssName,$(clsssName),img)
                    // $(clsssName).append(img);
                    // var cC=clsssName+'img'
                    // _this.cropperF(cC)
                }
            })
        },
        moveBtn(item,index){
            if(!this.modules[index].images.length){
                
                return;
            }
            this.index=index
            // newImgUrl=$('.img0').cropper('getCroppedCanvas');
            // console.log(newImgUrl)
            this.cropperF(index)
        },
        cropperF(index){
            
            var cr=$('.img'+index).cropper({
                aspectRatio: 3/4,
                crop: function(data) {
                    // Output the result data for cropping image.
                    console.log(data)
                },
                checkImageOrigin:true,
                // preview:$('.cropper-img'),
            });
            console.log(cr)
        },
        async ok(){
            var newImgUrl=$('.img'+this.index).cropper('getCroppedCanvas');
            //  var imgurl = dataURL.toDataURL("image/jpeg", 0.5);
            //  console.log(newImgUrl)
            var img=await this.convertCanvasToImage(newImgUrl)
            this.modules[this.index].images.push(img.src)
           console.log(this.modules)
           $('.cropper-container').css("display",'none')
           $('.img'+this.index).src=img.src
           $('.img'+this.index)[0].src=img.src
            $('.img-box0').append(img);
        },
        convertCanvasToImage(canvas) {
            console.log('-------',canvas)
            var image = new Image();
            image.src = canvas.toDataURL("image/png");
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
/**竖屏 body显示红色**/
.portrait body div{
    background: red;
}
/**横屏 body显示蓝色**/
.landscape body div{
    background: blue;
}
#landscape{
    width: 100%;height: 100%;
    .page-content{
        width: 100%;height: 100%;
        .content{
            width: 100%;height: 100%;
            display: flex;justify-content: space-between;align-items: stretch;
            >div{
                width: 300px;height: 400px;
                border: 1px solid #000;overflow: hidden;
                img{
                    // position: absolute;top: 0;left: 0;
                    width: 300px;display: block;
                }
                &.add{
                    position: relative;
                    span{
                        position: absolute;top: 0;left: 0;
                        display: block;width: 100%;height: 100%;
                        background: url(~@/static/images/add.png) center center no-repeat;
                        background-size: 50px 50px;
                    }
                }
            }
            button{
                position: fixed;top: 30px;right: 30px;
            }
        }
    }
}
</style>

