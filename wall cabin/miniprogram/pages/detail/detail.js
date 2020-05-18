// pages/detail/detail.js
Page({
  data: {
    name: '',
    title: [],
    img: '',
    // imgurls: [''],
    // show: false,
    showActionsheet: false,
    collect_show: false,
    collect_hidden: true,
    service: false,
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
  // 点击保存到系统相册
  save() {
    wx.saveImageToPhotosAlbum({
      success(res) {
        console.log(res)
      }
    })
  },
  // 点击出大图
  big(e) {
    console.log(e)
    const that = this
    const fileid = e.target.dataset.img
    wx.previewImage({
      current: fileid, // 当前显示图片的http链接
      urls: [that.data.img] // 需要预览的图片http链接列表
    })
    // this.setData({
    //   show: true
    // })
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
    } else if (this.data.collect_hidden === true) {
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
    if (e.detail.index <= 1) {
      wx.showToast({
        title: '举报成功',
        success: 'success',
      })
      this.setData({
        showActionsheet: false
      })
    } else {
      this.setData({
        service: true,
        showActionsheet: false
      })
    }
  },
  close() {
    console.log('close')
    this.setData({
      showActionsheet: false
    })
  },
  cancal() {
    this.setData({
      service: false,
    })
  },
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'detail',
      data: {
        file: options.fileid
      },
      success: res => {
        // console.log(res)
        // console.log(res.result.list[0])
        this.setData({
          img: options.fileid,
          name: res.result.list[0],
          title: res.result.list[0],
        })
      },
      fail: err => {
        console.log(err)
      }
    })
    wx.showLoading({
      title: 'loading',
    })
    
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
  }
})