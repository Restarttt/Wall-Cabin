// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  event.search_key = ''
  const wxContext = cloud.getWXContext()
  const pic_list = await db.collection('picture').where({ 
    describe: event.search_key
  }).get()
  
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
    word: event.search_key,
    pic_list: pic_list.data
  }
}