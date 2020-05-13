  //index.js
  const app = getApp()

  Page({
    data: {
      autoplay: true,
      indicatorDots: true,
      indicatorActiveColor: "#FFF",
      indicatorColor: "rbga(251,255,242)",
      circular: true,
      interval: "3000",
      duration: "1000",
      mode: 'aspectFill',
      list: [
        "../../images/larger/FinWhale_ZH-CN9010064973_1920x1080.jpg",
        "../../images/larger/FinWhale_ZH-CN9010064973_1920x1080.jpg",
        "../../images/larger/FinWhale_ZH-CN9010064973_1920x1080.jpg",
        "../../images/larger/FinWhale_ZH-CN9010064973_1920x1080.jpg",
      ],
      icon_list: [{
        img: "../../images/icon/specially.png",
        text: "专栏",
        url: '../special/special'
      }, {
        img: "../../images/icon/sort.png",
        text: "排行",
        url: '../special/special'
      }, {
        img: "../../images/icon/face.png",
        text: "表情",
        url: '../special/special'
      }, {
        img: "../../images/icon/hot1.png",
        text: "热门",
        url: '../special/special'
      }, {
        img: "../../images/icon/random.png",
        text: "随机",
        url: '../special/special'
      }, {
        img: "../../images/icon/4K.png",
        text: "4K",
        url: '../special/special'
      }, {
        img: "../../images/icon/pc.png",
        text: "PC",
        url: '../special/special'
      }, {
        img: "../../images/icon/more.png",
        text: "更多",
        url: '../special/special'
      }],
      scenery: [{
          back: "../../images/scenery/back1.png",
          dot: '../../images/scenery/dot.png',
          name: "风景",
          list: [{
            img: '../../images/scenery/20200504164826.jpg'
          }, {
            img: '../../images/scenery/20200504164826.jpg'
          }, {
            img: '../../images/scenery/20200504164826.jpg'
          }, {
            img: '../../images/scenery/20200504164826.jpg'
          }, {
            img: '../../images/scenery/20200504164826.jpg'
          }, {
            img: '../../images/scenery/20200504164826.jpg'
          }]
        },
        {
          back: "../../images/scenery/back1.png",
          dot: '../../images/scenery/dot.png',
          name: "创意",
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
    },
    back() {
      console.log(111)
      wx.switchTab({
        url: '/pages/search/search',
      })
    },
    go() {
      wx.navigateTo({
        url: '../../pages/detail/detail',
      })
    }
  })