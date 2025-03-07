import { fetchData } from "./fetchData.js";
import { showproduct } from "./updateUI.js";
import "./dark-mode.js";
import { doc } from "prettier";

const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");
const body = document.querySelector(".body")
const loadingElement = document.querySelector(".lds-roller");

fetchData(`https://dummyjson.com/product/` + id)
  .then((product) => {
    showproduct(product);
     body.style.display ="grid"
      loadingElement.style.display = "none"
    const newObject = {
      name: product.title,

      category: product.category,
      id: product.id,
      description: product.description,
      price: product.price,
      rating: product.rating,
      brand: product.brand,
      tubnail: product.thumbnail,
      warrantyInformation: product.warrantyInformation,
    };
    const card = document.querySelector(".card");
    const imgs = document.querySelector(".imges");
    const id = document.querySelector(".id");
    const card_title_title = document.querySelector(".card_title_title");
    const card_title_brend = document.querySelector(".card_title_brend");
    const brand_category = document.querySelector(".brand-category");
    const card_title_description = document.querySelector(
      ".card_title_description",
    );
    const warantiy_product = document.querySelector(".warantiy-product");
    const card_rating = document.querySelector(".card_rating");
    const waranty = document.querySelector(".waranty");
    const discountPercentage = document.querySelector(".discountPercentage");
    const price = document.querySelector(".price");
    imgs.src = product.thumbnail;
    id.textContent += product.id,
    (card_title_title.textContent += product.title),
      (card_title_brend.textContent += product.brand),
      (brand_category.textContent += product.category),
      (card_title_description.textContent = product.description),
      (warantiy_product.textContent += product.warrantyInformation),
      (card_rating.textContent = product.rating),
      (waranty.textContent += product.shippingInformation);
    discountPercentage.textContent += product.discountPercentage + "$";
    price.textContent += product.price + "$";

    // card.innerHTML = `

    //  <div class="card-_title">

    //   <p class="card_title_description">
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellat inventore tenetur exercitationem
    //     vero quasi sit laboriosam! Unde, fuga quaerat. Eos, tempora magni. Similique dolore necessitatibus cum
    //     laudantium corporis laboriosam!
    //   </p>
    //   <p class="warantiy-product">
    //     Lorem ipsum dolor, sit amet consectetur adipisicing.
    //   </p>
    //   <h2 class="card_rating"><i class="fa-solid fa-star"></i> Rating</h2>
    // </div>`
    console.log(newObject);
  })
  .catch((error) => {
    console.log(error);
  });
