// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  const wxContext = cloud.getWXContext
  switch (event.action) {
    case 'getlist': {
      console.log(22222)
      return getlist(event)
    }
    case 'getcollect': {
      console.log(11111)
      return getcollect(event)
    }
    case 'getcancel': {
      console.log(00000)
      return getcancel(event)
    }
  }
}

async function getlist(event) {
  const list = await db.collection('collect').get()
  return ({
    list: list.data
  })
}
async function getcollect(event) {
  let upload = undefined
  let time = new Date()
  if (event.file_id) {
    upload = await db.collection('collect').add({
      data: {
        file_id: event.file_id,
        name: event.userInfo.openId,
        time: time
      }
    })
  }
  console.log(upload)
  return upload
}
async function getcancel(event) {
  const cancel = await db.collection('collect').where({
    file_id: event.cancel
  }).remove()
  return cancel
}