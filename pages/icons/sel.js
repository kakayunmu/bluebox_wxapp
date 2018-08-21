// pages/icons/sel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item_height: wx.getSystemInfoSync().windowWidth/3+'px',
    icons:[
      {
        name:'分类',
        id:'icon-fenlei'
      },
      {
        name:'标签',
        id:'icon-tag'
      },
      {
        name:'相机',
        id:'icon-xiangji'
      },
      {
        name:'盒子',
        id:'icon-box-solid'
      },
      {
        name: '面包',
        id: 'icon-mianbao'
      },
      {
        name: '碗',
        id: 'icon-wan'
      },
      {
        name: '蔬菜',
        id: 'icon-shucai'
      },
      {
        name: '肉',
        id: 'icon-rou'
      },
      {
        name: '胶带',
        id: 'icon-wentixiaotubiao'
      },
      {
        name: '衣柜',
        id: 'icon-yigui1'
      },
      {
        name: '餐桌',
        id: 'icon-TIFFANYSROOM_huaban'
      },
      {
        name: '香烟',
        id: 'icon-yan_'
      },
      {
        name: '酒',
        id: 'icon-jiu'
      },
      {
        name: '小家电',
        id: 'icon-xiaojiadian'
      },
      {
        name: '茶几',
        id: 'icon-chaji'
      },
      {
        name: '毛衣',
        id: 'icon-maoyi'
      },
      {
        name: '鱼',
        id: 'icon-yu'
      },
      {
        name: '老人椅',
        id: 'icon-jiaju-laorenyi'
      },
      {
        name: '书桌',
        id: 'icon-jiaju-shuzhuo'
      },
      {
        name: '马桶',
        id: 'icon-jiaju-matong'
      },
      {
        name: '裤子',
        id: 'icon-icon-kuzi'
      },
      {
        name: '牙膏牙刷',
        id: 'icon-tubiaozhizuomoban-'
      },
      {
        name: '电器',
        id: 'icon-dianqi'
      },
      {
        name: '调料',
        id: 'icon-tiaoliao'
      },
      {
        name: '桌子',
        id: 'icon-zhuozi'
      },
      {
        name: '鞋柜',
        id: 'icon-xiegui'
      },
      {
        name: '衣橱',
        id: 'icon-yigui'
      },
      {
        name: '电视柜',
        id: 'icon-dianshigui'
      },
      {
        name: '床',
        id: 'icon-chuang'
      },
      {
        name: '筷子勺子',
        id: 'icon-shaozikuaizi'
      },
      {
        name: '电视',
        id: 'icon-dianshi'
      },
      {
        name: '容器',
        id: 'icon-icon-test1'
      },
      {
        name: '保险柜',
        id: 'icon-baoxiangui'
      },
      {
        name: '男人',
        id: 'icon-nanren'
      },
      {
        name: '冰箱',
        id: 'icon-bingxiang'
      },
      {
        name: '充电器',
        id: 'icon-Concise'
      },
      {
        name: '钥匙',
        id: 'icon-yuechi'
      },
      {
        name: '瓶子',
        id: 'icon-pingzi'
      },
      {
        name: '洗手间',
        id: 'icon-xishoujian'
      },
      {
        name: '篮球',
        id: 'icon-lanqiu'
      },
      {
        name: '笔记本',
        id: 'icon-bijiben1'
      },
      {
        name: '手机',
        id: 'icon-phone'
      },
      {
        name: '沙发',
        id: 'icon-shafa'
      },
      {
        name: '空调',
        id: 'icon-kongtiao'
      },
      {
        name: '微波炉',
        id: 'icon-weibolu'
      },
      {
        name: '玩具',
        id: 'icon-wanju'
      },
      {
        name: '厨房',
        id: 'icon-chufang'
      },
      {
        name: '食物',
        id: 'icon-shiwu'
      },
      {
        name: '婴儿车',
        id: 'icon-yingerche'
      },
      {
        name: '便签',
        id: 'icon-icon-test'
      },
      {
        name: '雨伞',
        id: 'icon-yusan'
      },
      {
        name: '家具',
        id: 'icon-jiaju'
      },
      {
        name: '生活用品',
        id: 'icon-shenghuoyongpin'
      },
      {
        name: '餐厅',
        id: 'icon-canting'
      },
      {
        name: '衣服',
        id: 'icon-yifu'
      },
      {
        name: '杯子',
        id: 'icon-cup'
      },
      {
        name: '儿童',
        id: 'icon-ertong'
      },
      {
        name: '电脑桌',
        id: 'icon-diannaozhuo'
      },
      {
        name: '家',
        id: 'icon-jia'
      },
      {
        name: '鞋子',
        id: 'icon-xiezi1'
      },
      {
        name: '宠物',
        id: 'icon-chongwu'
      },
      {
        name: '笔记本',
        id: 'icon-bijiben'
      },
      {
        name: '锅',
        id: 'icon-guo'
      },
      {
        name: '家居百货',
        id: 'icon-jiajubaihuo'
      },
      {
        name: '箱子',
        id: 'icon-boxxiangzi'
      },
      {
        name: '盒子',
        id: 'icon-hezi401'
      },
      {
        name: '洗衣机',
        id: 'icon-xiyiji'
      },
      {
        name: '卧室',
        id: 'icon-woshixianxing'
      },
      {
        name: '儿童',
        id: 'icon-ertongxianxing'
      },
      {
        name: '包包',
        id: 'icon-56'
      },
      {
        name: '儿童母婴',
        id: 'icon-ertongmuying'
      },
      {
        name: '电脑',
        id: 'icon-diannao'
      },
      {
        name: '鞋子',
        id: 'icon-xiezi'
      },
      {
        name: '客厅',
        id: 'icon-keting'
      },
      {
        name: '女人',
        id: 'icon-nvren'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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
  
  }
})