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
         ${productInfo.description}
      </div>
   `;

  document.querySelector(".product-details").innerHTML = productCardDetails;
};

window.addEventListener("DOMContentLoaded", showProductDetails);
