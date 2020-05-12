// pages/detail/detail.js
Page({
  data: {
    imgurls: [
      'http://img5.imgtn.bdimg.com/it/u=3512607595,3037015550&fm=26&gp=0.jpg',
    ],
    show: false,
    showActionsheet: false,
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
  // big() {
  //   this.setData({
  //     show: true
  //   })
  // }
  big() {
    console.log(11)
    wx.previewImage({
      current: 'http://img5.imgtn.bdimg.com/it/u=3512607595,3037015550&fm=26&gp=0.jpg', // 当前显示图片的http链接
      urls: ['http://img5.imgtn.bdimg.com/it/u=3512607595,3037015550&fm=26&gp=0.jpg'] // 需要预览的图片http链接列表
    })
    console.log(22)
  },
  // 收藏按钮
  collect() {
    wx.showToast({
      title: '收藏成功',
      success: 'success'
    })
  },
  // 下拉框
  report() {
    console.log('report')
    let a = this
    // setTimeout(function () {
    a.setData({
      showActionsheet: true
    })
    // }, 3000)
  },
  btnClick(e) {
    console.log(e)
    if (e.detail.index <= 1) {
      wx.showToast({
        title: '举报成功',
        success: 'success'
      })
    }else{
      
    }
  },
  close() {
    console.log('close')
    this.setData({
      showActionsheet: false
    })
  }
})