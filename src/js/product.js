import { fetchData } from "./fetchData.js";
import { showproduct } from "./updateUI.js";
import "./dark-mode.js";
import { doc } from "prettier";

const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");
const body = document.querySelector(".body");
const loadingElement = document.querySelector(".lds-roller");

fetchData(`https://dummyjson.com/product/` + id)
  .then((product) => {
    showproduct(product);
    body.style.display = "flex";
    loadingElement.style.display = "none";
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
    const imgs = document.querySelectorAll(".imges");
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
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].src = product.thumbnail;
    }
    (card_title_title.textContent += product.title),
      (brand_category.textContent += product.category),
      (card_title_description.textContent = product.description),
      (warantiy_product.textContent += product.warrantyInformation),
      (card_rating.textContent = product.rating),
      (waranty.textContent += product.shippingInformation);
    discountPercentage.textContent += product.discountPercentage + "$";
    price.textContent += product.price + "$";
    const rewievs = product.reviews;

    const commentCard = document.querySelector(".comment");
  
    rewievs.forEach((element) => {
      commentCard.innerHTML += `
          <div class="comment-card rounded-lg p-5 bg-secondary-content ">
  <h4 class="comment-data  text-sm">${element.date}</h4>
  <p class="comment-comment text-lg font-medium">${element.comment}</p>
  
  <div class="email flex items-center justify-between mt-3">
    <a href="mailto:${element.reviewerEmail}" class="comment-email text-blue-600 underline text-sm">
      ${element.reviewerEmail}
    </a>
    <div class="comment-star flex items-center text-yellow-500">
      <i class="fa-solid fa-star"></i>
      <span class="ml-1 text-sm font-semibold">${element.rating}</span>
    </div>
  </div>

  <div class="comment-name mt-3 font-bold">${element.reviewerName}</div>
</div>
`
    });
    const mainImgs = document.querySelector(".main-imgs");  
    const main_Imgs = product.images;  
    
    main_Imgs.forEach((el) => {
      mainImgs.innerHTML += `
        <img class="img w-2xs" src="${el}" alt="Product Image">
      `;
    });
    
  })
  .catch((error) => {
    console.log(error);
  });

//   <div class="comment-card">
//   <h4 class="comment-data"></h4>
//    <p class="comment-comment"></p>
//    <div class="email">
//     <a href="" class="comment-email"></a>
//     <div class="comment-star">
//       <i class="fa-solid fa-star"></i>
//       <p class="comment-stars"></p>
//     </div>
//    </div>
//    <div class="comment-name">

//    </div>
// </div>
