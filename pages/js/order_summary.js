function isLoggedIn() {
  const findLogged = JSON.parse(localStorage.getItem("user_data"));
  if (findLogged) {
    return true;
  }
  return false;
}

const file_root = window.location.origin;

//  incase user didn't login when user logged out page move to login page
window.addEventListener("popstate", (event) => {
  if (!isLoggedIn()) {
    event.preventDefault();
    window.location.href = `${file_root}/pages/user/user_login.html`;
  }
});

// call the isLoggedIn function when the page loads
if (!isLoggedIn()) {
  window.location.href = `${file_root}/pages/user/user_login.html`;
}

// Format a date as a string in the format DD-MM-YYYY
function formatDate(date) {
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  return [day, month, year].join("-");
}

// A second formatDate function with a different name
function formatDate2(date) {
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  return [day, month, year].join("-");
}
// ------------------------ deleivery date-------------
// Set the order date
const orderedDate = new Date();
let numberOfDays = 0;
orderedDate.setDate(orderedDate.getDate() + numberOfDays);
document.getElementById("order-date").innerHTML = formatDate(orderedDate);

// Set the delivery date
const deliveredDate = new Date();
numberOfDays = 10;
deliveredDate.setDate(deliveredDate.getDate() + numberOfDays);
document.getElementById("delivery-date").innerHTML = formatDate2(deliveredDate);

document.getElementById("cancel_product").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Are you canceling your order for this product?");
  window.location.href = `${file_root}/index.html`;
});

const productUniqueId = new URLSearchParams(window.location.search).get(
  "order"
);

const allProduct = JSON.parse(localStorage.getItem("products"));

const loadProduct = allProduct.find(
  (details) => details.product_unique_id === productUniqueId
);
// console.log(loadProduct)

const productNames = loadProduct.product_name;
document.querySelector("#pro_name").textContent = productNames;

const productImages = document.createElement("img");
productImages.setAttribute("src", loadProduct.source);
document.querySelector("div.product_image").append(productImages);

const quantityDropdown = document.getElementById("option");
const actualPriceInput = document.getElementById("actual_price");
const discountInput = document.getElementById("discount");
const productPriceInput = document.getElementById("product_pri");
const productWeights = document.getElementById("weight");

// Set initial values based on the loaded product
actualPriceInput.value = loadProduct.actual_price;
discountInput.value = loadProduct.discount;
productWeights.value = loadProduct.product_weight;
productPriceInput.value = loadProduct.actual_price - loadProduct.discount;


// ------------------ loader---------------
const loader = document.getElementById("loader");

quantityDropdown.addEventListener("change", () => {
  const quantity = Number(quantityDropdown.value);
  const actualPrice = loadProduct.actual_price;
  const { discount } = loadProduct;

  loader.style.display = "block"; // show the loader

  setTimeout(() => {
    // simulate a delay
    const totalPrice = quantity * actualPrice;
    const totalDiscount = quantity * discount;

    actualPriceInput.value = totalPrice;
    discountInput.value = totalDiscount;
    productPriceInput.value = totalPrice - totalDiscount;

    loader.style.display = "none"; // hide the loader
  }, 2000); // change 3000 to the desired delay in milliseconds
});

// ------------------------------------------------------------

const logedUser = JSON.parse(localStorage.getItem("user_data"));
// Get the form element and listen for the submit event
const orderForm = document.querySelector("form");
orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the input values
  const productPrice = document.querySelector("#product_pri").value;
  const quantity = document.querySelector("#option").value;
  const discount = document.querySelector("#discount").value;
  const actualPrice = document.querySelector("#actual_price").value;
  // const productWeight = document.querySelector("#weight").value;
  const orderDate = new Date().toLocaleDateString();
  const deliveryDate = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000
  ).toLocaleDateString();
  const deliveryStatus = "false";

  // Get the delivery information
  const addressUniqueID = "";
  
  // const paymentMethod = "";
  // const state = "Tamil Nadu";

  // Get current time and format it as a string
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Generate a unique ID for the order
  const uid = new Date().getTime().toString(24);

  const orderData =
    JSON.parse(localStorage.getItem("addtoCartDeliveryProduct")) || [];

  // Create a new object with the input values
  const newOrder = {
    productUniqueId,
    productCurrentPrice: productPrice,
    proQuantity: quantity,
    ProductDiscount: discount,
    productActualPrice: actualPrice,
    totalPrice: productPrice,
    
    orderDate,
    deliveryDate,

    addressUniqueID,
  
    orderUniqueId: uid,
    orderedTime:timeString,
    deliveryStatus,
    userUniqueId: logedUser,
   
  };

  // Store the new object in localStorage
  orderData.push(newOrder);
  localStorage.setItem("addtoCartDeliveryProduct", JSON.stringify(orderData));
  // const product_uud = encodeURIComponent(loadProduct["product_unique_id"]);
  // const product_id = product_details[i]["product_unique_id"];
  //   const product_url = `${root_path}/pages/user/product_details.html?product=${product_name}&product_id=${product_id}`;

  const path_roo = window.location.origin;

  window.location.href = `${path_roo}/pages/user/address_delivery.html?delivery_address=${encodeURIComponent(
    loadProduct.product_unique_id
  )}&orderUnique=${uid}`;
});
