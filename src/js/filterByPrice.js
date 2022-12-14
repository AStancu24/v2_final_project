import { createProductCard } from "./cards.js";

const createFilterItemsArray = (minPrice, maxPrice) => {
  const filterInterval = (maxPrice - minPrice) / 5;

  const filterItems = [
    { start: minPrice, end: minPrice + filterInterval - 1 },
    {
      start: minPrice + filterInterval,
      end: minPrice + 2 * filterInterval - 1,
    },
    {
      start: minPrice + 2 * filterInterval,
      end: minPrice + 3 * filterInterval - 1,
    },
    {
      start: minPrice + 3 * filterInterval,
      end: minPrice + 4 * filterInterval - 1,
    },
    {
      start: minPrice + 4 * filterInterval,
      end: maxPrice,
    },
  ];

  return filterItems;
};

const createInnerHTMLforPriceFilter = (minPrice, maxPrice) => {
  const filterItemsIntervals = createFilterItemsArray(minPrice, maxPrice);

  const innerHTMLFilterCheckBoxes = filterItemsIntervals
    .map(
      (interval) =>
        `
        <div>
           <input type="checkbox" >
           <label>${interval.start} - ${interval.end}</label>
           
        </div>
     `
    )

    .join("");

  document.getElementById("price-filter").innerHTML = innerHTMLFilterCheckBoxes;
};

createInnerHTMLforPriceFilter(0, 250);

const filterByPrice = (event) => {
  if (event.target.type == "checkbox") {
    const checkboxes = document
      .getElementById("price-filter")
      .querySelectorAll("[type=checkbox]");

    checkboxes.forEach((checkbox) => {
      if (checkbox != event.target) {
        checkbox.checked = false;
      }
    });
  }

  if (event.target.checked == true) {
    const startPrice =
      event.target.nextElementSibling.textContent.split(" - ")[0];
    const endPrice =
      event.target.nextElementSibling.textContent.split(" - ")[1];

    fetch("https://633c56daf11701a65f748478.mockapi.io/Product")
      .then((result) => result.json())
      .then((products) => {
        const filteredByPriceProducts = products.filter(
          (product) =>
            product.price >= Number(startPrice) &&
            product.price <= Number(endPrice)
        );

        const productCards = filteredByPriceProducts.map((product) =>
          createProductCard(product)
        );
        const innerHTMLProducts = productCards.join("");
        document.querySelector(".products-container").innerHTML =
          innerHTMLProducts;
      });
  } else {
    fetch("https://633c56daf11701a65f748478.mockapi.io/Product")
      .then((result) => result.json())
      .then((products) => {
        const productCards = products.map((product) =>
          createProductCard(product)
        );
        const innerHTMLProducts = productCards.join("");
        document.querySelector(".products-container").innerHTML =
          innerHTMLProducts;
      });
  }
};

document
  .getElementById("price-filter")
  .addEventListener("click", filterByPrice);
