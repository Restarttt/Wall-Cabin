// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  const wxContext = cloud.getWXContext()
  if (event.file_id) {
    const file = await db.collection('visit').where({
      file_id: event.file_id
    }).get()
    if (file == null) {
      const time = new Date()
      await db.collection('visit').add({
        data: {
          file_id: event.file_id,
          name: event.userInfo.openId,
          time: time
        }
      })
    }
  }
  const list = await db.collection('visit').get()
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    list: list.data,
    test: file
  }
}