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
  switch (event.action) {
    case 'getlist': {
      return getlist(event)
    }
    case 'getcollect': {
      return getcollect(event)
    }
    // default:{
    //   return
    // }
  }
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,

  }
}

async function getlist(event) {
  const list = await db.collection('collect').get()
  return {
    list: list.data
  }

}
async function getcollect(event) {
  const time = new Date()
  if (event.file_id) {
    await db.collection('collect').add({
      data: {
        file_id: event.file_id,
        name: event.userInfo.openId,
        time: time
      }
    })
  }
}