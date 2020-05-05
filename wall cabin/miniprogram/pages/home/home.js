//home.js
const app = getApp()

Page({
  data: {
    serve: [{
      name: '收藏',
      img: "../../images/home/collect.png",
      type:0
    }, {
      name: '最近',
      img: "../../images/home/time.png",
      type:0
    }, {
      name: '关于',
      img: "../../images/home/heart.png",
      type:0
    },{
      name: '客服',
      img: "../../images/home/message.png",
      type:1
    }]
  },
  onGotUserInfo(){
    
  }

})