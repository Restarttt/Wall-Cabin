// pages/collect/collect.js
Page({
  data: {
    bg: true,
    dialogShow: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定',
    }],
    list: []
  },
  tapDialogButton(e) {
    // console.log('detele', e)
    wx.cloud.callFunction({
      name: 'collect',
      data: {
        action: 'getcancel',
        cancel: e.target.dataset.file_id
      },
      success: res => {
        console.log(res)
        if (e.detail.index == 1) {
          this.data.list.splice(e.target.dataset.index, 1)
          this.setData({
            dialogShow: false,
            list: this.data.list
          })
        } else {
          this.setData({
            dialogShow: false
          })
          wx.showToast({
            title: '取消成功',
            icon: 'success',
            duration: 1000
          })
        }
      },
      fail: res => {
        console.log(res)
      }
    })
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
  onLoad: function () {
    wx.cloud.callFunction({
      name: 'collect',
      data: {
        action: 'getlist'
      },
      success: res => {
        this.setData({
          list: res.result.list
        })

      },
      fail: err => {
        console.log(err)
      }
    })
  },
  onShow: function () {
    wx.cloud.callFunction({
      name: 'collect',
      data: {
        action: 'getlist'
      },
      success: res => {
        // console.log(res)
        console.log('collcet', res.result.list)
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
})