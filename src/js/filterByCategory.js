import { createProductCard } from "./cards.js";

const createInnerHTMLforCategoryFilter = (category1, category2) => {
  const innerHTMLFilterCheckBoxes = `
          <div>
             <label>${category1} </label>
             <input name="${category1}" type="checkbox" >
          </div>
          <div>
            <label>${category2} </label>
            <input name="${category2}" type="checkbox" >
       </div>
       `;

  document.getElementById("category-filter").innerHTML =
    innerHTMLFilterCheckBoxes;
};

createInnerHTMLforCategoryFilter("Samsung", "Apple");

const filterByCategory = (event) => {
  const checkboxes = document
    .getElementById("category-filter")
    .querySelectorAll("[type=checkbox]");

  if (event.target.type == "checkbox") {
    checkboxes.forEach((checkbox) => {
      if (checkbox != event.target) {
        checkbox.checked = false;
      }
    });
  }

  if (event.target.checked == true) {
    fetch(
      "https://633c56daf11701a65f748478.mockapi.io/Product?category=" +
        event.target.name
    )
      .then((result) => result.json())
      .then((products) => {
        const productCards = products.map((product) =>
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
  .getElementById("category-filter")
  .addEventListener("click", filterByCategory);
