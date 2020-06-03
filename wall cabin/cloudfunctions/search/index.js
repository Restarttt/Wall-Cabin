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
    case 'getkeypic': {
      return getkeypic(event)
    }
    case 'getkeyword': {
      return getkeyword(event)
    }
    case 'getsearch': {
      return getsearch(event)
    }
    case 'detelekey':{
      return detelekey(event)
    }
  }
}
async function getkeylist(event) {
  return {
    list: [
      '二次元',
      '文字',
      'Lalisa',
      '夏天',
      '简约',
      '人物明星',
      '性感'
    ],
  }
}
async function getkeypic(event) {
  const pic_list = await db.collection('picture').where({
    describe: event.search_key
  }).get()
  return pic_list
}
async function getkeyword(event) {
  let time = new Date()
  let keyword = await db.collection('keyword').add({
    data: {
      keyword: event.search_key,
      name: event.userInfo.openId,
      upload: time
    }
  })
  return keyword
}
async function getsearch(event) {
  const search = await db.collection('keyword').where({
    name: event.userInfo.openId,
  }).get()
  return({
    search:search.data
  })
}
 async function detelekey(event){
   const detele = await db.collection('keyword').where({
     name: event.userInfo.openId,
   }).remove()
   return detele
 }