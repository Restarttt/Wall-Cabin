// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      img: "../../images/scenery/20200504164826.jpg"
    }, {
      img: "../../images/scenery/20200504164826.jpg"
    }, {
      img: "../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg"
    }, {
      img: "../../images/scenery/20200504164826.jpg"
    }, {
      img: "../../images/Lisa/lalalalis__m__91260511_523347191932890_1519412240126646988_n.jpg"
    }]
  },
  delete(index) {
    console.log(index)
    this.data.list.splice(index, 1)
    this.setData({
      list: this.data.list
    })
  }
})