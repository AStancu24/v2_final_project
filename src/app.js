import { createProductCard } from "./js/cards.js";
import { getAllProducts } from "./js/products.js";

window.addEventListener("DOMContentLoaded", async () => {
  const products = await getAllProducts();
  const productsCards = products.map((product) => createProductCard(product));

  document.querySelector(".products-container").innerHTML =
    productsCards.join("");
});
