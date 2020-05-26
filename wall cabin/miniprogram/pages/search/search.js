//search.js
// const app = getApp()

Page({
  data: {
    focus: true,
    late: '最近搜索',
    hot: '热门搜索',
    word: [],
    hot_list: [],
    pic_list: [],
    hot_key: true,
    key: true,
    inputValue: ''
  },
  // 删除关键字
  detele(e) {
    console.log(e)
    this.data.word.splice(e.target.dataset.index, 1)
    this.setData({
      word: this.data.word
    })
  },
  // 去壁纸页面
  go() {
    wx.navigateTo({
      url: '/pages/wallpaper/wallpaper',
    })
  },
  // 请求图片
  keysearch(e) {
    console.log(e)
    wx.cloud.callFunction({
      name: 'search',
      data: {
        search_key: e.detail.value
      },
      success: res => {
        console.log(res)
        this.setData({
          pic_list: res.result.pic_list
        })
        if (res.result.pic_list.length != 0) {
          this.setData({
            key: false
          })
        }
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  // 请求关键字
  onLoad: function () {
    wx.cloud.callFunction({
      name: 'search',
      data: {},
      success: res => {
        console.log(res)
        this.setData({
          hot_list: res.result.list,
          word: res.result.word
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  // 
  onShow: function () {
      wx.cloud.callFunction({
        name: 'search',
        data: {},
        success: res => {
          console.log(res.result.event.search_key)
          this.setData({
            word: res.result.word
          })
        },
        fail: err => {
          console.log(err)
        }
      })
  }
})