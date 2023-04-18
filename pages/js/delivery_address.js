
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


const productUniqueId = new URLSearchParams(window.location.search).get('orderUnique');


const orderDeliveryData = JSON.parse(localStorage.getItem("addtoCartDeliveryProduct")) || [];

const loadProduct = orderDeliveryData.find(detail => detail.orderUniqueId == productUniqueId);


// logged user detail sget from local storage-----------------

const user_list = JSON.parse(localStorage.getItem("user_list")) || [];
const user_data = JSON.parse(localStorage.getItem("user_data")) || [];

const findData = user_list.find(details => details.mobile == user_data); 
 document.getElementById("mobile").value = findData["mobile"];
document.getElementById("email").value =  findData["email"];

// ----------------------------------------------------------------


document.getElementById("first_name").value = loadProduct["firstName"];
document.getElementById("last_name").value = loadProduct["lastName"];

document.getElementById("address").value = loadProduct["address"];
document.getElementById("zip").value = loadProduct["zipCode"];

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

    loadProduct["firstName"] = deliveryFirstName;
    loadProduct["lastName"] = deliveryLastName;
    loadProduct["phoneNumber"] = deliveryMobile;
    loadProduct["email"] = deliveryEmail;
    loadProduct["deliveryPlace"] = deliveryPlace;
    loadProduct["address"] = deliveryAddress;
    loadProduct["zipCode"] = deliveryZipcode;
    loadProduct["deliveryStatus"] = deliveryStatus;
    loadProduct["orderStatus"] = orderStatus; 


   
    localStorage.setItem("addtoCartDeliveryProduct", JSON.stringify(orderDeliveryData));

    alert("Your order has been successfully accepted..✅");

    const local_path = window.location.origin
  const pro_url = `${local_path}/pages/user/thank_order.html`

//     const newWindow = window.open(pro_url, "_blank");
// newWindow.location.href = pro_url;
window.location.href = pro_url
document.querySelector('form').reset();
  
});


// ---------------
window.addEventListener("beforeunload", function() {
  const orderDeliveryData = JSON.parse(localStorage.getItem("addtoCartDeliveryProduct"));

  if (orderDeliveryData.length > 0 && orderDeliveryData[orderDeliveryData.length - 1]["deliveryStatus"] === "false") {
    orderDeliveryData.pop();
    localStorage.setItem("addtoCartDeliveryProduct", JSON.stringify(orderDeliveryData));
  }
});


