let Product = JSON.parse(localStorage.getItem("Product"));

if (Product !== null) {
  const showQuantity = (Product) => {
    let quantity = 0;
    Product.map((product) => {
      quantity = quantity + product.quantity;
    });
    return quantity;
  };
  document.querySelector(".show-quantity").innerHTML = showQuantity(Product);
} else {
  document.querySelector(".show-quantity").style.display = "none";
}
