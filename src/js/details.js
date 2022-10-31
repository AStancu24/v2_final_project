const showProductDetails = async () => {
  const searchParamString = window.location.search;

  const searchParams = new URLSearchParams(searchParamString);

  const productId = searchParams.get("product_id");

  // const productURL = 'https://633c56daf11701a65f748478.mockapi.io/products/' + productId;
  const productURL = `https://633c56daf11701a65f748478.mockapi.io/Product/${productId}`;
  const result = await fetch(productURL);
  const productInfo = await result.json();

  const productCardDetails = `
      <div class="details">
        <h3> ${productInfo.name} </h3>
         <img class="card-img-top" src="${productInfo.imgURL}" alt="Card image cap">
         <h4>${productInfo.description}</h4>
      </div>
   `;

  document.querySelector(".product-details").innerHTML = productCardDetails;
};

window.addEventListener("DOMContentLoaded", showProductDetails);
