module.exports = {
    // 游戏用户信息 进来请求
    // 首页
    userinfo(data){
        return request("api/userinfo",data)
    },
    info(data){
        return request("api/login",data)
    },
    login(data) {
        return request("api/index", data)
    },
    // 注册
    register(data){
        return request('api/register',data,"post")
    },
    //客服
    speak(data){
        return request('api/speak',data,"post")
    },
    // 获取聊天信息
    getspeak(data){
        return request('api/getspeak',data,'',true)
    },
    // banner
    banner(data){
        return request("api/banner", data)
    },
    // 更多
    allkind(data){
        return request("api/allkind", data)
    },
    // more
    more(data){
        return request("api/more", data)
    },
    more_right(data){
        return request("api/more_right", data)
    },
    // 修改昵称
    changeNickName(data){
        return request("api/change_userinfo",data)
    },
    addAddress(data){
        return request("api/add_address",data)
    },
    // 地址列表
    address_list(data){
        return request("api/address_list",data)
    },
    add_shoping(data){
        return request('api/add_shoping',data,"POST")
    }
}

function request(url, data = {},type,ble) {
    var dtd = $.Deferred();
    if(!ble){
        vueApp.Loading.open();
    }
    if(type){
        $.post(vueApp.config.nodeServerPathZS + url ,data)
            .done(res => {
                dtd.resolve(res)
            })
            .fail(res => {
                console.log(res)
                dtd.reject(res);
                vueApp.alert("网络错误！")
            })
            .always((res) => {
                if(!ble){
                    vueApp.Loading.close();
                }
                
            })
    }else{
        $.get(vueApp.config.nodeServerPathZS + url , data)
        .done(res => {
            dtd.resolve(res)
        })
        .fail(res => {
            console.log(res)
            dtd.reject(res);
            vueApp.alert("网络错误！")
        })
        .always((res) => {
            if(!ble){
                vueApp.Loading.close();
            }
        })
    }
   
    return dtd;
}