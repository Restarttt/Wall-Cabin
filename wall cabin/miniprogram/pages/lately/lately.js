// pages/lately/lately.js
Page({
  data: {
    list: [],
    bg: true,
    dialogShow: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定',
    }],
  },
  go(e) {
    const id = e.target.dataset.img
    console.log(e)
    wx.navigateTo({
      url: '/pages/detail/detail?fileid=' + id
    })
  },
  clear() {
    this.setData({
      dialogShow: true,
    })
  },
  tapDialogButton(e) {
    wx.cloud.callFunction({
      name: 'lately',
      data: {
        action: 'clear',
        clear: e.target.dataset.list
      },
      success: res => {
        console.log(res)
        if (e.detail.index === 1) {
          console.log(e.target.dataset.list)
          this.data.list.splice(e.target.dataset.list)
          this.setData({
            dialogShow: false,
            list: this.data.list
          })
          wx.showToast({
            title: '清空了',
            icon: 'success',
            duration: 1000
          })
        } else {
          this.setData({
            dialogShow: false,
          })
          wx.showToast({
            title: '取消成功',
            icon: 'success',
            duration: 1000
          })
        }
      },
      fail: err => {
        console.log(ess)
      }
    })
  },
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'lately',
      data: {
        action: 'getlist'
      },
      success: res => {
        console.log(res)
        this.setData({
          list: res.result.list,
        })
        if (this.data.list.length != 0) {
          this.setData({
            bg: false
          })
        } else {
          this.setData({
            bg: true
          })
        }
      },
      fail: err => {
        console.log(err)
      }
    })
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