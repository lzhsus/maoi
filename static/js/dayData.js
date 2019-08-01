export function dayData(time) {
    // var netConnectTime = parseInt(Date.parse(time)/1000);//网络连接时间
    // var currentTime = parseInt(new Date().getTime()/1000);//当前时间
    var hasUseTime = parseInt(time/1000);
    var returnObj = {};
    // 1 时 = 3600秒 1分 = 60秒
    if (hasUseTime  < 60) {
        if (hasUseTime < 0) {
            returnObj = {"time":"0秒", "flag":false};
        }else{
            returnObj = {"time":parseInt(hasUseTime)+"秒", "flag":false};
        }
        return returnObj;

    }else if (hasUseTime >= 60 &&  hasUseTime <= 3600) {
        if ( hasUseTime > 300) {  //大于5分钟标红
            returnObj = {"time":parseInt(hasUseTime/60)+"分钟", "flag":true};
            return returnObj;
        }else {
            returnObj = {"time":parseInt(hasUseTime/60)+"分钟", "flag":false};
            return returnObj;
        }
    }else if (hasUseTime > 3600 && hasUseTime <= 3600*24) {
        var h = parseInt(hasUseTime/3600);
        var min = parseInt((hasUseTime - h*3600)/60);
        returnObj = {"time":h+"小时"+min + "分钟", "flag":true};
        return returnObj;

    }else if (hasUseTime > 3600*24 ){
        var day = parseInt( hasUseTime/ (24*3600) );
        var hour = parseInt( (hasUseTime - day*24*3600) / 3600);
        var minute = parseInt( (hasUseTime - day*24*3600 - hour*3600) /60 );
        console.log("day:"+day);
        console.log("hour:"+hour);
        console.log("minute:"+minute);
      /*  var day = parseInt(hasUseTime/(3600*24)); //天数
        var hour = parseInt(hasUseTime % (60*24));   // hasUseTime % 3600 求余数分钟
        var minute =  hasUseTime % (3600*24)*/
        returnObj = {"time":day+ "天"+hour+"小时"+minute+'分钟', "flag":true};
        return returnObj;
    }
}