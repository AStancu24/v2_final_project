const loadProduct = () => {
  const productIds = JSON.parse(localStorage.getItem("Product"));

  console.log(productIds);

  const increaseAmount = (event) => {
    const productId = event.target.id;
    let quantity = 0;
    let total = 0;
    const finalProducts = productIds.map((product) => {
      if (product.id === productId && product.quantity >= 0) {
        product.quantity = product.quantity + 1;
        document.querySelector("#quantity" + productId).innerHTML =
          product.quantity;
      }
      total = total + product.quantity * product.price;
      quantity = quantity + product.quantity;
      return product;
    });
    document.querySelector("#total").innerHTML = total;
    document.querySelector(".show-quantity").innerHTML = quantity;

    localStorage.setItem("Product", JSON.stringify(finalProducts));
  };

  const decreaseAmount = (event) => {
    const productId = event.target.id;
    let quantity = 0;
    let total = 0;
    const finalProducts = productIds.map((product) => {
      if (product.id === productId && product.quantity >= 1) {
        product.quantity = product.quantity - 1;
        document.querySelector("#quantity" + productId).innerHTML =
          product.quantity;
      }
      total = total + product.quantity * product.price;
      quantity = quantity + product.quantity;
      return product;
    });
    document.querySelector("#total").innerHTML = total;
    document.querySelector(".show-quantity").innerHTML = quantity;

    localStorage.setItem("Product", JSON.stringify(finalProducts));
  };

  const createCardFromProduct = (product, quantity) => {
    return `<div class='card' style="width: 18rem;">
             <img class="card-img-top" src="${product.imgURL}" alt="Card image cap">
             <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.price}</p>
                <div>
                   <span id="${product.id}" class="decrease">-</span>
                   <label id="quantity${product.id}">${quantity}</label>
                   <span id="${product.id}" class="increase">+</span>
                </div>
              </div>
          </div>`;
  };

  let total = 0;
  let quantity = 0;
  if (productIds) {
    productIds.map((product) => {
      total = total + product.quantity * product.price;
      quantity = quantity + product.quantity;
    });
  }

  document.querySelector(".show-quantity").innerHTML = quantity;

  console.log(total);

  document.querySelector("#total").innerHTML = total;

  productIds?.forEach(async (ProductId) => {
    const result = await fetch(
      `https://633c56daf11701a65f748478.mockapi.io/Product/${ProductId.id}`
    );

    const Product = await result.json();

    const innerHTMLProduct = createCardFromProduct(Product, ProductId.quantity);

    document.querySelector(".cart-container").innerHTML += innerHTMLProduct;

    if (result.ok) {
      document.querySelectorAll(".increase").forEach((item) => {
        item.addEventListener("click", increaseAmount);
      });

      document.querySelectorAll(".decrease").forEach((item) => {
        item.addEventListener("click", decreaseAmount);
      });
    }
  });

  const clearTrash = () => {
    localStorage.clear();
    loadProduct();
    document.querySelector(".cart-container").innerHTML = "";
  };

  document.getElementById("trash").addEventListener("click", clearTrash);
};

window.addEventListener("DOMContentLoaded", loadProduct);
