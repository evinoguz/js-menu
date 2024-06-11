import { menu } from "./db.js";
import { calculatePrice, elements } from "./helper.js";

const searchParam = new URLSearchParams(window.location.search);
const paramId = searchParam.get("id");
// Product detail
const product = menu.find((item) => item.id === Number(paramId));
console.log(product);
elements.outlet.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
        <a href="/index.html"><i class="bi bi-house fs-1"></i></a>
        <div>anasayfa / ${product.category} / ${product.title.toLowerCase()}</div>
    </div>
    <h1 class="text-center my-3 shadow p-2 rounded">${product.title}</h1>
    <div class="d-flex align-items-center justify-content-center">
    <img
        src="${product.img}"
        style="max-width: 630px; max-height: 300px"
        class="img-fluid shadow rounded"
        alt=""
    />
    </div>
    <div>
    <h3 class="my-5">
        Ürün Kategorisi: <span class="text-success">${product.category}</span>
    </h3>
    <h3 class="my-5">
        Ürün Fiyatı: <span class="text-success">${calculatePrice(product.price)}$</span>
    </h3>
    </div>
    <p class="lead fs-3">${product.desc}</p>`;
