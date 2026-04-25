const UI = {
  displayProducts: function () {
    const products = Storage.getProducts();
    const list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach(product => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${product.name} - ₦${product.price} - Qty: ${product.qty}
        <button onclick="UI.deleteProduct(${product.id})">Delete</button>
      `;
      list.appendChild(li);
    });
  },

  addProductToUI: function (product) {
    const list = document.getElementById("productList");

    const li = document.createElement("li");
    li.innerHTML = `
      ${product.name} - ₦${product.price} - Qty: ${product.qty}
      <button onclick="UI.deleteProduct(${product.id})">Delete</button>
    `;

    list.appendChild(li);
  },

  deleteProduct: function (id) {
    let products = Storage.getProducts();
    products = products.filter(p => p.id !== id);
    Storage.saveProducts(products);
    UI.displayProducts();
  }
};