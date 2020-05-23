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
      return getlist(event)
    }
    case 'getcollect': {
      return getcollect(event)
    }
    case 'getcancel': {
      return getcancel(event)
    }
    case 'getcollectmsg': {
      return getcollectmsg(event)
    }
  }
}

async function getlist(event) {
  const list = await db.collection('collect').where({
    name: event.userInfo.openId
  }).get()
  return ({
    list: list.data,
  })
}

async function getcollect(event) {
  let upload = null
  let repeat = null
  let time = new Date()
  if (event.file_id) {
    repeat = await db.collection('collect').where({
      file_id: event.file_id,
      name: event.userInfo.openId
    }).get()
    if (repeat.data.length === 0) {
      upload = await db.collection('collect').add({
        data: {
          file_id: event.file_id,
          name: event.userInfo.openId,
          time: time
        }
      })
    }
  }
  console.log(upload)
  return upload
}

async function getcancel(event) {
  const cancel = await db.collection('collect').where({
    file_id: event.cancel,
    name: event.userInfo.openId
  }).remove()
  return cancel
}

async function getcollectmsg(event) {
  let message = await db.collection('collect').where({
    file_id: event.file_id,
    name: event.userInfo.openId
  }).get()
  console.log(message)
  if (message.data.length === 0) {
    message = false
  } else {
    message = true
  }
  return message
}