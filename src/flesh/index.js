var canvas, stage,container,bitmap, exportRoot, fnStartAnimation;
var hammer = require("static/js/createjs/hammer.min.js");
import FlexPos from 'static/js/createjs/flexpos.js';

var hammerMC,imageObj;
function init() {
	canvas = document.getElementById("canvas");
	stage=new createjs.Stage(canvas);
	container=new createjs.Container()
	stage.addChild(container)
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    // 由于添加元素后需要手动更新画布，比较麻烦，该防范监听tick事件，进行自动更新
	createjs.Ticker.on("tick", handleTick);
	createjs.Touch.enable(stage)
    function handleTick(event) {
        stage.update(event);
    }

}

function text(obj){
	var text=new createjs.Text()
	text.textAlign ="left"
	text.font="20px Arial"
	text.color = "#f7e7e7";
	text.textBaseline  ="hanging" 
	text.text=obj.text
	text.lineWidth=500
	text.x=$(window).width()/2
	container.addChild(text)
}
function bitmap(img){
	console.log(img)
	var image=new Image()
	image.onload=function(e){
		var bmp=new createjs.Bitmap(e.target)
		// container.addChild(bmp)
	}
	image.src=img
}
module.exports={
	init:init,
	text:text,
	bitmap:bitmap
}