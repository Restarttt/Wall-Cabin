// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const test = await db.collection('grade').where({
    name: 'Lalisa'
  }).get()
  console.log(test)

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    list: [
      '风景',
      '文字',
      'Lalisa',
      '夏天',
      '创意',
      '动漫',
      '性感'
    ],
    word:[
      '文字'
    ],
    test: test.data
  }
}