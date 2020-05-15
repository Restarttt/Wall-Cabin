//special.js
const app = getApp()

Page({
  data: {
    displayMultipleItems: 1,
    autoplay: true,
    interval: "3000",
    duration: "1000",
    lisa:[]
  },
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'Lalisa',
      data: {},
      success: res => {
        this.setData({
          lisa: res.result.list,
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  }

})