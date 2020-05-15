  //index.js
  const app = getApp()

Page({
  data: {
    autoplay: true,
    indicatorDots: true,
    indicatorActiveColor: "#FFF",
    indicatorColor: "rbga(251,255,242)",
    circular: true,
    interval: "3000",
    duration: "1000",
    mode: 'aspectFill',
    list: [],
    icon_list: [{
      img: "../../images/icon/specially.png",
      text: "专栏",
      url: '../special/special'
    }, {
      img: "../../images/icon/sort.png",
      text: "排行",
      url: '../special/special'
    }, {
      img: "../../images/icon/face.png",
      text: "表情",
      url: '../special/special'
    }, {
      img: "../../images/icon/hot1.png",
      text: "热门",
      url: '../special/special'
    }, {
      img: "../../images/icon/random.png",
      text: "随机",
      url: '../special/special'
    }, {
      img: "../../images/icon/4K.png",
      text: "4K",
      url: '../special/special'
    }, {
      img: "../../images/icon/pc.png",
      text: "PC",
      url: '../special/special'
    }, {
      img: "../../images/icon/more.png",
      text: "更多",
      url: '../special/special'
    }],
    scenery: []
  },
  back() {
    console.log(111)
    wx.switchTab({
      url: '/pages/search/search',
    })
  },
  go() {
    wx.navigateTo({
      url: '../../pages/detail/detail',
    })
  },
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'home',
      data: {},
      success: res => {
        // console.log(res)
        this.setData({
          list: res.result.list,
        })
      },
      fail: err => {
        console.log(err)
      }
    })
    wx.cloud.callFunction({
      name: 'scenery',
      data: {},
      success: res => {
        // console.log(res)
        // console.log('back', res.result.scenery)
        this.setData({
          scenery: res.result.scenery
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  }
})