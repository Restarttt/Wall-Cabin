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
      this.data.list.splice(e.target.dataset.index, 1)
      console.log(e)
      console.log(e.target.dataset.index)
      this.setData({
        dialogShow: false,
        list: this.data.list,
      })
      wx.showToast({
        title: '取消成功',
        icon: 'success',
        duration: 2000
      })
    } else {
      this.setData({
        dialogShow: false,
      })
    }
  },
  delete(e) {
    this.setData({
      dialogShow: true
    })
  }
})