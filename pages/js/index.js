//  <div class="today">
//    <a href="./pages/user/off1.html"> <img src="./assets/images/fert7.jpg" alt="Sumitomo Lano Pyriproxyfen 10% SC Insecticides">
//     <p>Sumitomo Lano Pyriproxyfen 10% SC Insecticides</p>
//
//    <div class="pprice">
//     <h2>₹ 1040</h2><del>₹ 2040</del></div>
//     <h3>You Save:₹ 1,000</h3></a>

// </div>
const product_details = JSON.parse(localStorage.getItem("products"));
const product_path = window.location.origin;

for (let i = 0; i < product_details.length; i++) {
  const div_today = document.createElement("div");
  div_today.setAttribute("class", "today");
  div_today.setAttribute("data-id", product_details[i].product_unique_id);
  document.querySelector("div.offers1").append(div_today);

  const product_name = encodeURIComponent(product_details[i].product_name);
  const product_id = product_details[i].product_unique_id;
  const product_url = `${product_path}/pages/user/product_details.html?product=${product_name}&product_id=${product_id}`;

  const insecticide_a = document.createElement("a");

  insecticide_a.setAttribute("href", product_url);
  div_today.append(insecticide_a);

  //  product image------------------
  const insecticide_img = document.createElement("img");
  insecticide_img.setAttribute("src", product_details[i].source);
  insecticide_img.setAttribute("alt", "");
  insecticide_a.append(insecticide_img);

  //  product name----------------------.
  const pro_name = document.createElement("p");
  pro_name.innerText = product_details[i].product_name;
  insecticide_a.append(pro_name);

  const div_pricecontain = document.createElement("div");
  div_pricecontain.setAttribute("class", "pricecontain");
  insecticide_a.append(div_pricecontain);

  // price--------------------
  const div_price = document.createElement("div");
  div_price.setAttribute("class", "price101");
  div_pricecontain.append(div_price);

  let price_h2 = document.createElement("h3");
  price_h2.innerText = "Special Price: ";
  div_price.append(price_h2);
  // current price--------------------
  const old_price1 = product_details[i].actual_price;
  const discount1 = product_details[i].discount;
  const price = old_price1 - discount1;
  price_h2 = document.createElement("h4");
  price_h2.innerText = `₹${price}`;
  div_price.append(price_h2);

  const div_price11 = document.createElement("div");
  div_price11.setAttribute("class", "price11");
  div_pricecontain.append(div_price11);

  const price11_h2 = document.createElement("h3");
  price11_h2.innerText = "Actual Price: ";
  div_price11.append(price11_h2);
  // old price----------------------

  const old_price = product_details[i].actual_price;
  const price_del = document.createElement("del");
  price_del.innerText = `₹${old_price}`;
  div_price11.append(price_del);

  const div_save = document.createElement("div");
  div_save.setAttribute("class", "div_save");
  insecticide_a.append(div_save);

  // save price details------------------
  const save_h3 = document.createElement("h3");
  const { discount } = product_details[i];
  save_h3.innerText = `You Save - ₹${discount}`;
  div_save.append(save_h3);

  document.querySelector("div.offers1").append(div_today);
}

let slideIndex = 0;
let timeoutID;
let isTransitioning = false;
function showSlides(n = 1) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  isTransitioning = false;
  timeoutID = setTimeout(showSlides, 2500); // Change slide every 2.5 seconds
}

showSlides();

function plusSlides(n) {
  if (!isTransitioning) {
    isTransitioning = true;
    clearTimeout(timeoutID); // Cancel any scheduled transitions
    showSlides(n);
  }
}

function minusSlides(n) {
  if (!isTransitioning) {
    isTransitioning = true;
    clearTimeout(timeoutID); // Cancel any scheduled transitions
    showSlides(n);
  }
}

function currentSlide(n) {
  if (!isTransitioning) {
    isTransitioning = true;
    clearTimeout(timeoutID); // Cancel any scheduled transitions
    showSlides(n - slideIndex);
  }
}

// append the offers, insecticides.....
let getBayer = JSON.parse(localStorage.getItem("category"))|| [];

const findBayer = getBayer.find(e => e.category_name === "BAYER");
const findInsecticides = getBayer.find(e => e.category_name === "BIO INSECTICIDES");
const findFungicides = getBayer.find(e => e.category_name === "BIO FUNGICIDES");
const findPromoters = getBayer.find(e => e.category_name === "GROWTH PROMOTERS");
const findNematicides = getBayer.find(e => e.category_name === "BIO NEMATICIDES");


const ways = window.location.origin
const styleTypes =
`<div class="offers">
 <a href="${ways}/pages/user/offers.html?category_id=${findBayer.category_id}">
   <img src="./assets/images/fert1.jpg" alt="offers" class="offers11">
   <h2 class="off">Offers</h2>
 </a>
</div>
<div class="offers">
 <a href="${ways}/pages/user/products_cart.html?category_id=${findFungicides.category_id}">
   <img src="./assets/images/fert2.jpg" alt="Pesticides products" class="offers11">
   <h2 class="off1">Insecticides</h2>
 </a>
</div>
<div class="offers">
 <a href="${ways}/pages/user/products_cart.html?category_id=${findFungicides.category_id}">
   <img src="./assets/images/fert3.jpg" alt="Fungicides" class="offers11">
   <h2 class="off2">Fungicides</h2>
 </a>
</div>
<div class="offers">
 <a href="${ways}/pages/user/products_cart.html?category_id=${findPromoters.category_id}">
   <img src="./assets/images/fert4.jpg" alt="Growth Promoters" class="offers11">
   <h2 class="off3">Growth Promoters</h2>
 </a>
</div>
<div class="offers">
 <a href="${ways}/pages/user/products_cart.html?category_id=${findNematicides.category_id}">
   <img src="./assets/images/fert5.png" alt="Herbicides" class="offers11">
   <h2 class="off4">Nematicides</h2>
 </a>
</div>`;

document.querySelector("div.product").insertAdjacentHTML("beforeend", styleTypes);

         