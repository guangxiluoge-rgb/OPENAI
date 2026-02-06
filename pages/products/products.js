Page({
  data: {
    products: [
      {
        id: 101,
        name: "智能养生壶",
        price: 299,
        commission: 36,
        stock: 120
      },
      {
        id: 102,
        name: "轻奢护肤套装",
        price: 468,
        commission: 58,
        stock: 80
      },
      {
        id: 103,
        name: "便携筋膜枪",
        price: 519,
        commission: 72,
        stock: 56
      }
    ]
  },
  handleOpenDetail(event) {
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/product-detail/product-detail?id=${id}`
    });
  }
});
