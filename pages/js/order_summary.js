const file_root = window.location.origin
//  incase user didn't login when user logged out page move to login page
window.addEventListener('popstate', function(event) {
  if (!isLoggedIn()) {
    event.preventDefault();
    window.location.href = `${file_root}/pages/user/user_login.html`;
  }
});

function isLoggedIn() {
  const findLogged = JSON.parse(localStorage.getItem("user_data"));
  if(findLogged){
    return true;
  }
  else{
    return false;
  }
}

// call the isLoggedIn function when the page loads
if (!isLoggedIn()) {
  window.location.href = `${file_root}/pages/user/user_login.html`;
}

$date = new Date();

// Set the number of days to be added
$numberOfDays = 0;

// Add this to the current date
$date.setDate($date.getDate() + $numberOfDays);

// Optional: Pretty print the date
function formatDate(date) {
var d = new Date(date),
month = '' + (d.getMonth() + 1),
day = '' + d.getDate(),
year = d.getFullYear();

if (month.length < 2) month = '0' + month;
if (day.length < 2) day = '0' + day;

return [ day, month, year].join('-');
}
$date = formatDate($date);

// Display the delivery date
document.getElementById("order-date").innerHTML = $date;

// ------------------------ deleivery date-------------


$date = new Date();

// Set the number of days to be added
$numberOfDays = 10;

// Add this to the current date
$date.setDate($date.getDate() + $numberOfDays);

// Optional: Pretty print the date
function formatDate(date) {
var d = new Date(date),
month = '' + (d.getMonth() + 1),
day = '' + d.getDate(),
year = d.getFullYear();

if (month.length < 2) month = '0' + month;
if (day.length < 2) day = '0' + day;

return [day, month, year ].join('-');
}
$date = formatDate($date);
// Display the delivery date
document.getElementById("delivery-date").innerHTML = $date;



document.getElementById("cancel_product").addEventListener("click",
function cancelProduct(e){
e.preventDefault();
alert("Are you canceling your order for this product?");
location.href=`${file_root}/index.html`;

}
)




// // -------which order placed there that data get from URL params------



const productUniqueId = new URLSearchParams(window.location.search).get('order');
const dhanukaDetails = JSON.parse(localStorage.getItem('dhanuka_details'));
const dowAgroScienceDetails = JSON.parse(localStorage.getItem("dow_agro_science_details"));
const uplDetails = JSON.parse(localStorage.getItem('upl_details')) || [];
const tata_rallis_details = JSON.parse(localStorage.getItem("tata_rallis_details")) || [];
const adama_details = JSON.parse(localStorage.getItem("adama_details")) || [];
const bayer_details = JSON.parse(localStorage.getItem("bayer_details")) || [];
const aries_agro_details = JSON.parse(localStorage.getItem("aries_agro_details")) || [];
const barrix_details = JSON.parse(localStorage.getItem("bio_fungicides_details")) || [];
const indofil_details = JSON.parse(localStorage.getItem("indofil_details")) || [];
const rinuja_details = JSON.parse(localStorage.getItem("rinuja_details")) || [];
const bio_insecticides_details = JSON.parse(localStorage.getItem("bio_insecticides_details")) || [];
const bio_fungicides_details = JSON.parse(localStorage.getItem("bio_fungicides_details")) || [];
const bio_nematicides_details = JSON.parse(localStorage.getItem("bio_nematicides_details")) || [];
const bio_vircides_details = JSON.parse(localStorage.getItem("bio_vircides_details")) || [];
const major_nurients_details = JSON.parse(localStorage.getItem("major_nurients_details")) || [];
const secondary_nutrients_details = JSON.parse(localStorage.getItem("secondary_nutrients_details")) || [];
const growth_promoters_details = JSON.parse(localStorage.getItem("growth_promoters_details")) || [];
const growth_retardants_details = JSON.parse(localStorage.getItem("growth_retardants_details")) || [];
const organic_fertilizer_details = JSON.parse(localStorage.getItem("organic_fertilizer_details")) || [];
const bio_fertilizers_details = JSON.parse(localStorage.getItem("bio_fertilizers_details")) || [];
const anti_stressing_agents_details = JSON.parse(localStorage.getItem("anti_stressing_agents_details")) || [];
const micro_nutrients_details = JSON.parse(localStorage.getItem("micro_nutrients_details")) || [];



const allProduct = dhanukaDetails.concat(uplDetails, dowAgroScienceDetails,tata_rallis_details, adama_details,
  bayer_details,aries_agro_details, barrix_details, indofil_details, rinuja_details, bio_insecticides_details, bio_fungicides_details, bio_nematicides_details,
  bio_vircides_details, major_nurients_details, secondary_nutrients_details, growth_promoters_details, growth_retardants_details, 
  organic_fertilizer_details, bio_fertilizers_details, anti_stressing_agents_details,micro_nutrients_details);
  

