// const productList= JSON.parse(localStorage.getItem("bio_vircides_details"))

const productId = new URLSearchParams(window.location.search).get("product_id");
// const productDetails = JSON.parse(localStorage.getItem('adama_details'));
const productDetails = JSON.parse(localStorage.getItem("products")) || [];
const getCropProducts = JSON.parse(localStorage.getItem("cropProducts")) || [];
const getCrops = JSON.parse(localStorage.getItem("crops")) || [];

const loadProduct = productDetails.find((data) => data.product_unique_id === productId)


const findCrop = getCropProducts.filter((crop) => crop.product_id === productId);
// console.log(findCrop);

// to get matched crop objects,
const findProductCrops = getCrops.filter((crop) => 
  findCrop.some((data) => data.crop_id === crop.cropId)
);
console.log(findProductCrops);

const getCropsNames = [];
for(let i = 0; i < findProductCrops.length; i++){
  const cropName = findProductCrops[i].cropName;
  getCropsNames.push(cropName);
}
console.log(getCropsNames)


// --------------------------live server location get --------------------
const add_path = window.location.origin;
//console.log(loadProduct)
// <div class="fertilizer">...</div>
const div_fetilizer = document.createElement("div");
div_fetilizer.setAttribute("class", "fertilizer");
document.querySelector("div.total").prepend(div_fetilizer);
// console.log(div_fetilizer);

//  <div  class="fert1">..</div>
const div_fert1 = document.createElement("div");
div_fert1.setAttribute("class", " fert1");
div_fetilizer.append(div_fert1);

//  <img src="../../assets/images/Adama/ada1.avif" alt="AGIL HERBICIDE order page" >
const product_img = document.createElement("img");
product_img.setAttribute("src", loadProduct.source);
product_img.setAttribute("alt", loadProduct.product_name);
product_img.setAttribute("id", "product_image");
div_fert1.append(product_img);

//    <a href="./wishlist.html"><i id="wish1" class="fa fa-heart" style="font-size:36px"></i></a>
const product_a = document.createElement("a");
// product_a.setAttribute("href", "");
div_fert1.append(product_a);

const product_i = document.createElement("i");
product_i.setAttribute("id", "wish1");
product_i.setAttribute("class", "fa fa-heart");
product_i.setAttribute("style", "font-size:36px");
product_a.append(product_i);

// <div class="fert2"> <h2>....</h2>  </div>
const div_fert2 = document.createElement("div");
div_fert2.setAttribute("class", "fert2");
div_fetilizer.append(div_fert2);

const div_fert2_h2 = document.createElement("h2");
div_fert2_h2.innerText = loadProduct.product_name;
div_fert2_h2.setAttribute("id", "pro_name");
div_fert2.append(div_fert2_h2);

//    <div class="fert3">....</div>
const div_fert3 = document.createElement("div");
div_fert3.setAttribute("class", "fert3");
div_fert2.append(div_fert3);

// <h3>...</h3>
const div_fert3_h3 = document.createElement("h3");
div_fert3_h3.innerText = "Manufacture:";
div_fert3.append(div_fert3_h3);

// <p>...</p>
const div_fert3_p = document.createElement("p");
div_fert3_p.innerText = ` ${loadProduct.manufacture_company}`;
div_fert3_p.setAttribute("id", "manufact");
div_fert3.append(div_fert3_p);

//  <div class="fert4">..</div>
const div_fert4 = document.createElement("div");
div_fert4.setAttribute("class", "fert4");
div_fert2.append(div_fert4);

// <p>...</p>
const div_fert4_p = document.createElement("p");
const { actual_price } = loadProduct;
const { discount } = loadProduct;
const current_price = actual_price - discount;
div_fert4_p.innerText = `₹${current_price}`;
div_fert4.append(div_fert4_p);

// <del>...</del>
const div_fert4_del = document.createElement("del");
div_fert4_del.innerText = `₹${loadProduct.actual_price}`;
div_fert4_del.setAttribute("id", "actual_price");
div_fert4.append(div_fert4_del);

