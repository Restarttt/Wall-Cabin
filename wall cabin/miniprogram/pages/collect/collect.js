// pages/collect/collect.js
Page({
  data: {
    dialogShow: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定',
    }],
    list: []
  },
  tapDialogButton(e) {
    wx.cloud.callFunction({
      name: 'collect',
      data: {

      },
      success: res => {
        console.log(res)
      },
      fail: res => {
        console.log(res)
      }
    })
    if (e.detail.index == 1) {
      this.data.list.splice(e.target.dataset.index, 1)
      console.log(e)
      console.log(e.target.dataset.index)
      console.log(e.target.dataset.list)
      this.setData({
        dialogShow: false,
        list: this.data.list,
      })
      wx.showToast({
        title: '取消成功',
        icon: 'success',
        duration: 2000
      })
    } else {
      this.setData({
        dialogShow: false,
      })
    }
  },
  delete(e) {
    this.setData({
      dialogShow: true
    })
  },
  go(e) {
    const id = e.target.dataset.img
    console.log(e)
    wx.navigateTo({
      url: '/pages/detail/detail?fileid=' + id
    })
  },
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'collect',
      data: {
        action: 'getlist'
      },
      success: res => {
        console.log(res)
        console.log('collcet', res.result.list)
        this.setData({
          list: res.result.list,
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  }
})