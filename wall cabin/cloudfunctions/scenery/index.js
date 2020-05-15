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
    scenery:[{
      back: "../../images/scenery/back1.png",
      dot: '../../images/scenery/dot.png',
      name: "风景",
      list: [{
        img: '../../images/scenery/20200504164826.jpg'
      },{
        img: '../../images/scenery/20200504164826.jpg'
      },{
        img: '../../images/scenery/20200504164826.jpg'
      },{
        img: '../../images/scenery/20200504164826.jpg'
      },{
        img: '../../images/scenery/20200504164826.jpg'
      },{
        img: '../../images/scenery/20200504164826.jpg'
      }]
    },
    {
      back: "../../images/scenery/back1.png",
      dot: '../../images/scenery/dot.png',
      name: "创意",
      list: [
        {
          img: '../../images/scenery/20200504164826.jpg'
        },{
          img: '../../images/scenery/20200504164826.jpg'
        },{
          img: '../../images/scenery/20200504164826.jpg'
        },{
          img: '../../images/scenery/20200504164826.jpg'
        },{
          img: '../../images/scenery/20200504164826.jpg'
        },{
          img: '../../images/scenery/20200504164826.jpg'
        }
      ]
    }, {
      back: "../../images/scenery/back1.png",
      dot: '../../images/scenery/dot.png',
      name: "建筑",
      list: [{
          img: '../../images/scenery/20200504164826.jpg'
        },
        {
          img: '../../images/scenery/20200504164826.jpg'
        },
        {
          img: '../../images/scenery/20200504164826.jpg'
        },
        {
          img: '../../images/scenery/20200504164826.jpg'
        },
        {
          img: '../../images/scenery/20200504164826.jpg'
        },
        {
          img: '../../images/scenery/20200504164826.jpg'
        },
      ]
    },
    {
      back: "../../images/scenery/back1.png",
      dot: '../../images/scenery/dot.png',
      name: "二次元",
      list: [{
          img: '../../images/scenery/20200504164826.jpg'
        },
        {
          img: '../../images/scenery/20200504164826.jpg'
        },
        {
          img: '../../images/scenery/20200504164826.jpg'
        },
        {
          img: '../../images/scenery/20200504164826.jpg'
        },
        {
          img: '../../images/scenery/20200504164826.jpg'
        },
        {
          img: '../../images/scenery/20200504164826.jpg'
        },
      ]
    },
    {
      back: "../../images/scenery/back1.png",
      dot: '../../images/scenery/dot.png',
      name: "动物",
      list: [{
          img: '../../images/scenery/20200504164826.jpg'
        },
        {
          img: '../../images/scenery/20200504164826.jpg'
        },
        {
          img: '../../images/scenery/20200504164826.jpg'
        },
        {
          img: '../../images/scenery/20200504164826.jpg'
        },
        {
          img: '../../images/scenery/20200504164826.jpg'
        }, {
          img: '../../images/scenery/20200504164826.jpg'
        },
      ]
    },
  ]
  }
}