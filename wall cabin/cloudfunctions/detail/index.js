// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    tag: [{
        name: '摄影',
        type: 1
      },
      {
        name: '风景',
        type: 2
      },
      {
        name: '颜色 ',
        type: 3
      },
    ],
    name: 'Lalisa',
    img: 'http://img5.imgtn.bdimg.com/it/u=3512607595,3037015550&fm=26&gp=0.jpg'
  }
}