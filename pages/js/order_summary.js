
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
location.href="../user/user_interface.html";

}
)




// // -------which order placed there that data get from URL params------



const productUniqueId = new URLSearchParams(window.location.search).get('order');
const dhanukaDetails = JSON.parse(localStorage.getItem('dhanuka_details'));
const dowAgroScienceDetails = JSON.parse(localStorage.getItem("dow_agro_science_details"));

const loadProduct = dhanukaDetails.find(detail => detail.product_unique_id === productUniqueId) || dowAgroScienceDetails.find(detail => detail.product_unique_id === productUniqueId)

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

location.href = `http://127.0.0.1:5500/pages/user/deliver_address.html?delivery_address=${encodeURIComponent(loadProduct["product_unique_id"])}&orderUnique=${uid}`;
});


