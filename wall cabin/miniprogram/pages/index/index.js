  //index.js
  const app = getApp()

  Page({
    data: {
      autoplay: true,
      indicatorDots: true,
      indicatorActiveColor: "#FFF",
      indicatorColor: "rbga(251,255,242)",
      circular: true,
      interval: "3000",
      duration: "1000",
      mode: 'aspectFill',
      list: [],
      icon_list: [{
          img: "../../images/icon/specially.png",
          text: "专栏",
          url: '../special/special'
        },
        //  {
        //   img: "../../images/icon/sort.png",
        //   text: "排行",
        //   url: '../special/special'
        // }, 
        {
          img: "../../images/icon/face.png",
          text: "表情",
          url: '../special/special'
        },
        // {
        //   img: "../../images/icon/hot1.png",
        //   text: "热门",
        //   url: '../special/special'
        // },
        //  {
        //   img: "../../images/icon/random.png",
        //   text: "随机",
        //   url: '../special/special'
        // }, 
        // {
        //   img: "../../images/icon/4K.png",
        //   text: "4K",
        //   url: '../special/special'
        // }, 
        {
          img: "../../images/icon/pc.png",
          text: "头像",
          url: '../head/head'
        }, {
          img: "../../images/icon/more.png",
          text: "背景",
          url: '../wechat/wechat'
        }
      ],
      scenery: []
    },
    // 滚动图的大图
    big(e) {
      console.log(e)
      const that = this
      const fileid = e.target.dataset.img
      const index = e.target.dataset.index
      wx.previewImage({
        current: fileid, // 当前显示图片的http链接
        urls: [that.data.list[index].ID] // 需要预览的图片http链接列表
      })
    },
    // 去搜索页面
    back(e) {
      console.log(e)
      const key = e.currentTarget.dataset.key
      wx.navigateTo({
        url: '/pages/wallpaper/wallpaper?key=' + key,
      })
    },
    // 带参数跳转+上传访问信息
    go(e) {
      console.log('file_id=', e.target.dataset.item)
      const id = e.target.dataset.item
      // console.log('id=', id)
      wx.navigateTo({
        url: '/pages/detail/detail?fileid=' + id
      })
      wx.cloud.callFunction({
        name: 'lately',
        data: {
          file_id: e.target.dataset.item,
          action: 'getvisit'
        },
        success: res => {
          console.log(res)
        },
        fail: err => {
          console.log(err)
        }
      })
    },
    // 加载列表信息
    onLoad: function (options) {
      wx.startPullDownRefresh()
      wx.cloud.callFunction({
        name: 'home',
        data: {},
        success: res => {
          console.log(res)
          // console.log(res.result.list)
          this.setData({
            list: res.result.list,
          })
        },
        fail: err => {
          console.log(err)
        }
      })
      wx.cloud.callFunction({
        name: 'scenery',
        data: {},
        success: res => {
          // console.log(res)
          this.setData({
            scenery: res.result.scenery
          })
          setTimeout(function () {
            wx.hideLoading()
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
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
  })