// <div class="fert55">..</div>
const div_fert55 = document.createElement("div");
div_fert55.setAttribute("class", "fert55");
div_fert2.append(div_fert55);

// <p>...</p>
const div_fert55_p = document.createElement("p");
div_fert55_p.innerText = `You Save  ₹${discount}`;
div_fert55_p.setAttribute("id", "dicount");
div_fert55.append(div_fert55_p);

//  <div class="fert5">..</div>
const div_fert5 = document.createElement("div");
div_fert5.setAttribute("class", "fert5");
div_fert2.append(div_fert5);
// // <h3>...</h3>

//  <div class="fert5">..</div>
const div_fert5_1 = document.createElement("div");
div_fert5_1.setAttribute("class", "fert5");
div_fert2.append(div_fert5_1);
// <h3>...</h3>
const div_fert5_h3_1 = document.createElement("h3");

div_fert5_h3_1.innerText = `Weight: ${loadProduct.product_weight}`;
div_fert5_1.append(div_fert5_h3_1);



//  <div class="fert5">..</div>
const div_crops = document.createElement("div");
div_crops.setAttribute("class", "crops");
div_fert2.append(div_crops);
// <h3>...</h3>
const crops_details = document.createElement("h3");

crops_details.innerText = "Suitable crops:";
div_crops.append(crops_details);

const crops_details_h4 = document.createElement("h4");

for (let i = 0; i < getCropsNames.length; i++) {
  const cropName = getCropsNames[i] + ".";
  const cropNameElement = document.createElement("li");
  cropNameElement.innerText = cropName;
  crops_details_h4.appendChild(cropNameElement);
}

div_crops.append(crops_details_h4);


//  <div class="rem">...</div>
const div_rem = document.createElement("div");
div_rem.setAttribute("class", "rem");
div_fert2.append(div_rem);

// <a href="./add_cart.html">...</a>
const rem_a = document.createElement("a");
rem_a.setAttribute("id", "go_to_cart");
div_rem.append(rem_a);

// <button id="rem1">.....</button>
const rem_button = document.createElement("button");
rem_button.setAttribute("id", "rem1");
rem_button.innerText = "GO TO CART";
rem_a.append(rem_button);
// <i>...</i>
const rem_i = document.createElement("i");
rem_i.setAttribute("id", "cart");
rem_i.setAttribute("class", "fa fa-shopping-cart");
rem_i.setAttribute("style", "font-size:25px");
rem_button.prepend(rem_i);



const addvertisementDiv = document.createElement("div");
addvertisementDiv.setAttribute("class", "addvertisement");
div_fert2.append(addvertisementDiv)

const add_img = document.createElement("img");
add_img.setAttribute("src", "../../assets/images/details.jpg");
addvertisementDiv.appendChild(add_img);


// <div>...</div>
const div_div = document.createElement("div");
div_rem.append(div_div);

// <a>...<a>
const div_a = document.createElement("a");

div_div.append(div_a);

// <button id="rem2">.....</button>
const rem2_button = document.createElement("button");
rem2_button.setAttribute("id", "rem2");
rem2_button.setAttribute("type", "submit");
rem2_button.innerText = "BUY NOW ";
div_a.append(rem2_button);

// <i>...</i>
const div_i = document.createElement("i");
div_i.setAttribute("id", "thunder");
div_i.setAttribute("class", "fa fa-bolt");
div_i.setAttribute("style", "font-size:25px");
rem2_button.prepend(div_i);

const crop_description = document.createElement("div");
crop_description.setAttribute("class", "crop_description");
document.querySelector("div.total").append(crop_description);

//   <div class="description">...</div>
const div_description = document.createElement("div");
div_description.setAttribute("class", "description");
document.querySelector("div.total").append(div_description);

// <h1>...</h1>
const description_h1 = document.createElement("h1");
description_h1.innerText = "Descriptions";
description_h1.setAttribute("id", "descriptiondes");
description_h1.setAttribute("type", "submit");
crop_description.append(description_h1);

