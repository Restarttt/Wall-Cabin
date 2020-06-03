// pages/wallpaper/wallpaper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bg:null,
    list:[]
  },
  go(e){
    console.log(e)
    const img=e.currentTarget.dataset.img
    wx.navigateTo({
      url: '../detail/detail?fileid='+img,
    })
    wx.cloud.callFunction({
      name: 'lately',
      data: {
        file_id: e.currentTarget.dataset.img,
        action: 'getvisit'
      },
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  onLoad: function (options) {
    console.log(options)
    wx.cloud.callFunction({
      name:'wallpaper',
      data:{
        key: options.key
      },
      success:res=>{
        console.log(res)
        this.setData({
          list:res.result.list
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
      fail:err=>{
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