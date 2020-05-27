// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  switch (event.action) {
    case 'getkeylist': {
      return getkeylist(event)
    }
    case 'getkeyword':{
      return getkeyword(event)
    } 
  }
}

async function getkeylist(event) {
  return {
    list: [
      '风景',
      '文字',
      'Lalisa',
      '夏天',
      '创意',
      '动漫',
      '性感'
    ],
  }
}
async function getkeyword(event) {
  const pic_list = await db.collection('picture').where({
    describe: event.search_key
  }).get()
  return pic_list
  }