// pages/detail/detail.js
Page({
  data: {
    imgurls:[
      'http://img5.imgtn.bdimg.com/it/u=3512607595,3037015550&fm=26&gp=0.jpg'
    ]
  },
  go() {
    console.log(222)
    wx.switchTab({
      url: '../../pages/index/index',
    })
  },
  download() {
    console.log(33)
    wx.saveImageToPhotosAlbum({
      success(res) {}
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: "",
      path: '../../images/scenery/26569f5076666e483c9abd46e556ea6.jpg',
      success: function (res) {
        console.log('成功', res)
      }
    }
  },
  big() {
    console.log(11),
      wx.previewImage({
        current: 'http://../../images/scenery/26569f5076666e483c9abd46e556ea6.jpg', // 当前显示图片的http链接
        urls: [
          'http://../../images/scenery/26569f5076666e483c9abd46e556ea6.jpg'
        ], // 需要预览的图片http链接列表
        success: function (res) {},
        fail: function (res) {
          console.log(res)
        },
        complete: function (res) {
          console.log(res)
        },
      })
  },
  collect(){
    wx.showToast({
      title: '收藏成功',
      success:'success'
    })
  }
})