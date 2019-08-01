<template>
    <div id="headTop" :class="[isIphoneX?'iphoneX':''] [isAndroid?'Android':'']">
		<div class="head-fixed">
			<div class="back" hover-class="back-hover" v-if="backShow" @click="back">
				<div class="back-page" v-if="backShow==1"></div>
				<div class="back-home" v-if="backShow==2"></div>
			</div> 
			<span class="head-title">MAOI</span>
		</div>
	</div>
</template>
<script>
export default {
    data(){
        return{
            backShow: 2,
			_getCurrentPagesLen: 0,
			isIphoneX: false,
			isAndroid: false,
        }
    },
    methods:{
        back(){
			if( this.backShow==1 ){
				window.history.back()
			}else{
				// appConfig.homeHide = false			
				// wx.reLaunch({
				// 	url: 'index'
				// })
			}
		}
    },
    mounted(){
		this.isAndroid=true
    }
}
</script>

<style lang="less" scoped>
#headTop{
		height: 66px;width: 100%;position: relative;z-index: 9999;background: #fff;
		&.iphoneX{
			height: 88px;
			.head-fixed{
				padding-top: 22px; 
			}
			.back{
				top: 26px;
			}
		}
		&.Android{
			height: 70px;
			.head-fixed{
				height: 70px;
			}
			.head-title{
				padding-top: 50px;
			}
			.back{
				top: 8px;
			}
		}
		.head-fixed{
			position: fixed;height: 66px;width: 100%;left:0;top:0;background:#fff;			
		}
		.head-title{
			color:#000;font-size:16px;text-align: center;display: block;padding-top: 31px;
		}
		.back{
			position: fixed;left: 0;top: 0;width: 56px;height: 66px;			
			&:before{
				position: absolute;left: 3px;top: 22px;width:40px;height: 40px;content: '';border-radius: 50%;
			}	
			.back-page {
				display: inline-block;width: 11px;height: 11px;z-index: 2;
				border-bottom: 2px solid #000;border-left: 2px solid #000;transform: rotate(45deg);left:18px;top: 36px;position: absolute;
			}
			.back-home{
				background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAkCAYAAADsHujfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDlDQ0M1NDIyNDdBMTFFOThCM0NDNkE0Mjc1NkI2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDlDQ0M1NDMyNDdBMTFFOThCM0NDNkE0Mjc1NkI2REMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowOUNDQzU0MDI0N0ExMUU5OEIzQ0M2QTQyNzU2QjZEQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowOUNDQzU0MTI0N0ExMUU5OEIzQ0M2QTQyNzU2QjZEQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PggEDlUAAAJdSURBVHja7JjLS1RRHMfPPHrABFKQOSCjBgVi4WOK0KBFC3c+/gapnWkhpa5EcFk7cSHV1kXovkR7DCnqpoVKIdrDbFWhBMNkM/f6PfC78PPguffO3Ict5sCHmTnn3N/53DPnd86dEcJbuQVmwGvQIY6pdIE9YBJ/wJ2wJTrBLgn8ANtMaCgsiW7wmwbdAFdAHVhjMsNBS/SBLJNoYm2XwHoYM/OADbKpSHCZj6zfYJASW6DZpu/loGTus6CfHSS4zCd23SOvEv3AoGBfQUsR10qZJT9k5MIsUJBvIF1CjPPgJcWQN/SwFIk8BZB7xDUPs1oJZilWoRiZe0ziO7juwzq7AOYopoz9BESdJP6xmUj7mHlSZp6tmUmdTC+TeA/qA9iLpMwbRSamSuxT4wJIBbg7V4F3isxJ2dDDJBYDlrBKEmSYzGNZOUUflkFNiCd4kmZfjv1K0Az0hzQTR60ZuXM3inJRSkT5fBa0Uoplba6rBTco9UxWb9LJ+8Hm2lPgNlgBP3WdJlwc3TLLdtiKV8mBEZud03qkeGo3Q1Z+ZzTt8sHnl40Ep00T4xk7Pk5blXGl0z69ntAEaQDnKNAo+MK+XpNO2zGa/puUnkIzRozPWlwzoKGpv8jW1jRYVdpTJCJLwmF9Hhoj6mGhJxzqjGKCRf+X9C2LlEX8FjE17922a48XVSTmkHoF9j5/RHveRfpaMf7yPuqGtkevV8Fbso6wwNWs73PqH2XtZ9iufBe0Kzdr0DEh6LdSzu5/j5zLs8QrvXaPAYLuYgBUuPieS3nskGfNCzDO4x8IMAA5udHs/QbQiAAAAABJRU5ErkJggg==');
				width:20px;height: 20px;position: absolute;left:13px;top: 32px;background-size: 100% auto;
			}		
		}
		.back-hover{
			&:before{
				background: #797979;
			}
		}
	}
</style>

