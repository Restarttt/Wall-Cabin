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
      "../../images/larger/FreshSalt_ZH-CN12818759319_1920x1080.jpg",
      "../../images/larger/HallwylfjelletSunset_ZH-CN9300910376_1920x1080.jpg",
      "../../images/larger/ThamesEstuaryNASA_EN-AU14188404911_1920x1080.jpg",
      "../../images/larger/midmoon_ZH-CN4973736313_1920x1080.jpg",
      "../../images/larger/DeltaJunction_ZH-CN9901755694_1920x1080.jpg",
      "../../images/larger/SmogenSweden_ZH-CN0457682922_1920x1080.jpg",
      "../../images/larger/EiffelBelow_ZH-CN5149009072_1920x1080.jpg",
    ],
    icon_list: [{
        img: "../../images/hot1.png",
        text: "专栏"
      },
      {
        img: "../../images/hot1.png",
        text: "排行"
      },
      {
        img: "../../images/hot1.png",
        text: "最近"
      },
      {
        img: "../../images/hot1.png",
        text: "热门"
      },
      {
        img: "../../images/hot1.png",
        text: "随机"
      },
      {
        img: "../../images/hot1.png",
        text: "4K"
      }, {
        img: "../../images/hot1.png",
        text: "PC"
      },
      {
        img: "../../images/hot1.png",
        text: "更多"
      },

    ]
  },
  scenery_data: {
    back: "../../images/scenery/back1.png",
    dot: '../../images/scenery/dot.png',
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
      }, {
        img: '../../images/scenery/20200504164826.jpg'
      },
      {
        img: '../../images/scenery/20200504164826.jpg'
      }

    ]
  }

})