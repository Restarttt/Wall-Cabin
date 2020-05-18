//special.js
const app = getApp()

Page({
  data: {
    displayMultipleItems: 1,
    autoplay: false,
    interval: "3000",
    duration: "1000",
    lisa: []
  },
  go(e) {
    console.log('file_id==', e.target.dataset.item)
    const id = e.target.dataset.item
    console.log('id==', id)
    wx.navigateTo({
      url: '/pages/detail/detail?fileid=' + id
    })
  },
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'Lalisa',
      data: {},
      success: res => {
        // console.log(res)
        this.setData({
          lisa: res.result.list,
        })
      },
      fail: err => {
        console.log(err)
      }
    })
    wx.showToast({
      title: '图片均可滑动',
      duration: 10000
    })
  }

})