const loadProduct = () => {
  const productIds = JSON.parse(localStorage.getItem("Product"));

  console.log(productIds);

  const createCardFromProduct = (product) => {
    return `<div class='card' style="width: 18rem;">
             <img class="card-img-top" src="${product.imgURL}" alt="Card image cap">
             <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.price}</p>
                <div>
                   <span id="${product.id}" class="decrease">-</span>
                   <span id="${product.id}" class="increase">+</span>
                </div>
              </div>
          </div>`;
  };

  // const increaseAmount = () => {
  //   document.querySelector(".decrease");
  //   console.log("decrease");
  // };

  // document
  //   .getElementById("category-filter")
  //   .addEventListener("click", increaseAmount);

  productIds.forEach(async (ProductId) => {
    const result = await fetch(
      `https://633c56daf11701a65f748478.mockapi.io/Product/${ProductId.id}`
    );

    const Product = await result.json();

    console.log(Product);

    const innerHTMLProduct = createCardFromProduct(Product);

    document.querySelector(".cart-container").innerHTML += innerHTMLProduct;
  });
};

window.addEventListener("DOMContentLoaded", loadProduct);
