// pages/head/head.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []

  },
  big(e) {
    console.log(e)
    const that = this
    const fileid = e.target.dataset.img
    const index = e.target.dataset.index
    wx.previewImage({
      current: fileid, // 当前显示图片的http链接
      urls: [that.data.list[index].file_id] // 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'head',
      data: {},
      success: res => {
        console.log(res)
        this.setData({
          list: res.result.list
        })
      },
      fail: err => {
        console.log(err)
      }
    })
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