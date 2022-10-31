export const createProductCard = (product) =>
  `<div class='card' style="width: 15rem;">
      <img class="card-img-top" src="${product.imgURL}" alt="Card image cap">
      <div class="card-body">
         <h5 class="card-title">${product.name}</h5>
         <p class="card-text">${product.price}</p>
         <a href="src/pages/details.html?product_id=${product.id}" class="button-details">Details</a>
         <button id=${product.id} class="button-add add-to-cart">Add to cart</button>
      </div>
   </div>`;
