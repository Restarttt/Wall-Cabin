//home.js
const app = getApp()
Page({
  data: {
    toggle: true,
    show: false,
    userName: '',
    userImg: "../../images/girl.png",
    serve: [{
      name: '收藏',
      img: "../../images/home/collect.png",
      type: 0,
      url: '../../pages/collect/collect'
    }, {
      name: '最近',
      img: "../../images/home/time.png",
      type: 0,
      url: '../../pages/lately/lately'
    }, {
      name: '关于',
      img: "../../images/home/heart.png",
      type: 0,
      url: '../../pages/about/about'
    }, {
      name: '客服',
      img: "../../images/home/message.png",
      type: 1
    }],
    sign: [{
        num: '5+',
        name: "一天",
      }, {
        num: '10+',
        name: "二天",
      },
      {
        num: '15+',
        name: "三天",
      },
      {
        num: '20+',
        name: "四天",
      },
      {
        num: '25+',
        name: "五天",
      },
      {
        num: '30+',
        name: "六天",
      },
      {
        num: '100+',
        name: "七天",
      },
    ]
  },
  // 获取用户信息
  onGotUserInfo() {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              let userName = res.userInfo.nickName
              let userImg = res.userInfo.avatarUrl
              this.setData({
                userName: userName,
                userImg: userImg,
                toggle: false,
                show: true
              })
              console.log(res.userInfo.nickName)
              console.log(res.userInfo)
            }
          })
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 2222,
            mask: true
          })
        }
      }
    })
  },
  onLoad:function(){
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              let userName = res.userInfo.nickName
              let userImg = res.userInfo.avatarUrl
              this.setData({
                userName: userName,
                userImg: userImg,
                toggle: false,
                show: true
              })
              console.log(res.userInfo.nickName)
              console.log(res.userInfo)
            }
          })
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 2222,
            mask: true
          })
        }
      }
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
  // * 用户点击右上角分享
  // */
 onShareAppMessage: function () {}
})
