Page({
  data: {
    items: [
      {
        id: 101,
        name: "智能养生壶",
        price: 299,
        quantity: 1
      },
      {
        id: 103,
        name: "便携筋膜枪",
        price: 519,
        quantity: 2
      }
    ]
  },
  getTotal() {
    return this.data.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
  onShow() {
    this.setData({
      total: this.getTotal()
    });
  }
});
