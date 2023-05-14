const file_root = window.location.origin;
//  incase user didn't login when user logged out page move to login page
window.addEventListener("popstate", (event) => {
  // eslint-disable-next-line no-use-before-define
  if (!isLoggedIn()) {
    event.preventDefault();
    window.location.href = `${file_root}/pages/user/user_login.html`;
  }
});

function isLoggedIn() {
  const findLogged = JSON.parse(localStorage.getItem("user_data"));
  if (findLogged) {
    return true;
  }

  return false;
}

// call the isLoggedIn function when the page loads
if (!isLoggedIn()) {
  window.location.href = `${file_root}/pages/user/user_login.html`;
}

//  <div class="fert12">
//         <img src="../../assets/images/Adama/ada1.avif" alt="order Status">
//     </div>

const productUniqueId = new URLSearchParams(window.location.search).get("orderDetails");
const productUnique = new URLSearchParams(window.location.search).get("productUniqueId");
const orderedProducts = JSON.parse(
  localStorage.getItem("addtoCartDeliveryProduct")
);

// find the which ordered product details want to see here
const getProductDetails = orderedProducts.find(
  (details) =>
    details.orderUniqueId === productUniqueId &&
    details.productUniqueId === productUnique
);
console.log(getProductDetails)

// product image and name get from local storage
const getOrderedproductUid = allProductsDetails.find(
  (data) => data.product_unique_id === getProductDetails.productUniqueId
);
// console.log(getOrderedproductUid);

//ordered product address get from localstorage
const addressOfOrde = JSON.parse(localStorage.getItem("addresses")) || [];
// console.log(addressOfOrde);

// find the orderProduct address from address array
const getOrderedProductAddress = addressOfOrde.find((address) => address.addressId === getProductDetails.addressUniqueID);
//console.log(getOrderedProductAddress);



const path_root = window.location.origin;

const div_fert12 = document.createElement("div");
div_fert12.setAttribute("class", "fert12");
document.querySelector(".fert10").appendChild(div_fert12);

const div_fert12_img = document.createElement("img");
div_fert12_img.setAttribute("src", getOrderedproductUid.source);
div_fert12_img.setAttribute("alt", getOrderedproductUid.product_name);
div_fert12.append(div_fert12_img);

const divFert2 = document.createElement("div");
divFert2.setAttribute("class", "feedback");
div_fert12.append(divFert2);

const divFert2A = document.createElement("a");
divFert2A.setAttribute(
  "href",
  `${file_root}/pages/user/feedback_and_reviews.html?orderDetails=${productUniqueId}&productUniqueId=${productUnique}`
);

divFert2.append(divFert2A);

const divFert2Img = document.createElement("img");
divFert2Img.setAttribute("src", "../../assets/images/review.png");
divFert2Img.setAttribute("alt", "review");
divFert2A.append(divFert2Img);

const divFert2H3 = document.createElement("h3");
divFert2H3.setAttribute("id", "feedbackH3");
divFert2H3.innerText = "Rate & Review Product";
divFert2A.append(divFert2H3);

// <div class="fert01"></div>
const div_fert101 = document.createElement("div");
div_fert101.setAttribute("class", "fert01");
document.querySelector(".fert10").appendChild(div_fert101);

//    <h2>------------</h2>
const fert101_h2 = document.createElement("h2");
fert101_h2.innerText = getOrderedproductUid.product_name;
div_fert101.append(fert101_h2);

// <div class="fert14">
// <p>Price: ₹835</p>  </div>
const div_fert14 = document.createElement("div");
div_fert14.setAttribute("class", "fert14");
div_fert101.appendChild(div_fert14);

const fert14_p = document.createElement("p");
fert14_p.innerText = `Price:${getProductDetails.productCurrentPrice}`;
div_fert14.append(fert14_p);

//  <div class="fert5">
// <h3>Order Qty:</h3><p>2</p>  </div>
const div_fert5 = document.createElement("div");
div_fert5.setAttribute("class", "fert5");
div_fert101.appendChild(div_fert5);

const fert5_h3 = document.createElement("h3");
fert5_h3.innerText = "Order Quantity: ";
div_fert5.append(fert5_h3);

const fert5_p = document.createElement("p");
fert5_p.innerText = getProductDetails.proQuantity;
div_fert5.append(fert5_p);

// <div class="fert16">
// <h3> Delivery Status:</h3><p>Completed.</p>

const div_fert16 = document.createElement("div");
div_fert16.setAttribute("class", "fert16");

div_fert101.appendChild(div_fert16);

const fert16_h3 = document.createElement("h3");
fert16_h3.innerText = " Delivery Status:";
div_fert16.append(fert16_h3);