const loadProduct = allProduct.find(details => details.product_unique_id === productUniqueId)
// console.log(loadProduct)

const productName = loadProduct.product_name;
document.querySelector("#pro_name").textContent = productName;


let productImage;
productImage = document.createElement("img");
productImage.setAttribute("src",loadProduct["source"])
document.querySelector("div.product_image").append(productImage);



const quantityDropdown = document.getElementById('option');
const actualPriceInput = document.getElementById('actual_price');
const discountInput = document.getElementById('discount');
const productPriceInput = document.getElementById('product_pri');
const productWeight = document.getElementById("weight");


// Set initial values based on the loaded product
actualPriceInput.value = loadProduct.actual_price;
discountInput.value = loadProduct.discount;
productWeight.value = loadProduct.product_weight;
productPriceInput.value = loadProduct.actual_price - loadProduct.discount;

// Update values when quantity is changed
// quantityDropdown.addEventListener('change', () => {
//   const quantity = Number(quantityDropdown.value);
//   const actualPrice = loadProduct.actual_price;
//   const discount = loadProduct.discount;

//   const totalPrice = quantity * actualPrice;
//   const totalDiscount = quantity * discount;

//   actualPriceInput.value = totalPrice;
//   discountInput.value = totalDiscount;
//   productPriceInput.value = totalPrice - totalDiscount;
// });

// ------------------ loader---------------
const loader = document.getElementById('loader');

quantityDropdown.addEventListener('change', () => {
const quantity = Number(quantityDropdown.value);
const actualPrice = loadProduct.actual_price;
const discount = loadProduct.discount;

loader.style.display = 'block'; // show the loader

setTimeout(() => { // simulate a delay
const totalPrice = quantity * actualPrice;
const totalDiscount = quantity * discount;

actualPriceInput.value = totalPrice;
discountInput.value = totalDiscount;
productPriceInput.value = totalPrice - totalDiscount;

loader.style.display = 'none'; // hide the loader
}, 2000); // change 3000 to the desired delay in milliseconds
});


// ------------------------------------------------------------


const logedUser = JSON.parse(localStorage.getItem("user_data"));
// Get the form element and listen for the submit event
const orderForm = document.querySelector('form');
orderForm.addEventListener('submit', (event) => {
event.preventDefault();

// Get the input values
const productName = document.querySelector('#pro_name').textContent;
const productImage = document.querySelector('.product_image img').getAttribute('src');
const productPrice = document.querySelector('#product_pri').value;
const quantity = document.querySelector('#option').value;
const discount = document.querySelector('#discount').value;
const actualPrice = document.querySelector('#actual_price').value;
const productWeight = document.querySelector('#weight').value;
const orderDate = new Date().toLocaleDateString();
const deliveryDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();
const deliveryStatus = "false";
// Get the user information
const firstName = "";
const lastName = "";
const email = "";
const phoneNumber = "";

// Get the delivery information
const address = "";
const zipCode = "";
const deliveryPlace = "";
const paymentMethod = "";
const orderStatus = "";
const district = "";
const state = "Tamil Nadu";

// Get current time and format it as a string
const currentTime = new Date();
const timeString = currentTime.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

// Generate a unique ID for the order
const uid = (new Date().getTime()).toString(24);


const orderData = JSON.parse(localStorage.getItem('addtoCartDeliveryProduct')) || [];

// Create a new object with the input values
const newOrder = {
productName,
productImage,
"productCurrentPrice":productPrice,
"proQuantity":quantity,
"ProductDiscount":discount,
"productActualPrice":actualPrice,
productWeight,
orderDate,
deliveryDate,
firstName,
lastName,
email,
phoneNumber,
address,
zipCode,
deliveryPlace,
paymentMethod,
orderUniqueId: uid,
timeString,
deliveryStatus,
userUniqueId : logedUser,
};

// Store the new object in localStorage
orderData.push(newOrder);
localStorage.setItem('addtoCartDeliveryProduct', JSON.stringify(orderData));
// const product_uud = encodeURIComponent(loadProduct["product_unique_id"]);
// const product_id = product_details[i]["product_unique_id"];
//   const product_url = `${root_path}/pages/user/product_details.html?product=${product_name}&product_id=${product_id}`;

const path_roo = window.location.origin

location.href = `${path_roo}/pages/user/deliver_address.html?delivery_address=${encodeURIComponent(loadProduct["product_unique_id"])}&orderUnique=${uid}`;
});


