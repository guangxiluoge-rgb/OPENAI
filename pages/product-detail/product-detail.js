const productMap = {
  101: {
    id: 101,
    name: "智能养生壶",
    price: 299,
    commission: 36,
    description: "12 段温控，预约炖煮，多人分享装。"
  },
  102: {
    id: 102,
    name: "轻奢护肤套装",
    price: 468,
    commission: 58,
    description: "洁面 + 精华 + 面霜三件套，适合全场景护肤。"
  },
  103: {
    id: 103,
    name: "便携筋膜枪",
    price: 519,
    commission: 72,
    description: "5 档力度，3D 按摩头，运动恢复必备。"
  }
};

Page({
  data: {
    product: null,
    inviteCode: "",
    shareTips: ""
  },
  onLoad(query) {
    const product = productMap[query.id] || productMap[101];
    this.setData({
      product,
      inviteCode: `FX-${product.id}-A1`,
      shareTips: `分享商品可获得 ¥${product.commission} 佣金`
    });
  },
  handleCopyCode() {
    wx.setClipboardData({
      data: this.data.inviteCode
    });
  }
});
