export const createProductCard = (product) =>
  `<div class='card' style="width: 18rem;">
      <img class="card-img-top" src="${product.imgURL}" alt="Card image cap">
      <div class="card-body">
         <h5 class="card-title">${product.name}</h5>
         <p class="card-text">${product.price}</p>
         <a href="details.html?product_id=${product.id}" class="btn btn-primary">Details</a>
         <button id=${product.id} class="btn btn-danger add-to-cart">Add to cart</button>
      </div>
   </div>`;
