// pages/about/about.js
Page({
  data: {},
  // 点击复制
  copy() {
    wx.setClipboardData({
      data: 'Shot-ZH',
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  copy_1() {
    wx.setClipboardData({
      data: '1546838798@qq.com',
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  copy_2() {
    wx.setClipboardData({
      data: '1546838798',
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  /* 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
    wx.showLoading({
        title: '刷新中',
      }),
      setTimeout(function () {
        console.log(1)
        wx.hideLoading()
        wx.stopPullDownRefresh()
      }, 200)
  }
})