function Product(name, price, qty) {
  this.id = Date.now();
  this.name = name;
  this.price = price;
  this.qty = qty;
}