const addProductToCart = async (id, price) => {
  let Product = JSON.parse(localStorage.getItem("Product"));
  if (Product == null) {
    Product = [];
    Product.push({ id: id, quantity: 1, price: price });
    showQuantity(Product);
  } else {
    updateCartQuantity(Product, id, price);
    showQuantity(Product);
  }
  console.log(Product);

  localStorage.setItem("Product", JSON.stringify(Product));
};

const showQuantity = (Product) => {
  let quantity = 0;
  Product.map((product) => {
    quantity = quantity + product.quantity;
  });
  document.querySelector(".show-quantity").innerHTML = quantity;
  document.querySelector(".show-quantity").style.display = "inline-flex";
};

const updateCartQuantity = (Product, id, price) => {
  const findProduct = Product.find((product) => product.id === id);
  findProduct !== undefined
    ? findProduct.quantity++
    : Product.push({ id: id, quantity: 1, price: price });
};

const handleAction = (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const productId = event.target.id;
    const productPrice =
      event.target.previousElementSibling.previousElementSibling.innerHTML;
    addProductToCart(productId, productPrice);
  }
};

document
  .querySelector(".products-container")
  .addEventListener("click", handleAction);