const divDesc = document.createElement("div");
divDesc.setAttribute("id", "descriptionul");
divDesc.setAttribute("class", "descriptionDetails");
div_description.append(divDesc);

const description_ul = document.createElement("ul");
divDesc.append(description_ul);

const productDescription = loadProduct.description;
const applicationPoints = productDescription.split(". ");

applicationPoints.forEach((point) => {
  const description_li = document.createElement("li");
  description_li.innerText = point.trim() + ".";
  description_ul.appendChild(description_li);
});

// Append the applicationList to the appropriate container element on the product detail page





const bdescription_inn = document.createElement("h3");
bdescription_inn.innerText = "Descriptions";
bdescription_inn.setAttribute("id", "descriptionin");

divDesc.prepend(bdescription_inn);

//   <div class="benifits">...</div>
const div_benifits = document.createElement("div");
div_benifits.setAttribute("class", "benifits");
document.querySelector("div.total").append(div_benifits);


const divbeni = document.createElement("div");
divbeni.setAttribute("id", "benifitsul");
divbeni.setAttribute("class", "benifitsDetails");
div_benifits.append(divbeni);





// <h2>...</h2>
const benifits_h2 = document.createElement("h2");
benifits_h2.innerText = "Benefits";
benifits_h2.setAttribute("id", "benifitsbeni");
crop_description.append(benifits_h2);

// <ul>...</ul>
const benifits_ul = document.createElement("ul");
divbeni.append(benifits_ul);

// <li>...</li>
const productBenifits = loadProduct.benifits;
const benifitsPoints = productBenifits.split(". ");
// console.log(benifitsPoints)

// split the each points
benifitsPoints.forEach((point) => {
  const benifits_li1 = document.createElement("li");
  benifits_li1.innerText = point.trim() + ".";
  benifits_ul.appendChild(benifits_li1);
});






const benifits_inn = document.createElement("h3");
benifits_inn.innerText = "Benefits";
benifits_inn.setAttribute("id", "benifitsin");
divbeni.prepend(benifits_inn);


//   <div class="method">...</div>
const div_method = document.createElement("div");
div_method.setAttribute("class", "method");
document.querySelector("div.total").append(div_method);

// <h2>...</h2>
const method_h2 = document.createElement("h2");
method_h2.innerText = "Method of Application";
method_h2.setAttribute("id", "applicationapp");
crop_description.append(method_h2);



// apllication details
const divAppli= document.createElement("div");
divAppli.setAttribute("id", "applicationul");
divAppli.setAttribute("class", "applicationDetails");
div_method.append(divAppli);

// <ul>...</ul>
const method_ul = document.createElement("ul");

divAppli.append(method_ul);


// <li>...</li>
const productApplication = loadProduct.application;
const methodPoints = productApplication.split(". ");
// console.log(benifitsPoints)

// split the each points
methodPoints.forEach((point) => {
  const method_li1 = document.createElement("li");
  method_li1.innerText = point.trim()+".";
  method_ul.appendChild(method_li1);
});

const application_inn = document.createElement("h3");
application_inn.innerText = "Method of Application";
application_inn.setAttribute("id", "applicationin");
divAppli.prepend(application_inn);

//   <div class="offers1">...</div>
const related_product = document.createElement("div");
related_product.setAttribute("class", "related_product");
document.querySelector("div.total").append(related_product);

const related_product_h1 = document.createElement("h1");
related_product_h1.innerText = "Related Products";
related_product.append(related_product_h1);

const related_img = `${add_path}/assets/images/add-to-cart.png`;

const related_product_img = document.createElement("img");
related_product_img.setAttribute("src", related_img);
related_product.append(related_product_img);

//   <div class="offers1">...</div>
const crop_offers1 = document.createElement("div");
crop_offers1.setAttribute("class", "offerscrop");
document.querySelector("div.total").append(crop_offers1);

// ----------------------------------
const button = document.querySelector("#wish1");
const loginUserDetails = JSON.parse(localStorage.getItem("user_data"));
const isToggling = false; // add this flag variable

