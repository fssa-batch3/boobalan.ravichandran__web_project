function isLoggedIn() {
  const findLogged = JSON.parse(localStorage.getItem("user_data"));
  if (findLogged) {
    return true;
  }

  return false;
}
const fileRoot = window.location.origin;
//  incase user didn't login when user logged out page move to login page
window.addEventListener("popstate", (event) => {
  if (!isLoggedIn()) {
    event.preventDefault();
    window.location.href = `${fileRoot}/pages/user/user_login.html`;
  }
});

// call the isLoggedIn function when the page loads
if (!isLoggedIn()) {
  window.location.href = `${fileRoot}/pages/user/user_login.html`;
}

const logedUser = JSON.parse(localStorage.getItem("user_data"));

// -------wishlist product get here -------
const wishListProduct = JSON.parse(localStorage.getItem("wishlisstItem")) || [];
const dhanukaDetails =
  JSON.parse(localStorage.getItem("dhanuka_details")) || [];
const adamaDetails = JSON.parse(localStorage.getItem("adama_details")) || [];
const uplDetails = JSON.parse(localStorage.getItem("upl_details")) || [];
const dowAgroScienceDetails =
  JSON.parse(localStorage.getItem("dow_agro_science_details")) || [];
const tataTallisDetails =
  JSON.parse(localStorage.getItem("tata_rallis_details")) || [];
const bayerDetails = JSON.parse(localStorage.getItem("bayer_details")) || [];
const ariesAgroDetails =
  JSON.parse(localStorage.getItem("aries_agro_details")) || [];
const barrixDetails = JSON.parse(localStorage.getItem("barrix_details")) || [];
const indofilDetails =
  JSON.parse(localStorage.getItem("indofil_details")) || [];
const rinujaDetails = JSON.parse(localStorage.getItem("rinuja_details")) || [];
const bioInsecticidesDetails =
  JSON.parse(localStorage.getItem("bio_insecticides_details")) || [];
const bioFungicidesDetails =
  JSON.parse(localStorage.getItem("bio_fungicides_details")) || [];
const bioNematicidesDetails =
  JSON.parse(localStorage.getItem("bio_nematicides_details")) || [];
const bioVircidesDetails =
  JSON.parse(localStorage.getItem("bio_vircides_details")) || [];
const majorNurientsDetails =
  JSON.parse(localStorage.getItem("major_nurients_details")) || [];
const secondaryNutrientsDetails =
  JSON.parse(localStorage.getItem("secondary_nutrients_details")) || [];
const growthPromotersDetails =
  JSON.parse(localStorage.getItem("growth_promoters_details")) || [];
const growthRetardantsDetails =
  JSON.parse(localStorage.getItem("growth_retardants_details")) || [];
const organicFertilizerDetails =
  JSON.parse(localStorage.getItem("organic_fertilizer_details")) || [];
const bioFertilizersDetails =
  JSON.parse(localStorage.getItem("bio_fertilizers_details")) || [];
const antiStressingAgentsDetails =
  JSON.parse(localStorage.getItem("anti_stressing_agents_details")) || [];
const microNutrientsDetails =
  JSON.parse(localStorage.getItem("micro_nutrients_details")) || [];

const findLogedUserWishlist = wishListProduct.filter(
  (details) => details.userUniqueId === logedUser
);
const allProductsss = dhanukaDetails.concat(
  uplDetails,
  dowAgroScienceDetails,
  tataTallisDetails,
  adamaDetails,
  bayerDetails,
  ariesAgroDetails,
  barrixDetails,
  indofilDetails,
  rinujaDetails,
  bioInsecticidesDetails,
  bioFungicidesDetails,
  bioNematicidesDetails,
  bioVircidesDetails,
  majorNurientsDetails,
  secondaryNutrientsDetails,
  growthPromotersDetails,
  growthRetardantsDetails,
  organicFertilizerDetails,
  bioFertilizersDetails,
  antiStressingAgentsDetails,
  microNutrientsDetails
);

const wishProducts = findLogedUserWishlist.map((uuid) =>
  allProductsss.find((product) => product.product_unique_id === uuid.product_id)
);

wishProducts.forEach((wishproduct) => {
  const rootPath = window.location.origin;
  const divFertilizer = document.createElement("div");
  divFertilizer.setAttribute("class", "fertilizer");
  document.querySelector("div.wishlist").append(divFertilizer);

  // <div  class="fert1">
  const divFert1 = document.createElement("div");
  divFert1.setAttribute("class", "fert1");
  divFertilizer.appendChild(divFert1);

  const productName = encodeURIComponent(wishproduct.product_name);
  const productId = wishproduct.product_unique_id;
  const productUrl = `${rootPath}/pages/user/product_details.html?product=${productName}&product_id=${productId}`;

  const fertA = document.createElement("a");
  fertA.setAttribute("href", productUrl);
  divFert1.append(fertA);

  const image = document.createElement("img");
  image.setAttribute("src", wishproduct.source);
  fertA.append(image);

  // <div  class="fert2">
  const divFert2 = document.createElement("div");
  divFert2.setAttribute("class", "fert2");
  divFertilizer.appendChild(divFert2);

  const divProductDetails = document.createElement("div");
  divProductDetails.setAttribute("class", "product_details");
  divFert2.append(divProductDetails);

  const fert2A = document.createElement("a");
  fert2A.setAttribute("href", "");
  divProductDetails.append(fert2A);

  const fert2P = document.createElement("p");
  fert2P.innerText = wishproduct.product_name;
  fert2A.append(fert2P);

  // <div class="pro_price">
  //     <h2>---</h2>
  //     <h3>....</h3>
  // </div>
  const divProPrice = document.createElement("div");
  divProPrice.setAttribute("class", "pro_price");
  divProductDetails.append(divProPrice);

  const divProPriceH2 = document.createElement("h2");
  const { discount } = wishproduct;
  const actualPrice = wishproduct.actual_price;
  const currePrice = actualPrice - discount;
  divProPriceH2.innerText = `₹${currePrice}`;
  divProPrice.append(divProPriceH2);

  const divProPriceh3 = document.createElement("h3");
  divProPriceh3.innerText = `₹${actualPrice}`;
  divProPrice.append(divProPriceh3);

  // <div class="you_save">
  const divProSave = document.createElement("div");
  divProSave.setAttribute("class", "you_save");
  divProductDetails.append(divProSave);

  const divDiscount = document.createElement("h2");
  divDiscount.innerText = `You Save: ₹${discount}`;
  divProSave.appendChild(divDiscount);

  const fert2Button = document.createElement("button");
  fert2Button.setAttribute("class", "remov");
  fert2Button.setAttribute("data-product-id", wishproduct.product_unique_id);
  fert2Button.innerText = "Remove";
  divFert2.append(fert2Button);

  fert2Button.addEventListener("click", function removeWishList() {
    const { productId: id } = this.dataset;
    this.setAttribute("like", "false");
    const updatedWishlist = wishListProduct.filter(
      (product) => product.product_id !== id
    );
    localStorage.setItem("wishlisstItem", JSON.stringify(updatedWishlist));
    this.style.color = "rgb(198, 198, 198)";
    window.location.reload();
  });
});

const emptyWishList = document.getElementById("empty-wishlist");
const shownProducts = document.querySelector(".wishlist");
if (wishProducts.length === 0) {
  emptyWishList.style.display = "block";
  shownProducts.style.display = "none";
} else {
  emptyWishList.style.display = "none";
  shownProducts.style.display = "block";
}
