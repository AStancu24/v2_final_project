const addProductToCart = async (id) => {
  let Product = JSON.parse(localStorage.getItem("Product"));
  if (Product == null) Product = [];
  Product.push(id);
  console.log(Product);

  localStorage.setItem("Product", JSON.stringify(Product));
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
