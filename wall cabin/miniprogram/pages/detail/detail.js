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
    // console.log(1)
    // return {
    //   title: "",
    //   path: '../../images/scenery/26569f5076666e483c9abd46e556ea6.jpg',
    //   success: function (res) {
    //     console.log('成功', res)
    //   }
    // }
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
  },
  // 收藏按钮
  collect(e) {
    console.log(this.data.collect_show)
    // console.log(e)
    this.setData({
      collect_show: !(this.data.collect_show),
      collect_hidden: !(this.data.collect_hidden)
    })
    if (this.data.collect_show === true) {
      wx.showToast({
        title: '收藏成功',
        success: 'success'
      })
      wx.cloud.callFunction({
        name: 'collect',
        data: {
          file_id: e.currentTarget.dataset.img,
          action: 'getcollect'
        },
        success: res => {
          console.log('收藏', res)
        },
        fail: err => {
          console.log(err)
        }
      })
    } else if (this.data.collect_hidden === true) {
      wx.showToast({
        title: '取消收藏',
        success: 'success'
      })
    }
  },
  // 取消收藏
  cancel(e) {
    wx.cloud.callFunction({
      name: 'collect',
      data: {
        cancel: e.currentTarget.dataset.img,
        action: 'getcancel'
      },
      success: res => {
        console.log('取消', res)
      },
      fail: err => {
        console.loe(err)
      }
    })
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
  // 举报按钮
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
  // 请求详细信息和收藏状态
  onLoad: function (options) {
    console.log(options)
    wx.cloud.callFunction({
      name: 'detail',
      data: {
        file: options.fileid
      },
      success: res => {
        setTimeout(function () {
          wx.hideLoading()
        })
        this.setData({
          img: options.fileid,
          name: res.result.detail[0],
          title: res.result.detail[0],
        })
      },
      fail: err => {
        console.log(err)
      }
    })
    wx.cloud.callFunction({
      name: 'collect',
      data: {
        action: 'getcollectmsg',
        file_id: options.fileid
      },
      success: res => {
        console.log('已收藏状态', res)
        this.setData({
          collect_show: res.result,
          collect_hidden: !res.result,
        })
      },
      fail: err => {
        console.log(err)
      }
    })
    wx.showLoading({
      title: 'loading',
    })
  },
  /* 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})