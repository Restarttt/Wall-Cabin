//search.js
const app = getApp()

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
    wx.cloud.callFunction({
      name: 'search',
      data: {
        action: 'detelekey',
        cancel: e.currentTarget.dataset.list
      },
      success: res => {
        console.log(res)
        this.data.word.splice(e.target.dataset.index)
        this.setData({
          word: this.data.word
        })
      },
      fail: err => {
        console.log(err)
      }
    })

  },
  // 去壁纸页面
  go(e) {
    console.log(e)
    const key = e.currentTarget.dataset.key
    wx.navigateTo({
      url: '/pages/wallpaper/wallpaper?key=' + key,
    })
  },
  go_detail() {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  // 请求图片
  keysearch(e) {
    console.log(e)
    wx.cloud.callFunction({
      name: 'search',
      data: {
        action: 'getkeypic',
        search_key: e.detail.value
      },
      success: res => {
        console.log(res)
        this.setData({
          pic_list: res.result.data
        })
        if (res.result.data.length != 0) {
          this.setData({
            key: false
          })
        }
      },
      fail: err => {
        console.log(err)
      }
    })
    wx.cloud.callFunction({
      name: 'search',
      data: {
        action: 'getkeyword',
        search_key: e.detail.value
      },
      success: res => {
        // console.log(res)
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
      data: {
        action: 'getkeylist'
      },
      success: res => {
        // console.log(res)
        this.setData({
          hot_list: res.result.list,
        })
      },
      fail: err => {
        console.log(err)
      }
    })
    wx.cloud.callFunction({
      name: 'search',
      data: {
        action: 'getsearch'
      },
      success: res => {
        console.log(res)
        this.setData({
          word: res.result.search.keyword
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  onShow: function () {
    wx.cloud.callFunction({
      name: 'search',
      data: {
        action: 'getsearch'
      },
      success: res => {
        // console.log(res)
        this.setData({
          word: res.result.search
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  }
})