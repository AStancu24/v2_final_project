import { createProductCard } from "./cards.js";

const createInnerHTMLforCategoryFilter = (
  category1,
  category2,
  category3,
  category4,
  category5
) => {
  const innerHTMLFilterCheckBoxes = `
        <p>Cat. filter</p>
        <div>
             <label>${category1} </label>
             <input name="${category1}" type="checkbox" >
        </div>
        <div>
            <label>${category2} </label>
            <input name="${category2}" type="checkbox" >
       </div>
        <div>
             <label>${category3} </label>
             <input name="${category3}" type="checkbox" >
       </div>
        <div>
             <label>${category4} </label>
             <input name="${category4}" type="checkbox" >
       </div>
       <div>
              <label>${category5} </label>
              <input name="${category5}" type="checkbox" >
        </div>
       `;

  document.getElementById("category-filter").innerHTML =
    innerHTMLFilterCheckBoxes;
};

createInnerHTMLforCategoryFilter(
  "Samsung",
  "Apple",
  "Xiaomi",
  "OnePlus",
  "Motorola"
);

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
