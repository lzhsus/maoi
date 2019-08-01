<template>
    <div class="tabbar" id="tabbat">
        <div class="tabbat-content">
            <div v-for="item in tabbarList" @click="pageBtn(item)" :class="seleid==item.id?'app-foot-item active':'app-foot-item' ">
               <div :style="{backgroundImage: 'url(' + (seleid==item.id ? item.aEle : item.ele) + ')'}"></div>
               <div>{{item.value}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import geturlParmes from "static/js/geturlParmes"
import routerName from "static/js/routerName"

export default {
    props:["seleid"],
    data(){
        return{
            tabbatid:1,
            tabbarList:[{
                id:1,
                value:'首页',
                ele:require("../../static/images/icon/community-active.png"),
                aEle:require("../../static/images/icon/community.png"),
                page:''
            },{
                id:2,
                value:'我的',
                ele:require("../../static/images/icon/main.png"),
                aEle:require("../../static/images/icon/main-active.png"),
                page:'main'
            }]
        }
    },
    methods:{
		pageBtn(item){
            window.location.href=vueApp.href(item.page)
		}
    }
}
</script>

<style lang="less" scoped>
#tabbat{
    width:100%;height: 50Px;
    .tabbat-content{
		position: fixed;bottom: 0;left: 0;
		height: 50Px;width: 100%;
		display: flex;justify-content: space-between;align-items: center;
		.app-foot-item{
			height: 50Px;width: 25%;
            background: #eeeeee;
            flex: 1;
            display: flex;justify-content: center;align-items: center;
            flex-direction: column;
            div:nth-of-type(1){
                width: 50px;height: 50px;
                padding: 2px;box-sizing: border-box;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: contain;
            }
            div:nth-of-type(2){
                font-size: 12Px;color:#8a8a8a;
            }
            &.active{
                div:nth-of-type(2){
                   color: #008cff;
                }
            }
		}
	}
}

</style>
