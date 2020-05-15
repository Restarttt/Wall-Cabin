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
    list:[
      {
        name: '日常',
        mode: 'aspectFill',
        list: [{
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
        ]
      }, {
        name: '灰度',
        mode: 'aspectFill',
        list: [{
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
        ]
      }, {
        name: '背影',
        mode: 'aspectFill',
        list: [{
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
        ]
      }, {
        name: '舞台',
        mode: 'aspectFill',
        list: [{
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
        ]
      }, {
        name: '影集',
        mode: 'aspectFill',
        list: [{
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
        ]
      }, {
        name: 'JENLISA',
        mode: 'aspectFill',
        list: [{
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
          {
            img: '../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg',
          },
        ]
      },
    ]
  }
}