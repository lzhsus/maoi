/**
 * @fileoverview 这是一个特殊的标记,如果在文件袋第一个文档中使用这个标记，则指定该文档快的余下部分将用来提供这个文件的概述
 * @author <1434253600@qq.com>\
 * 
 * @type 类型
 * @extends 指定一个类派生了另一个类
 * @private 一个类或者函数的私有方法
 * @time 2019-7-19 11:04
 * @version 0.0.1 
 * @returns MYAPP 全局标量函数
 */

    var MYAPP=MYAPP || {} //创建一个全局变量
    /**
     * {String}
     */
    MYAPP.VARIABLE={
        COUNTTIME:1
    }
    /**
     * {object} RegExp 正则表达式集合
     */
    MYAPP.RegExp={
        regExForName:"",//定义名字的正则表达式
        mobile :/^1\d{10}$/,//定义电话的正则表达式
        password:/^[a-zA-Z0-9]{4,10}$/,// 验证密码的长度 4-10
        getChinese:/@"[\u4E00-\u9FFF]+"/,// 获取中文
    }
    /**
     * md5 基本配置
     */
    var md5={
                
        /*
        * Add integers, wrapping at 2^32. This uses 16-bit operations internally
        * to work around bugs in some JS interpreters.
        */
       safe_add:function (x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        },

        /*
        * Bitwise rotate a 32-bit number to the left.
        */
        bit_rol:function (num, cnt) {
            return (num << cnt) | (num >>> (32 - cnt));
        },

        /*
        * 这些函数实现了算法使用的四个基本操作
        * These functions implement the four basic operations the algorithm uses.
        */
       md5_cmn:function (q, a, b, x, s, t) {
            return md5.safe_add(md5.bit_rol(md5.safe_add(md5.safe_add(a, q), md5.safe_add(x, t)), s), b);
        },

        md5_ff:function (a, b, c, d, x, s, t) {
            return md5.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
        },

        md5_gg:function (a, b, c, d, x, s, t) {
            return md5.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
        },

        md5_hh:function (a, b, c, d, x, s, t) {
            return md5.md5_cmn(b ^ c ^ d, a, b, x, s, t);
        },

        md5_ii:function (a, b, c, d, x, s, t) {
            return md5.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
        },

        /*
        *计算小端字符数组的MD5和一个位长度
        * Calculate the MD5 of an array of little-endian words, and a bit length.
        */
       binl_md5:function (x, len) {
            /* append padding */
            x[len >> 5] |= 0x80 << (len % 32);
            x[(((len + 64) >>> 9) << 4) + 14] = len;

            var i, olda, oldb, oldc, oldd,
                a = 1732584193,
                b = -271733879,
                c = -1732584194,
                d = 271733878;

            for (i = 0; i < x.length; i += 16) {
                olda = a;
                oldb = b;
                oldc = c;
                oldd = d;

                a = md5.md5_ff(a, b, c, d, x[i], 7, -680876936);
                d = md5.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
                c = md5.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
                b = md5.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
                a = md5.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
                d = md5.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
                c = md5.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
                b = md5.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
                a = md5.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
                d = md5.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
                c = md5.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
                b = md5.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
                a = md5.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
                d = md5.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
                c = md5.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
                b = md5.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

                a = md5.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
                d = md5.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
                c = md5.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
                b = md5.md5_gg(b, c, d, a, x[i], 20, -373897302);
                a = md5.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
                d = md5.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
                c = md5.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
                b = md5.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
                a = md5.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
                d = md5.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
                c = md5.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
                b = md5.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
                a = md5.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
                d = md5.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
                c = md5.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
                b = md5.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

                a = md5.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
                d = md5.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
                c = md5.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
                b = md5.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
                a = md5.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
                d = md5.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
                c = md5.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
                b = md5.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
                a = md5.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
                d = md5.md5_hh(d, a, b, c, x[i], 11, -358537222);
                c = md5.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
                b = md5.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
                a = md5.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
                d = md5.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
                c = md5.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
                b = md5.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

                a = md5.md5_ii(a, b, c, d, x[i], 6, -198630844);
                d = md5.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
                c = md5.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
                b = md5.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
                a = md5.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
                d = md5.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
                c = md5.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
                b = md5.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
                a = md5.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
                d = md5.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
                c = md5.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
                b = md5.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
                a = md5.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
                d = md5.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
                c = md5.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
                b = md5.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

                a = md5.safe_add(a, olda);
                b = md5.safe_add(b, oldb);
                c = md5.safe_add(c, oldc);
                d = md5.safe_add(d, oldd);
            }
            return [a, b, c, d];
        },

        /*
        * Convert an array of little-endian words to a string
        */
        binl2rstr:function (input) {
            var i,
                output = '';
            for (i = 0; i < input.length * 32; i += 8) {
                output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
            }
            return output;
        },

        /*
        * Convert a raw string to an array of little-endian words
        * Characters >255 have their high-byte silently ignored.
        */
        rstr2binl:function (input) {
            var i,
                output = [];
            output[(input.length >> 2) - 1] = undefined;
            for (i = 0; i < output.length; i += 1) {
                output[i] = 0;
            }
            for (i = 0; i < input.length * 8; i += 8) {
                output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
            }
            return output;
        },

        /*
        * Calculate the MD5 of a raw string
        */
        rstr_md5:function (s) {
            return md5.binl2rstr(md5.binl_md5(md5.rstr2binl(s), s.length * 8));
        },

        /*
        * Calculate the HMAC-MD5, of a key and some data (raw strings)
        */
        rstr_hmac_md5:function (key, data) {
            var i,
                bkey = md5.rstr2binl(key),
                ipad = [],
                opad = [],
                hash;
            ipad[15] = opad[15] = undefined;
            if (bkey.length > 16) {
                bkey = md5.binl_md5(bkey, key.length * 8);
            }
            for (i = 0; i < 16; i += 1) {
                ipad[i] = bkey[i] ^ 0x36363636;
                opad[i] = bkey[i] ^ 0x5C5C5C5C;
            }
            hash = md5.binl_md5(ipad.concat(md5.rstr2binl(data)), 512 + data.length * 8);
            return md5.binl2rstr(md5.binl_md5(opad.concat(hash), 512 + 128));
        },

        /*
        * Convert a raw string to a hex string
        */
        rstr2hex:function (input) {
            var hex_tab = '0123456789abcdef',
                output = '',
                x,
                i;
            for (i = 0; i < input.length; i += 1) {
                x = input.charCodeAt(i);
                output += hex_tab.charAt((x >>> 4) & 0x0F) +
                hex_tab.charAt(x & 0x0F);
            }
            return output;
        },

        /*
        将字符串编码为utf-8
        * Encode a string as utf-8
        */
        str2rstr_utf8:function (input) {
            return unescape(encodeURIComponent(input));
        },

        /*
        接受字符串参数并返回原始或十六进制编码的字符串
        * Take string arguments and return either raw or hex encoded strings
        */
        raw_md5:function (s) {
            return md5.rstr_md5(md5.str2rstr_utf8(s));
        },

        hex_md5:function (s) {
            return md5.rstr2hex(md5.raw_md5(s));
        },

        raw_hmac_md5:function (k, d) {
            return md5.rstr_hmac_md5(md5.str2rstr_utf8(k), md5.str2rstr_utf8(d));
        },

        hex_hmac_md5:function (k, d) {
            return md5.rstr2hex(md5.raw_hmac_md5(k, d));
        },

        md5:function (string, key, raw) {
            if (!key) {
                if (!raw) {
                    console.log(this)
                    return md5.hex_md5(string);
                }
                return md5.raw_md5(string);
            }
            if (!raw) {
                return md5.hex_hmac_md5(key, string);
            }
            return md5.raw_hmac_md5(key, string);
        },
    }
    /**
     * sha1 算法
     */
    var hexcase=0;var b64pad="";var chrsz=8;function hex_sha1(s){return binb2hex(core_sha1(str2binb(s),s.length*chrsz))}function b64_sha1(s){return binb2b64(core_sha1(str2binb(s),s.length*chrsz))}function str_sha1(s){return binb2str(core_sha1(str2binb(s),s.length*chrsz))}function hex_hmac_sha1(key,data){return binb2hex(core_hmac_sha1(key,data))}function b64_hmac_sha1(key,data){return binb2b64(core_hmac_sha1(key,data))}function str_hmac_sha1(key,data){return binb2str(core_hmac_sha1(key,data))}function sha1_vm_test(){return hex_sha1("abc")=="a9993e364706816aba3e25717850c26c9cd0d89d"}function core_sha1(x,len){x[len>>5]|=128<<(24-len%32);x[((len+64>>9)<<4)+15]=len;var w=Array(80);var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;var e=-1009589776;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;var olde=e;for(var j=0;j<80;j++){if(j<16){w[j]=x[i+j]}else{w[j]=rol(w[j-3]^w[j-8]^w[j-14]^w[j-16],1)}var t=safe_add(safe_add(rol(a,5),sha1_ft(j,b,c,d)),safe_add(safe_add(e,w[j]),sha1_kt(j)));e=d;d=c;c=rol(b,30);b=a;a=t}a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);e=safe_add(e,olde)}return Array(a,b,c,d,e)}function sha1_ft(t,b,c,d){if(t<20){return(b&c)|((~b)&d)}if(t<40){return b^c^d}if(t<60){return(b&c)|(b&d)|(c&d)}return b^c^d}function sha1_kt(t){return(t<20)?1518500249:(t<40)?1859775393:(t<60)?-1894007588:-899497514}function core_hmac_sha1(key,data){var bkey=str2binb(key);if(bkey.length>16){bkey=core_sha1(bkey,key.length*chrsz)}var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++){ipad[i]=bkey[i]^909522486;opad[i]=bkey[i]^1549556828}var hash=core_sha1(ipad.concat(str2binb(data)),512+data.length*chrsz);return core_sha1(opad.concat(hash),512+160)}function safe_add(x,y){var lsw=(x&65535)+(y&65535);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&65535)}function rol(num,cnt){return(num<<cnt)|(num>>>(32-cnt))}function str2binb(str){var bin=Array();var mask=(1<<chrsz)-1;for(var i=0;i<str.length*chrsz;i+=chrsz){bin[i>>5]|=(str.charCodeAt(i/chrsz)&mask)<<(32-chrsz-i%32)}return bin}function binb2str(bin){var str="";var mask=(1<<chrsz)-1;for(var i=0;i<bin.length*32;i+=chrsz){str+=String.fromCharCode((bin[i>>5]>>>(32-chrsz-i%32))&mask)}return str}function binb2hex(binarray){var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var str="";for(var i=0;i<binarray.length*4;i++){str+=hex_tab.charAt((binarray[i>>2]>>((3-i%4)*8+4))&15)+hex_tab.charAt((binarray[i>>2]>>((3-i%4)*8))&15)}return str}function binb2b64(binarray){var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var str="";for(var i=0;i<binarray.length*4;i+=3){var triplet=(((binarray[i>>2]>>8*(3-i%4))&255)<<16)|(((binarray[i+1>>2]>>8*(3-(i+1)%4))&255)<<8)|((binarray[i+2>>2]>>8*(3-(i+2)%4))&255);for(var j=0;j<4;j++){if(i*8+j*6>binarray.length*32){str+=b64pad}else{str+=tab.charAt((triplet>>6*(3-j))&63)}}}return str};
    /**
     * trackEvent baiduInit 百度统计配置
     */
    var tracking={
        baiduInit:function(id){
            window['_hmt'] = window['_hmt'] || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?"+id;
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        
            $(document).on('click', "[data-tracking='baidu']", function(e){
                tracking.trackEvent($(this).data('text'),$(this).data('event'));
            }).on('touchstart', "[data-tracking-touch='baidu']", function(e){
                tracking.trackEvent($(this).data('text'),$(this).data('event'));
            });
        },
        trackEvent:function(text = '', event = 'click',label='') {
            if(window['_hmt']){
                _hmt.push(['_trackEvent', text, event, label]);
            }else{
                console.error('没有初始化百度统计代码');
            }
        },
        trackPageview:function(value) {
            if(window['_hmt']){
                _hmt.push(['_trackPageview', value]);
            }else{
                console.error('没有初始化百度统计代码');
            }
        }
    }
    MYAPP.fn={
        /**
         * 百度统计 
         * @param {百度统计id} id
         */
        baiduInit:tracking.baiduInit,
        /**
         * 
         * @param {需要加密的字符串} string
         * @param {} key
         * @param {} raw
         */
        md5:md5.md5,
        /**
         * 
         * @param {sha1} 算法 
         */
        hex_sha1:hex_sha1,
        /**
         * 
         * @param {判断是否是中文} str 
         */
        isChinese : function(str){
            if(str.length!=0){
                reg=/^[\u0391-\uFFE5]+$/;
                if(!reg.test(str)){
                    return false;
                }
            }
            return true;
        },
        /**
         * 
         * @param {filterHtMLTag} msg 字符串 
         * @returns 过滤掉html标签 
         */
        filterHTMLTag : function (msg) {
            var msg = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
            msg = msg.replace(/[|]*\n/, '') //去除行尾空格
            msg = msg.replace(/&npsp;/ig, ''); //去掉npsp
            return msg;
        },
        /**
         * 
         * @param {转义html标签} text 
         */
        htmlEncode: function(text) {
            return text.replace(/&/g, '&').replace(/\"/g, '"').replace(/</g, '<').replace(/>/g, '>');
        },
        htmlDecode:function(text) {
            return text.replace(/&/g, '&').replace(/"/g, '\"').replace(/</g, '<').replace(/>/g, '>')
        },
        /**
         * 
         * @param {*} str 
         * trim 去掉左右空格
         * ltrim 去掉左边空格
         * rtrim 去掉右边空格
         */
        trim:function(str){
            return str.replace(/(^\s*)|(\s*$)/g,"");
        },
        ltrim : function(str){
            return str.replace(/(^\s*)/g,"")
        },
        rtrim : function(str){
            return str.replace(/(\s*$)/g,"")
        },
        /**
         * 
         * @param {判断是否为空} str 
         * @returns 空返回 true 不为空 false
         */
        isEmpty : function(str){
            if(str==null||typeof str=="undefined"||this.trim(str)=="") return true; 
            return false;
        },
        /**
         * 
         * @param {geturlParmes} name url携带的参数名称
         * @returns 返回指定的参数的值
         */
        geturlParmes:function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            var q = window.location.pathname.substr(1).match(reg_rewrite);
            if(r != null){
                return unescape(r[2]);
            }else if(q != null){
                return unescape(q[2]);
            }else{
                return null;
            }
        },
        /**
         * @格式化金额 千分位逗号分隔 默认
         * @1.支持负数 2.四舍五入
         * @param {需要格式化的字符} num 
         * @例如123456789.456 => 123,456,789.46
         */
        formatCurrency : function(num) {
            num = num.toString().replace(/\$|\,/g, '');
            if (isNaN(num)){
                return false;
            };
            var sign = (num == (num = Math.abs(num)));
            num = Math.floor(num * 100 + 0.50000000001);
            var cents = num % 100;
            num = Math.floor(num / 100).toString();
            if (cents < 10){
                cents = "0" + cents;
            }
                
            for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++){
                num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
            }
            return (((sign) ? '' : '-') + num + '.' + cents);
        },
        /**
         * 
         * @param {生成随机字母数字字符串} len 
         */
        generateRandomAlphaNum:function(len) {
            var rdmString = "";
            for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
            return  rdmString.substr(0, len);
        },
        /**
         * 
         * @param {数组} arr 
         * @param {子数组的长度} num
         * @returns 返回一个二级数组 
         */
        arrGrouping:function(arr=[], num=4){
            var arrLen = arr.length
            var arrGrouping = []
            for( var i=1; i<=Math.ceil(arrLen/num); i++ ){
                arrGrouping.push([])
                arr.forEach(function(item, index){
                    if( index<i*num&&index>=(i*num-num) ){
                        arrGrouping[(i-1)].push(item)
                    }
                })
            }
            return arrGrouping
        },
        /**
         * @since 时间格式转换
         * @param {传递一个毫秒数} leftTime 
         * @returns 00:00:00
         */
        countTimeNum : function (leftTime,is_dot){
            let d = Math.floor(leftTime/1000/60/60/24);  
            let h = Math.floor(leftTime/1000/60/60%24);  
            let m = Math.floor(leftTime/1000/60%60);  
            let s = Math.floor(leftTime/1000%60);
            let ds = (d*24)+h
            // //console.log((h<=9?"0"+h:h)+':'+(m<=9?"0"+m:m)+':'+(s<=9?"0"+s:s))
            if( (d+h+m+s)<=0 ) return !is_dot?'00:00:00':'00小时00分钟00秒';
            if(is_dot){
                return (ds<=9?"0"+ds:ds)+'小时'+(m<=9?"0"+m:m)+'分钟'+(s<=9?"0"+s:s)+'秒'
            }
            return (ds<=9?"0"+ds:ds)+':'+(m<=9?"0"+m:m)+':'+(s<=9?"0"+s:s)
        },
        /**
         * 
         * @param {倒计时时间} leftTime 
         * @param {事件回调} cb 
         * @param {是否显示中文倒计时} is_dot
         */
        countTime :function(leftTime, cb,is_dot){    
            let t = leftTime
            let times = setInterval(()=>{
                t = t-1000
                let lastNum = this.countTimeNum(t,is_dot)
                if( lastNum<=0 ){
                    clearInterval(times)            
                    cb(!is_dot?'00:00:00':'00小时00分钟00秒')
                    return;
                }
                cb&&cb(lastNum)
            },1000)
        },
        /**
         * 
         * @param {当前数量,trye Number} num 
         * @param {总数量,trype Number} total 
         * @returns 返回当前站总数的百分比
         */
        getPercent:function (num, total){
            num = parseFloat(num); 
            total = parseFloat(total); 
            if (isNaN(num) || isNaN(total)) { 
            return "-"; 
            } 
            return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00 + "%");    
        },
        /**
         * 
         * @param {快速取数组的最大值} arr 
         */
        getMaxNumber:function(arr){
            return Math.max.apply(Math, arr);
        },
        /**
         * 
         * @param {快速取数组的最小值} arr 
         */
        getMinNumber:function(arr){
            return Math.min.apply(Math, arr);
        },
        /**
         * 
         * @param {删除数组中重复的元素} data 
         */
        uniqueArr:function(data){  
            data = data || [];  
            var a = {};  
            for (var k=0; k<data.length; k++) {  
                var v = data[k];  
                if (typeof(a[v]) == 'undefined'){  
                    a[v] = 1;  
                }  
            };  
            data.length=0;  
            for (var k in a){  
                data[data.length] = k;  
            }  
            return data;  
        },
        /**
         * 
         * @param {返回随机数} aArray 
         */
        randomize:function (aArray) {
            var aCopy = aArray.concat();
            var aRandomized = new Array();
            var nRandom;
            for (var i = 0; i < aCopy.length; i++) {
                nRandom = Math.floor(Math.random() * aCopy.length);
                aRandomized.push(aCopy[nRandom]);
                aCopy.splice(nRandom, 1);
                i--;
            }
            return aRandomized;
        },
        /**
         * 
         * @param {选取数组的对象} arr 
         * @param {选择随机的几条数据} count 
         */
        getRandomCount : function(arr, count) {
            var randomArr = this.randomize(arr);
            return randomArr.slice(0, count);
        },
        /**
         * 
         * @param {操作的字符串} str 
         * @param {字符串截取上次} len 
         * @returns 返回截取后的字符串
         */
        cutstr:function(str, len) {
            var temp;
            var icount = 0;
            var patrn = /[^\x00-\xff]/;
            var strre = "";
            for (var i = 0; i < str.length; i++) {
                if (icount < len - 1) {
                    temp = str.substr(i, 1);
                    if (patrn.exec(temp) == null) {
                        icount = icount + 1
                    } else {
                        icount = icount + 2
                    }
                    strre += temp
                } else {
                    break
                }
            }
            return strre + "...";
          }

    }
    module.exports=MYAPP

    