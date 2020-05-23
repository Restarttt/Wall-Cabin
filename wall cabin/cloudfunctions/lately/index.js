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
    case 'getvisit': {
      return getvisit(event)
    }
    case "getlist": {
      return getlist(event)
    }
    case "clear":{
      return clear(event)
    }
  }
}

async function getvisit(event) {
  if (event.file_id) {
    const time = new Date()
    var visit = null
    var file = await db.collection('visit').where({
      file_id: event.file_id,
      name: event.userInfo.openId
    }).get()
    console.log(file)
    if (file.data.length === 0) {
      visit = await db.collection('visit').add({
        data: {
          file_id: event.file_id,
          name: event.userInfo.openId,
          time: time
        }
      })
    }
  }
  return visit
}
async function getlist(event) {
  const list = await db.collection('visit').where({
    name: event.userInfo.openId
  }).get()
  return ({
    list: list.data
  })
}
async function clear(event) {
  const clear = await db.collection('visit').where({
    name: event.userInfo.openId
  }).remove()
  return clear
}