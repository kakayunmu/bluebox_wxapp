// pages/my/lableList.js
var app=getApp();
var authorization = wx.getStorageSync("authorization");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lables:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadLableData(0,10);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  goEditLable:function(){
    wx.navigateTo({
      url: '/pages/my/lableEdit',
    })
  },
  loadLableData:function(page,size){
    wx.request({
      url: app.globalData.host + '/api/lable/getlist/'+page+'/'+size,
      header: {
        'Authorization': authorization
      },
      success:function(data){
        console.log(data);
      },
      fail:function(){
        console.log("============>fail");
      }
    });
  }
})