button.addEventListener("click", function wishListAction() {
  // if user login ornot check this function
  const logedUserDetails = JSON.parse(localStorage.getItem("user_data"));

  if (loginUserDetails) {
    this.classList.toggle("fa-solid");
    this.classList.toggle("true");
    this.classList.toggle("active");
    this.style.color = "rgb(7, 14, 88)";

    const wishlisstItem =
      JSON.parse(localStorage.getItem("wishlisstItem")) || [];
    const productUniqueId = loadProduct.product_unique_id;
    const exit =
      wishlisstItem.length &&
      wishlisstItem.some(
        (data) =>
          data.product_id === productUniqueId &&
          data.userUniqueId === logedUserDetails
      );

    if (this.classList.contains("true") && !exit) {
      this.setAttribute("like", "true");

      wishlisstItem.push({
        product_id: productUniqueId,
        userUniqueId: loginUserDetails,
      });
      localStorage.setItem("wishlisstItem", JSON.stringify(wishlisstItem));
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      this.setAttribute("like", "false");
      const wishlistRemove = wishlisstItem.filter(
        (data) =>
          data.product_id !== productUniqueId ||
          (data.product_id === productUniqueId &&
            data.userUniqueId !== logedUserDetails)
      );
      localStorage.setItem("wishlisstItem", JSON.stringify(wishlistRemove));
      this.style.color = "rgb(198, 198, 198)";
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  } else {
    window.location.href = `${add_path}/pages/user/user_login.html`;
  }
});

function timeout() {
  const like = document.getElementById("like");
  like.style.display = "none";
}

function timeout2() {
  const dislike = document.getElementById("dislike");
  dislike.style.display = "none";
}

function likeAlert() {
  if (loginUserDetails) {
    if (this.classList.contains("active")) {
      const like = document.getElementById("like");
      like.style.display = "block";
      setTimeout(timeout, 1200);
    } else {
      const dislike = document.getElementById("dislike");
      dislike.style.display = "block";
      setTimeout(timeout2, 1200);
    }
  } else {
    window.location.href = `${add_path}/pages/user/user_login.html`;
  }
}

button.addEventListener("click", likeAlert);

function findLike() {
  if (loginUserDetails) {
    const logedUserDetails = JSON.parse(localStorage.getItem("user_data"));

    const wishlisstItem =
      JSON.parse(localStorage.getItem("wishlisstItem")) || [];
    const productUniqueId = loadProduct.product_unique_id;
    const exit =
      wishlisstItem.length &&
      wishlisstItem.some(
        (data) =>
          data.product_id === productUniqueId &&
          data.userUniqueId === logedUserDetails
      );
    if (exit) {
      button.classList.add("fa-solid");
      button.classList.add("true");
      button.classList.add("active");
      button.style.color = "rgb(7, 14, 88)";
    } else {
      button.classList.remove("fa-solid");
      button.classList.remove("true");
      button.classList.remove("active");
      button.style.color = "rgb(198, 198, 198)";
    }
  } else {
    button.style.color = "rgb(198, 198, 198)";
  }
}

window.onload = () => {
  findLike();
};

// ------------------ Add to cart buttons--------------

function addToCart() {
  if (loginUserDetails) {
    const logedUserDetails = JSON.parse(localStorage.getItem("user_data"));
    const addToCartItem =
      JSON.parse(localStorage.getItem("addToCartItem")) || [];
    const addProductId = loadProduct.product_unique_id;

    const productExists = addToCartItem.some(
      (data) =>
        data.cart_id === addProductId && data.userUniqueId === logedUserDetails
    );
    if (!productExists) {
      addToCartItem.push({
        cart_id: addProductId,
        userUniqueId: loginUserDetails,
        product_qty: "1",
      });
      localStorage.setItem("addToCartItem", JSON.stringify(addToCartItem));

      const add_root = `${add_path}/pages/user/add_cart.html`;
      rem_a.setAttribute("href", add_root);
    } else {
      alert("Product already in cart");
    }
  } else {
    window.location.href = `${add_path}/pages/user/user_login.html`;
  }
}
document.getElementById("rem1").addEventListener("click", addToCart);

// when click uynow button this function is work............
document.getElementById("rem2").addEventListener("click", () => {
  if (loginUserDetails) {
    const product_id = loadProduct.product_unique_id;
    const wish_p = `${add_path}/pages/user/order_summary.html?order=${product_id}`;
    div_a.setAttribute("href", wish_p);
  } else {
    window.location.href = `${add_path}/pages/user/user_login.html`;
  }
});

const descriptionCrop = document.getElementById("descriptiondes");
const benifitsCrop = document.getElementById("benifitsbeni");
const applicationCrop = document.getElementById("applicationapp");
const descriptionCropUl = document.querySelector(".description");
const benifitsCropUl = document.querySelector(".benifits");
const applicationCropUl = document.querySelector(".method");
applicationCropUl.style.display = "none";
benifitsCropUl.style.display = "none";
descriptionCropUl.style.display = "none";

descriptionCrop.addEventListener("click", function(){
  descriptionCropUl.style.display = "inline";
  benifitsCropUl.style.display = "none";
  applicationCropUl.style.display = "none";
  descriptionCrop.classList.add("descrip");
  benifitsCrop.classList.remove("benifi");
  applicationCrop.classList.remove("applica");


});
benifitsCrop.addEventListener("click", () => {
  benifitsCropUl.style.display = "inline";
  descriptionCropUl.style.display = "none";
  applicationCropUl.style.display = "none";
  benifitsCrop.classList.add("benifi");
  applicationCrop.classList.remove("applica");
  descriptionCrop.classList.remove("descrip");

});
applicationCrop.addEventListener("click", () => {
  applicationCropUl.style.display = "inline";
  descriptionCropUl.style.display = "none";
  benifitsCropUl.style.display = "none";
  applicationCrop.classList.add("applica");
  descriptionCrop.classList.remove("descrip");
  benifitsCrop.classList.remove("benifi");
});

const pageProduct = loadProduct.category_id;
// console.log(pageProduct);

const findRelatedProducts = productDetails.filter(product => product.category_id === pageProduct);
// .log(findRelatedProducts)


const findRelated = findRelatedProducts.filter(name => name.product_unique_id  !== loadProduct.product_unique_id)

const product_path = window.location.origin;

for (let i = 0; i < findRelated.length; i++) {
  const div_today = document.createElement("div");
  div_today.setAttribute("class", "todaycrop");
  div_today.setAttribute("data-id", findRelated[i].product_unique_id);
  document.querySelector("div.offerscrop").append(div_today);

  const product_name = encodeURIComponent(findRelated[i].product_name);
  const product_id = findRelated[i].product_unique_id;
  const product_url = `${product_path}/pages/user/product_details.html?product=${product_name}&product_id=${product_id}`;

  const insecticide_a = document.createElement("a");
  // insecticide_a.setAttribute("href","../../pages/user/adama1.html"+"?product="+product_details[i]["product_unique_id"]);
  insecticide_a.setAttribute("href", product_url);
  div_today.append(insecticide_a);

  //  product image------------------
  const insecticide_img = document.createElement("img");
  insecticide_img.setAttribute("src", findRelated[i].source);
  insecticide_img.setAttribute("alt", findRelated[i].product_name);
  insecticide_a.append(insecticide_img);

  //  product name----------------------.
  const pro_name = document.createElement("p");
  pro_name.innerText = findRelated[i].product_name;
  insecticide_a.append(pro_name);

  document.querySelector("div.offerscrop").append(div_today);
}

// customer reviews page created.

const reviewDiv = document.createElement("div");
reviewDiv.setAttribute("class", "reviews");
document.querySelector("div.total").append(reviewDiv);

// reviews left side logo
const reviewDivcontainer = document.createElement("div");
reviewDivcontainer.setAttribute("class", "reviewsName");
reviewDiv.append(reviewDivcontainer);

// all reviews rounded
const averageRating = document.createElement("div");
averageRating.setAttribute("class", "averageRating");
reviewDivcontainer.append(averageRating);

const reviewsLogo = document.createElement("img");
reviewsLogo.setAttribute("src", "../../assets/images/customers_reviews.jpg");
reviewsLogo.setAttribute("id", "reviewsLogo");
reviewDivcontainer.append(reviewsLogo);

const reviewHeader = document.createElement("h2");
reviewHeader.innerText = "Customer Reviews";
reviewDivcontainer.append(reviewHeader);

// star ratings
const avgCusRating = document.createElement("h1");

// get this page shown product
// const thisPageproductName = loadProduct.product_name;

// get this product reviews from localstorage
const customerReviewsget = JSON.parse(localStorage.getItem("reviews")) || [];

// get what are the given to this product
const thisProductReviews = customerReviewsget.filter(
  (review) => review.OrderedProductUniqueId === productId
);

// no reviews background image
const NoreviewsLogo = document.createElement("img");
NoreviewsLogo.setAttribute("src", "../../assets/images/no_reviews.jpg");
NoreviewsLogo.setAttribute("id", "NoreviewsLogo");
document.querySelector("div.total").append(NoreviewsLogo);

// if no one use didinot bought this product . there is no reviews in reviews product
const reviewsContsinerDiv = document.querySelector(".reviews");
if (thisProductReviews.length === 0) {
  reviewsContsinerDiv.style.display = "none";
  NoreviewsLogo.style.display = "inline";
} else {
  NoreviewsLogo.style.display = "none";
}

// forloop find avg of ratings
let avgRatings = 0;
for (let i = 0; i < thisProductReviews.length; i++) {
  avgRatings += parseInt(thisProductReviews[i].rating, 10);
}

avgRatings = (avgRatings / thisProductReviews.length).toFixed(1);

avgCusRating.innerText = avgRatings;
averageRating.append(avgCusRating);

// staricon
const avgStarIcon = document.createElement("img");
avgStarIcon.setAttribute("src", "../../assets/images/star_rating.png");
averageRating.append(avgStarIcon);

const customersReviewscontainer = document.createElement("div");
customersReviewscontainer.setAttribute("class", "reviewsDetails");
reviewDiv.append(customersReviewscontainer);

const ratingsheader = document.createElement("h2");
ratingsheader.innerText = "Ratings & Reviews";
customersReviewscontainer.append(ratingsheader);

// all customers reviews ans=d ratings container
const allCustomeReviews = document.createElement("div");
allCustomeReviews.setAttribute("class", "allCustomeReviews");
customersReviewscontainer.append(allCustomeReviews);

for (let i = 0; i < thisProductReviews.length; i++) {
  // rating and customername
  const customerStar1 = document.createElement("div");
  customerStar1.setAttribute("class", "customerStar1");
  allCustomeReviews.append(customerStar1);

  const reviewStarReviewContainer = document.createElement("div");
  reviewStarReviewContainer.setAttribute("class", "reviewStarReviewContainer");
  customerStar1.append(reviewStarReviewContainer);

  // star container
  const reviewStarContainer = document.createElement("div");
  reviewStarContainer.setAttribute("class", "reviewStarContainer");
  reviewStarReviewContainer.append(reviewStarContainer);

  // star ratings
  const customerRating = document.createElement("h3");
  customerRating.innerText = thisProductReviews[i].rating;
  reviewStarContainer.append(customerRating);

  // staricon
  const customerStarIcon = document.createElement("img");
  customerStarIcon.setAttribute("src", "../../assets/images/star_rating.png");
  reviewStarContainer.append(customerStarIcon);

  // customer name
  const customerName = document.createElement("P");
  customerName.innerText = thisProductReviews[i].customerName;
  reviewStarReviewContainer.append(customerName);

  // customer reviews
  const customersReviewsDiv = document.createElement("div");
  customersReviewsDiv.setAttribute("class", "customersReviewsDiv");
  customerStar1.append(customersReviewsDiv);

  // customer name
  const ReviewsDetails = document.createElement("P");
  ReviewsDetails.innerText = thisProductReviews[i].feedback;
  customersReviewsDiv.append(ReviewsDetails);
}
