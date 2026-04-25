document.getElementById("addBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const qty = document.getElementById("qty").value;

  if (!name || !price || !qty) {
    alert("Please fill all fields");
    return;
  }

  const product = new Product(name, price, qty);

  let products = Storage.getProducts();
  products.push(product);
  Storage.saveProducts(products);

  UI.addProductToUI(product);

  // clear inputs
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("qty").value = "";
});

// Load products on page load
document.addEventListener("DOMContentLoaded", UI.displayProducts);