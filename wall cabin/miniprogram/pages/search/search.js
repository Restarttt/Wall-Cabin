//search.js
// const app = getApp()

Page({
  data: {
    focus: true,
    late: '最近搜索',
    hot: '热门搜索',
    word: [],
    hot_list: [],
  },
  // 删除关键字
  detele(e) {
    console.log(e)
    this.data.word.splice(e.target.dataset.index, 1)
    this.setData({
      word: this.data.word
    })
  },
  // 请求关键字
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'search',
      data: {},
      success: res => {
        console.log(res.result)
        this.setData({
          hot_list: res.result.list,
          word: res.result.word
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  }
})