const fert16_p = document.createElement("p");
fert16_p.innerText = getProductDetails.orderStatus;
div_fert16.append(fert16_p);

// const currentDate = new Date();
// const day = String(currentDate.getDate()).padStart(2, "0");
// const month = String(currentDate.getMonth() + 1).padStart(2, "0");
// const year = currentDate.getFullYear();
// const formattedDate = `${day}/${month}/${year}`;

const deliverydate = getProductDetails.deliveryDate;

// <div class="fert116">
//              <h3>Date:</h3><p>15/08/2022</p> </div>>
const div_fert1116 = document.createElement("div");
div_fert1116.setAttribute("class", "fert116");
div_fert101.appendChild(div_fert1116);

const fert1116_h3 = document.createElement("h3");
fert1116_h3.innerText = "Ordered date: ";
div_fert1116.append(fert1116_h3);

const fert1116_p = document.createElement("p");
fert1116_p.innerText = getProductDetails.orderDate;
div_fert1116.append(fert1116_p);

const div_fert116 = document.createElement("div");
div_fert116.setAttribute("class", "fert116");
div_fert101.appendChild(div_fert116);

const fert116_h3 = document.createElement("h3");
fert116_h3.innerText = "Delivery date: ";
div_fert116.append(fert116_h3);

const fert116_p = document.createElement("p");
fert116_p.innerText = deliverydate;
div_fert116.append(fert116_p);

//  <div class="address1">
//            <h3>Delivery address:</h3><p>R. VASUDEVAN (PRESIDENT)</p> </div>
const div_fert117 = document.createElement("div");
div_fert117.setAttribute("class", "address1");
div_fert101.appendChild(div_fert117);

const fert117_h3 = document.createElement("h3");
fert117_h3.innerText = "Delivery address: ";
div_fert117.append(fert117_h3);

const fert117_p1 = document.createElement("p");
fert117_p1.innerText = getOrderedProductAddress.street +",";
div_fert117.append(fert117_p1);

const fert117_p2 = document.createElement("p");
fert117_p2.innerText = getOrderedProductAddress.city +",";
div_fert117.append(fert117_p2);

const fert117_p3 = document.createElement("p");
fert117_p3.innerText = "Pincode - "+ getOrderedProductAddress.pincode +",";
div_fert117.append(fert117_p3);

const fert117_p4 = document.createElement("p");
fert117_p4.innerText = getOrderedProductAddress.state +".";
div_fert117.append(fert117_p4);

// <div class="cancel_order"><button type="submit">Cancel order</button></div>

const div_cancel_order = document.createElement("div");
div_cancel_order.setAttribute("class", "cancel_order");
div_fert101.appendChild(div_cancel_order);

const back_button = document.createElement("button");
back_button.setAttribute("id", "back");
back_button.setAttribute("type", "button");
back_button.innerText = "back";
div_cancel_order.append(back_button);

const cancel_button = document.createElement("button");
cancel_button.setAttribute("id", "cancel");
cancel_button.setAttribute("type", "submit");
cancel_button.innerText = "Cancel order";
div_cancel_order.append(cancel_button);

document.querySelector("#cancel").addEventListener("click", () => {
  // eslint-disable-next-line no-restricted-globals
  const confirmed = confirm("Are you sure you want to cancel this order?");
  if (confirmed) {
    const orderSts = "Cancelled";
    getProductDetails.orderStatus = orderSts;
    localStorage.setItem(
      "addtoCartDeliveryProduct",
      JSON.stringify(orderedProducts)
    );
    const path_pros = `${path_root}/pages/user/user_order.html`;
    // eslint-disable-next-line no-restricted-globals
    location.href = path_pros;
  }
});

document.getElementById("back").addEventListener("click", () => {
  const path_pros = `${path_root}/pages/user/user_order.html`;
  // eslint-disable-next-line no-restricted-globals
  location.href = path_pros;
});

// if product is deliverd or cancelled the cancell buutonn have to disable
if (
  getProductDetails.orderStatus === "Delivered" ||
  getProductDetails.orderStatus === "Cancelled"
) {
  cancel_button.style.display = "none";
}

const feedbackDiv = document.querySelector(".feedback");
const feedbackArray = JSON.parse(localStorage.getItem("reviews")) || [];
const findFeedbackArray = feedbackArray.find(
  (details) =>
    details.orderId === productUniqueId &&
    details.OrderedProductUniqueId === productUnique
);

// after delivered the only the feedback button have to shown
if (getProductDetails.orderStatus === "Delivered") {
  feedbackDiv.style.display = "inline";
} else {
  feedbackDiv.style.display = "none";
}

// Maybe user already has feedback the product or cancelled it feedback button is have to be disabled
if (findFeedbackArray) {
  feedbackDiv.style.display = "none";
}
