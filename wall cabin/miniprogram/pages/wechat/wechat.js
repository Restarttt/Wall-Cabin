// pages/wechat/wechat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
  },
  big(e) {
    console.log(e)
    const that = this
    const fileid = e.currentTarget.dataset.img
    wx.previewImage({
      current: fileid, // 当前显示图片的http链接
      urls: fileid // 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'wechat',
      data: {},
      success: res => {
        console.log(res.result.list)
        this.setData({
          list: res.result.list
        })
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