// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  console.log(context)
  const wxContext = cloud.getWXContext()
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    list: [
      "../../images/larger/FinWhale_ZH-CN9010064973_1920x1080.jpg",
      "../../images/larger/FinWhale_ZH-CN9010064973_1920x1080.jpg",
      "../../images/larger/FinWhale_ZH-CN9010064973_1920x1080.jpg",
      "../../images/larger/FinWhale_ZH-CN9010064973_1920x1080.jpg"
    ],
    sec: [{
      img: '../../images/scenery/20200504164826.jpg'
    }, {
      img: '../../images/scenery/20200504164826.jpg'
    }, {
      img: '../../images/scenery/20200504164826.jpg'
    }, {
      img: '../../images/scenery/20200504164826.jpg'
    }, {
      img: '../../images/scenery/20200504164826.jpg'
    }, {
      img: '../../images/scenery/20200504164826.jpg'
    }]
  }
}