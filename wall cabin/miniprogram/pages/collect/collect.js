// pages/collect/collect.js
Page({
  data: {
    dialogShow: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定',
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
  tapDialogButton(e) {
    console.log(e)
    if (e.detail.index == 1) {
      wx.showToast({
        title: '取消成功',
        icon: 'success',
        duration: 2000
      })
      this.setData({
        dialogShow: false,
      })
    } else {
      this.setData({
        dialogShow: false,
      })

    }
  },
  delete(e) {
    this.data.list.splice(e.target.dataset.index, 1)
    console.log(e)
    console.log(e.target.dataset.index)
    this.setData({
      list: this.data.list,
      dialogShow: true
    })
  }
})