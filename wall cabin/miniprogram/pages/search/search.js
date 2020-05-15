//search.js
// const app = getApp()

Page({
  data: {
    focus: true,
    late: '最近搜索',
    hot: '热门搜索',
    word: ['文字'],
    hot_list: [],
  },
  detele(e) {
    console.log(e)
    this.data.word.splice(e.target.dataset.index, 1)
    this.setData({
      word: this.data.word
    })
  },
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'search',
      data: {},
      success: res => {
        console.log(res)
        this.setData({
          hot_list: res.result.list,
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  }


})