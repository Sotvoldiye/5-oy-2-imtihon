const template = document.querySelector("template");
const cardList = document.getElementById("card-list");
const cards = document.querySelector(".card");
const loadingElement = document.querySelector(".lds-roller");
const body = document.querySelector(".body");
let a_Href = [];
const showCards = ({ products }) => {
  loadingElement.style.display = "block";
  products.reverse().forEach((product) => {
    body.style.display = "block";
    const {
      id,
      title,
      thumbnail,
      price,
      discountPercentage,
      rating,
      description,
      reviews,
    } = product;
    // console.log(product);

    const clone = template.content.cloneNode(true);
    const a = clone.querySelector("a");
    const img = clone.querySelector("img");
    const descriptionText = clone.querySelector(".description");
    const ratingText = clone.querySelector(".rating");
    const reviewText = clone.querySelector(".review");
    const priceText = clone.querySelector(".price");
    const priceWithDiscount = clone.querySelector(".price-with-discount");
    const buyBtn = document.querySelector(".buy-btn");

    a.href = `./product.html?id=${id}`;
    img.src = thumbnail;
    img.alt = title;
    a_Href.push(a);
    descriptionText.textContent = description;

    ratingText.textContent = rating;

    priceText.textContent = `$${price}`;
    priceWithDiscount.textContent = `$${(price - (price / 100) * discountPercentage).toFixed(2)}`;

    reviewText.textContent = `${reviews.length} Reviews`;

    cardList.appendChild(clone);
  });
  loadingElement.style.display = "none";
};

const showproduct = (product) => {
  console.log(product);
};

console.log(cards);

export { showCards, showproduct };
