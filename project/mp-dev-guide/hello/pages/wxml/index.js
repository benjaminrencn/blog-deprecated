// pages/wxml/index.js
Page({
  data: {
    time: (new Date()).toString(),
    
    w: 'w',
    W: 'W',

    // var1: '',
    var2: undefined,
    var3: null,
    var4: 'var4',

    a: 1,
    b: 2,
    
    name: 'World',

    condition: 3,

    list: [
      { message: 'foo' },
      { message: 'bar' },
    ],

    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: '1234'.split(''),

    msgItem: {
      index: 0,
      msg: 'this is a template',
      time: '2020-01-01',
    },
  },

  switch() {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; i++) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray,
    })
  },
  addToFront() {
    const length = this.data.objectArray.length
    this.data.objectArray.unshift({ id: length, unique: `unique_${length}` })
    this.setData({
      objectArray: this.data.objectArray,
    })
  },
  addNumberToFront() {
    this.data.numberArray.unshift(this.data.numberArray.length + 1)
    this.setData({
      numberArray: this.data.numberArray,
    })
  },
})
