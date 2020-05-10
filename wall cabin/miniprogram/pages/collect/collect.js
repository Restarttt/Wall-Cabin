// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定'
    }],
    oneButton: [{
      text: '确定'
    }],
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
  delete(e) {
    this.data.list.splice(e.target.dataset.index, 1)
    console.log(e)
    console.log(e.target.dataset.index)
    this.setData({
      list: this.data.list,
      dialogShow: true
    })
    wx.showToast({
      title: '取消收藏',
      icon: 'success',
      duration: 2000
    })
  },
  openConfirm: function () {
    this.setData({
      dialogShow: true
    })
  },
  tapDialogButton(e) {
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },
  tapOneDialogButton(e) {
    this.setData({
      showOneButtonDialog: true
    })
  }
})