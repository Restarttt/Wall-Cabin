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
      img: "../../images/scenery/20200504164826.jpg"
    }, {
      img: "../../images/scenery/20200504164826.jpg"
    }, {
      img: "../../images/scenery/20200504164826.jpg"
    }]
  },
  delete() {
    console.log(this.list)
    this.list.splice(index, 1)
    this.setData({
      list: this.list.splice(index, 1)
    })
  }
})