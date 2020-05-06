// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {


  },
  copy(){
    wx.setClipboardData({
      data: 'Shot-ZH',
      success (res) {
        wx.getClipboardData({
          success (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  copy_1(){
    wx.setClipboardData({
      data: '1546838798@qq.com',
      success (res) {
        wx.getClipboardData({
          success (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },


})