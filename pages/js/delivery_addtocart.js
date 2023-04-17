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


const ProductStatus = new URLSearchParams(window.location.search).get('delivery-status');

const orderDeliveryData = JSON.parse(localStorage.getItem("addtoCartDeliveryProduct")) || [];


const loadProduct = orderDeliveryData.filter(detail => detail.deliveryStatus == ProductStatus);


// logged user detail sget from local storage-----------------

const user_list = JSON.parse(localStorage.getItem("user_list")) || [];
const user_data = JSON.parse(localStorage.getItem("user_data")) || [];

const findData = user_list.find(details => details.mobile == user_data); 
 document.getElementById("mobile").value = findData["mobile"];
document.getElementById("email").value =  findData["email"];

// ----------------------------------------------------------------




const homeImg = document.getElementById("home");
const officeImg = document.getElementById("office");

let deliveryPlace = loadProduct["deliveryPlace"];
if (deliveryPlace === "home") {
  homeImg.classList.add("selected");
} else if (deliveryPlace === "office") {
  officeImg.classList.add("selected");
}

homeImg.addEventListener("click", function() {
  if (!homeImg.classList.contains("selected")) {
    homeImg.classList.add("selected");
    officeImg.classList.remove("selected");
    deliveryPlace = "home";
  }
});

officeImg.addEventListener("click", function() {
  if (!officeImg.classList.contains("selected")) {
    officeImg.classList.add("selected");
    homeImg.classList.remove("selected");
    deliveryPlace = "office";
  }
});


document.getElementById("save_delivery").addEventListener("click", function addProductDate(e) {
  e.preventDefault();
  const deliveryFirstName = document.getElementById("first_name").value;
  const deliveryLastName = document.getElementById("last_name").value;
  const deliveryMobile = document.getElementById("mobile").value;
  const deliveryEmail = document.getElementById("email").value;
  const deliveryAddress = document.getElementById("address").value;
  const deliveryZipcode = document.getElementById("zip").value;
  const deliveryStatus = "true"  ;
  const orderStatus = "Processing";



  // check if required fields are empty
  if ( deliveryFirstName === "" || deliveryLastName === "" || deliveryMobile === "" || deliveryEmail === "" || deliveryAddress === "" || deliveryZipcode === "") {
    alert("Please fill in all the required fields.");
    return false;
  }

  // validate email format using regular expression
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(deliveryEmail)) {
    alert("Please enter a valid email address.");
    return false;
  }

  
  const zipRegex = /^6\d{5}$/;
  if (!zipRegex.test(deliveryZipcode)) {
    const zipError = document.getElementById("zip-error");
    zipError.textContent = "Invalid zip code format (should start with 6 and have a length of 6)";
    return;
  }

  // Update the delivery status to false

  const loc_path = window.location.origin
  // Loop through the loadProduct array and update each item
  for(let i = 0; i < loadProduct.length; i++) {
    loadProduct[i]["firstName"] = deliveryFirstName;
    loadProduct[i]["lastName"] = deliveryLastName;
    loadProduct[i]["phoneNumber"] = deliveryMobile;
    loadProduct[i]["email"] = deliveryEmail;
    loadProduct[i]["deliveryPlace"] = deliveryPlace;
    loadProduct[i]["address"] = deliveryAddress;
    loadProduct[i]["zipCode"] = deliveryZipcode;
    loadProduct[i]["deliveryStatus"] = deliveryStatus;
   loadProduct[i]["orderStatus"]= orderStatus;
  }

  // Update the orderDeliveryData array with the updated loadProduct array
  localStorage.setItem("addtoCartDeliveryProduct", JSON.stringify(orderDeliveryData));

  alert("Your order has been successfully accepted..✅");
  
  document.querySelector('form').reset();

// removing the data associated with the "addToCartItem" key

const logedUser = JSON.parse(localStorage.getItem("user_data"));
let addToCartItem = JSON.parse(localStorage.getItem("addToCartItem")) || [];

// Filter out the items that match the logedUser details
addToCartItem = addToCartItem.filter(item => item.userUniqueId !== logedUser);

// Update the addToCartItem array in local storage with the new array
localStorage.setItem("addToCartItem", JSON.stringify(addToCartItem));

const pro_url = `${loc_path}/pages/user/thank_order.html`

window.location.href = pro_url;


});

window.addEventListener("beforeunload", function() {
  const orderDeliveryData = JSON.parse(localStorage.getItem("addtoCartDeliveryProduct"));

  for (let i = orderDeliveryData.length - 1; i >= 0; i--) {
    if (orderDeliveryData[i]["deliveryStatus"] === "false") {
      orderDeliveryData.splice(i, 1);
    }
  }

  localStorage.setItem("addtoCartDeliveryProduct", JSON.stringify(orderDeliveryData));
});

