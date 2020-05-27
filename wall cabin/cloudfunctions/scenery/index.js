// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const animal = await db.collection('picture').where({
    type: 'animal'
  }).get()
  const scenery = await db.collection('picture').where({
    type: 'scenery'
  }).get()
  const architecture = await db.collection('picture').where({
    type: 'architecture'
  }).get()
  const creative = await db.collection('picture').where({
    type: 'creative'
  }).get()
  const cartoon = await db.collection('picture').where({
    type: 'cartoon'
  }).get()
  const painting = await db.collection('picture').where({
    type: 'painting'
  }).get()
  const brand = await db.collection('picture').where({
    type: 'brand'
  }).get()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    scenery: [{
        back: "../../images/scenery/back1.png",
        dot: '../../images/scenery/dot.png',
        name: "风景",
        list: scenery.data
      },
      {
        back: "../../images/scenery/back1.png",
        dot: '../../images/scenery/dot.png',
        name: "创意",
        list: creative.data
      }, 
      {
        back: "../../images/scenery/back1.png",
        dot: '../../images/scenery/dot.png',
        name: "建筑",
        list: architecture.data
      },
      {
        back: "../../images/scenery/back1.png",
        dot: '../../images/scenery/dot.png',
        name: "动物",
        list: animal.data
      },
      {
        back: "../../images/scenery/back1.png",
        dot: '../../images/scenery/dot.png',
        name: "动漫",
        list: cartoon.data
      },
      {
        back: "../../images/scenery/back1.png",
        dot: '../../images/scenery/dot.png',
        name: "油画",
        list: painting.data
      },
      {
        back: "../../images/scenery/back1.png",
        dot: '../../images/scenery/dot.png',
        name: "品牌",
        list: brand.data
      }
    ]
  }
}