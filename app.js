const config = require('utils/util.js')
//app.js
App({
  onLaunch: function() {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          console.log('login 获取到的jcode===>'+res.code);
          wx.request({
            url:this.globalData.host+'/api/login/'+res.code,
            method:'GET',
            dataType:'json',
            success:res=>{
              if (res.data&&res.data.data){
                //缓存Authorization
                console.log("缓存Authorization=======>" + res.data.data);
                wx.setStorageSync('authorization', res.data.data);
              }else{
                wx.showModal({
                  title: '提示',
                  content: '请求远程数据错误：'+res.statusCode
                })
              }              
            },
            fail:()=>{
              console.log('=========>fail');
            }
          });
        }
      }
    });
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              var authorization = wx.getStorageSync("authorization");
              var userInfo = res.userInfo;
              // 将微信用户信息存放在 globle里
              this.globalData.userInfo = userInfo;
              
              console.log("获取到的微信用户信息========>" + JSON.stringify(userInfo));
              //保存用户信息
              wx.request({
                url: this.globalData.host +'/api/setUserInfo',
                method:'POST',
                dataType:'json',
                header:{
                  'Authorization': authorization
                },
                data:{
                  "nick_name": userInfo.nickName,
                  "avatar_url": userInfo.avatarUrl,
                  "gender": userInfo.gender,
                  "city":userInfo.city,
                  "province": userInfo.province,
                  "country":userInfo.city,
                  "language": userInfo.language
                },
                success:res2=>{
                  console.log('========>success');
                  console.log(res2);
                },
                fail:()=>{
                  console.log('=========>fail');
                }
              })

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }else{
          console.log(res);
        }
      }
    })
  },
  globalData: {
    host:'https://qyygpt.cn',
    userInfo: null
  }
})