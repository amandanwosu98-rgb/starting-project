const Storage = {
  getProducts: function () {
    return JSON.parse(localStorage.getItem("products")) || [];
  },

  saveProducts: function (products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
};