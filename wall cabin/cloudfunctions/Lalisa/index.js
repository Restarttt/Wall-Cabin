// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  // const animal = await db.collection('picture').where({
  //   type: 'animal'
  // }).get()
  const every = await db.collection('picture').where({
    type: 'everyday'
  }).get()
  const jenlisa = await db.collection('picture').where({
    type: 'Jenlisa'
  }).get()
  const photography = await db.collection('picture').where({
    type: 'photography'
  }).get()
  const stage = await db.collection('picture').where({
    type: 'stage'
  }).get()

  const grayscale = await db.collection('picture').where({
    type: 'grayscale'
  }).get()

  const shadow = await db.collection('picture').where({
    type: 'shadow'
  }).get()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    list: [{
      name: '日常',
      mode: 'aspectFill',
      list: every.data
    }, {
      name: '灰度',
      mode: 'aspectFill',
      list: grayscale.data
    }, {
      name: '背影',
      mode: 'aspectFill',
      list: shadow.data
    }, {
      name: '舞台',
      mode: 'aspectFill',
      list: stage.data
    }, {
      name: '影集',
      mode: 'aspectFill',
      list: photography.data
    }, {
      name: 'JENLISA',
      mode: 'aspectFill',
      list: jenlisa.data
    }, ]
  }
}