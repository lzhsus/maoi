<template>
    <div class="slot-com" id="slot-com">
        <div class="main" id="hit">
			<img src="" id="uploadImg" class="img100">
		</div>
        <div class="slot-com-box">
            <div class="item-box"><input type="file" accept="image/*" id='againUpload'></div>
            <div class="item-box"><input type="file" accept="image/*" id='againUpload'></div>
            <div class="item-box"><input type="file" accept="image/*" id='againUpload'></div>
        </div>
        <canvas id=""></canvas>
    </div>
</template>

<script>
    import geturlParmes from "static/js/geturlParmes"
    import routerName from "static/js/routerName"

	let $image;
	let HammerTrue = false;
	let postImgLock = false;
	import Hammer from "vendor/plugins/hammer"
	import cropper from "vendor/plugins/cropper"
	import loadImage from "vendor/plugins/load-image"
	import loadImageMeta from "vendor/plugins/load-image-meta"
	import loadImageExif from "vendor/plugins/load-image-exif"
	import loadImageExifmap from "vendor/plugins/load-image-exif-map"
	import loadImageScale from "vendor/plugins/load-image-scale"
	import loadImagefetch from "vendor/plugins/load-image-fetch"
	import loadImageOrientation from "vendor/plugins/load-image-orientation"
export default {
    data(){
        return{
            
        }
    },
    
    methods:{
        // 从 canvas 提取图片 image
		convertCanvasToImage(canvas) {
			return canvas.toDataURL("image/jpeg", 0.8)
		},
        uploadInit(){
            $image = $('#uploadImg')	

            let $this = this
		    var againUpload = document.getElementById("againUpload");
		    
		    againUpload.addEventListener('change', readFile, false)
		    function readFile(){
                var file = this.files[0];  
                var cName='#hit'
                var hideClass='#againUpload'
		    	loadImage.parseMetaData(file, function(data) {
		    		var orientation = 1;
		    		if (data.exif) {
		    			orientation = data.exif[0x0112];
		    		}
		    		loadImage(file, (canvas)=> {
                            $this.uploadImg = $this.convertCanvasToImage(canvas);
		    				$image.attr("src", $this.uploadImg);
		    				$image.cropper('destroy');
		    				$image.cropper({
		    					viewMode: 3,
		    					dragMode: 'move',
		    					autoCrop:1,
		    					autoCropArea: 1,
		    					restore: false,
		    					modal: false,
		    					guides: false,
		    					highlight: false,
		    					cropBoxMovable: false,
		    					cropBoxResizable: false
		    				});
		    			},
		    			{
		    				maxWidth: 640, canvas: true, orientation: orientation
		    			}
		    		);
		    	});

		    	$(hideClass).hide()
                HammerTrue = true	

                var reqAnimationFrame = (function () {
					return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
						window.setTimeout(callback, 1000 / 60);
					};
                })();
                // var cName='#hit'
				var el = document.querySelector(cName);
				var ticking = false;
				var transform;
				var mc = new Hammer.Manager(el);
				mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
				mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'));
				mc.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(mc.get('pan'));
				mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan'), mc.get('rotate')]);
				mc.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
				mc.add(new Hammer.Tap());
				mc.on("rotatestart rotatemove", onRotate);

				function resetElement() {
					transform = {
						angle: 0,
					};
					requestElementUpdate();
				}

				function updateElementTransform() {
					if( HammerTrue ){
						$image.cropper('rotateTo', transform.angle)
					}
					ticking = false;
				}

				function requestElementUpdate() {
					if(!ticking) {
						reqAnimationFrame(updateElementTransform)
						ticking = true;
					}
				}

				var initAngle = 0;
				function onRotate(ev) {
					if(ev.type == 'rotatestart') {
						initAngle = transform.angle || 0
					}
					transform.angle = initAngle + ev.rotation
					requestElementUpdate()
				}

				resetElement()			
            }
        }    
    },
    mounted(){
		this.uploadInit()
    }
}
</script>

<style lang="less" scoped>
#uploadImg{
    position: fixed;top: 0;left: 0;
}
#slot-com{
    width: 100%;height: 100%;
    .slot-com-box{
        width: 100%;height: 100%;
        display: flex;justify-content: space-between;align-items: stretch;
        .item-box{
            width: 100%;height: 100%;
            position: relative;
            input{
                display: block;width: 100%;height: 100%;
                position: absolute;top: 0;left: 0;
                -filter:alpha(0);opacity: 0;
            }
            &:nth-child(1){
                background: tan;
            }
            &:nth-child(2){
                background: rgb(140, 210, 198);
            }
            &:nth-child(3){
                background: rgb(210, 140, 210);
            }
        }
    }
}

</style>
