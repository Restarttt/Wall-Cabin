// pages/detail/detail.js
Page({
  data: {
    imgurls: [
      'http://img5.imgtn.bdimg.com/it/u=3512607595,3037015550&fm=26&gp=0.jpg',
    ],
    show: false,
    collect_show: false,
    collect_hidden: true,
    groups: [{
        text: '图片缺失',
        value: 1
      },
      {
        text: '不雅内容',
        value: 2
      },
      {
        text: '版权问题',
        // type: 'warn',
        value: 3
      }
    ]
  },
  // 跳转
  go() {
    console.log(222)
    wx.switchTab({
      url: '../../pages/index/index',
    })
  },
  // 下载
  download() {
    console.log(33)
    wx.saveImageToPhotosAlbum({
      success(res) {}
    })
  },
  // 分享
  onShareAppMessage: function (res) {
    return {
      title: "",
      path: '../../images/scenery/26569f5076666e483c9abd46e556ea6.jpg',
      success: function (res) {
        console.log('成功', res)
      }
    }
  },
  // 点击出大图
  big() {
    this.setData({
      show: true
    })
  },
  // 收藏按钮
  collect() {
    console.log(this.data.collect_show)
    this.setData({
      collect_show: !(this.data.collect_show),
      collect_hidden: !(this.data.collect_hidden)
    })
    if (this.data.collect_show === true) {
      wx.showToast({
        title: '收藏成功',
        success: 'success'
      })
    } else if(this.data.collect_hidden === true) {
      wx.showToast({
        title: '取消收藏',
        success: 'success'
      })

    }

  },
  // 下拉框
  report() {
    console.log('report')
    // let a = this
    // setTimeout(function () {
    this.setData({
      showActionsheet: true
    })
    // }, 3000)
  },
  btnClick(e) {
    console.log(e)
    if (e.detail.index <= 2) {
      wx.showToast({
        title: '举报成功',
        success: 'success',
      })
      this.setData({
        showActionsheet: false
      })
    }
  },
  close() {
    console.log('close')
    this.setData({
      showActionsheet: false
    })
  }
})