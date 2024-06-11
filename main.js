import { buttonsData, menu } from "./js/db.js";
import { elements, calculatePrice } from "./js/helper.js";
// List products
const renderMenuItems = (menuItems) => {
  let menuHTML = menuItems
    .map(
      (item) =>
        `
    <a
        href="productDetail.html?id=${item.id}"
        class="text-decoration-none text-black d-flex flex-column flex-md-row gap-2"
        id="card"
      >
        <img src="${item.img}" alt="image" class="rounded shadow" />
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success">${calculatePrice(item.price)} $</p>
          </div>
          <p class="lead">${item.desc}</p>
        </div>
      </a>
    `
    )
    .join("");
  elements.menuArea.innerHTML = menuHTML;
};
// Lists products by category
const searchCategory = (e) => {
  const category = e.target.dataset.category;
  if (category == "undefined") {
    return;
  } else if (category === "all") {
    renderMenuItems(menu);
  } else {
    const newMenu = menu.filter((item) => item.category === category);
    renderMenuItems(newMenu);
  }
  renderButtons(category);
};
// Lists menu categories
const renderButtons = (active) => {
  elements.buttonsArea.innerHTML = "";
  buttonsData.forEach((btn) => {
    const buttonElement = document.createElement("button");
    buttonElement.className = "btn btn-outline-dark filter-btn";
    buttonElement.textContent = btn.text;
    buttonElement.dataset.category = btn.value;
    if (btn.value === active) {
      buttonElement.classList.add("bg-dark", "text-light");
    }
    elements.buttonsArea.appendChild(buttonElement);
  });
};
document.addEventListener("DOMContentLoaded", () => {
  renderMenuItems(menu);
  renderButtons("all");
});
elements.buttonsArea.addEventListener("click", searchCategory);
