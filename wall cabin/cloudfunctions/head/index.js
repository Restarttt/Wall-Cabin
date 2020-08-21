// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const list = await db.collection('head').get()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    list: list.data,
    head: [{
      back: "../../images/scenery/back1.png",
      dot: '../../images/scenery/dot.png',
      name: "Jenlisa",
      list: list.data,
    }, {
      back: "../../images/scenery/back1.png",
      dot: '../../images/scenery/dot.png',
      name: "动漫",
      // list: scenery.data
    }, {
      back: "../../images/scenery/back1.png",
      dot: '../../images/scenery/dot.png',
      name: "简单",
      // list: scenery.data
    }, {
      back: "../../images/scenery/back1.png",
      dot: '../../images/scenery/dot.png',
      name: "情侣",
      // list: scenery.data
    }, {
      back: "../../images/scenery/back1.png",
      dot: '../../images/scenery/dot.png',
      name: "明星",
      // list: scenery.data
    }, {
      back: "../../images/scenery/back1.png",
      dot: '../../images/scenery/dot.png',
      name: "易烊千玺",
      // list: scenery.data
    }, ]
  }
}