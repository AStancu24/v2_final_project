const addProductToCart = async (id) => {
  let Product = JSON.parse(localStorage.getItem("Product"));
  if (Product == null) {
    Product = [];
    Product.push({ id: id, quantity: 1 });
    showQuantity(Product);
  } else {
    updateCartQuantity(Product, id);
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

const updateCartQuantity = (Product, id) => {
  const findProduct = Product.find((product) => product.id === id);
  findProduct !== undefined
    ? findProduct.quantity++
    : Product.push({ id: id, quantity: 1 });
};

const handleAction = (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const productId = event.target.id;
    addProductToCart(productId);
  }
};

document
  .querySelector(".products-container")
  .addEventListener("click", handleAction);
