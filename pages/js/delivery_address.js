
const productUniqueId = new URLSearchParams(window.location.search).get('orderUnique');


const orderDeliveryData = JSON.parse(localStorage.getItem("addtoCartDeliveryProduct")) || [];

const loadProduct = orderDeliveryData.find(detail => detail.orderUniqueId == productUniqueId);

document.getElementById("first_name").value = loadProduct["firstName"];
document.getElementById("last_name").value = loadProduct["lastName"];
document.getElementById("mobile").value = loadProduct["phoneNumber"];
document.getElementById("email").value = loadProduct["email"];
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
document.querySelector('form').reset();
    alert("Your order has been successfully accepted..✅");

    const newWindow = window.open("http://127.0.0.1:5500/pages/user/thank_order.html", "_blank");
newWindow.location.href = "http://127.0.0.1:5500/pages/user/thank_order.html";

  
});


// ---------------
window.addEventListener("beforeunload", function() {
  const orderDeliveryData = JSON.parse(localStorage.getItem("addtoCartDeliveryProduct"));

  if (orderDeliveryData.length > 0 && orderDeliveryData[orderDeliveryData.length - 1]["deliveryStatus"] === "false") {
    orderDeliveryData.pop();
    localStorage.setItem("addtoCartDeliveryProduct", JSON.stringify(orderDeliveryData));
  }
});
