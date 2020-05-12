// pages/.js
Page({
  data: {
    showActionsheet: false,
    groups: [{
        text: '图片缺失、错误',
        value: 1
      },
      {
        text: '不雅内容',
        value: 2
      },
      {
        text: '版权问题',
        type: 'warn',
        value: 3
      }
    ]
  },
  close: function () {
    this.setData({
      showActionsheet: false
    })
  },
  btnClick(e) {
    console.log(e)
    this.close()
  },
  report(){}
})