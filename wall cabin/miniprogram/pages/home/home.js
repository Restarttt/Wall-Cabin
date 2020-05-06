//home.js
const app = getApp()

Page({
  data: {
    userName: '',
    userImg: "",
    serve: [{
      name: '收藏',
      img: "../../images/home/collect.png",
      type: 0,

    }, {
      name: '最近',
      img: "../../images/home/time.png",
      type: 0
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
  },
  onGotUserInfo() {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              let userName = res.userInfo.nickName
              let userImg = res.userInfo.avatarUrl
              this.setData({
                userName: userName ,
                userImg: userImg,
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

})