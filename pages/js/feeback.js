// Store the selected rating and feedback in an array of objects in local storage
const pageMove = window.location.origin;
const orderId = new URLSearchParams(window.location.search).get("orderDetails");
const OrderedProductUniqueId = new URLSearchParams(window.location.search).get(
  "productUniqueId"
);
// console.log(CatogeryProductName)
const feedbackForm = document.getElementById("feedback-form");
const postButton = feedbackForm.querySelector('button[type="submit"]');
const feedbackText = document.getElementById("feedback-text");
const feedbackArray = JSON.parse(localStorage.getItem("reviews")) || [];

// find user name
const deliveryOrders =JSON.parse(localStorage.getItem("addtoCartDeliveryProduct")) || [];
const feeduserName = deliveryOrders.find(
  (data) => data.orderUniqueId === orderId
);


// find the name of order person
const getAddresses =JSON.parse(localStorage.getItem("addresses")) || [];
// console.log(getAddresses)
const findcustomerName = getAddresses.find(data => data.addressId === feeduserName.addressUniqueID);
// console.log(findcustomerName);

//  find the whos's order this product
const customerName = findcustomerName.name;


const findFeedbackArray = feedbackArray.find(
  (details) =>
    details.orderId === orderId &&
    details.OrderedProductUniqueId === OrderedProductUniqueId
);
// console.log(findFeedbackArray)
postButton.addEventListener("click", (event) => {
  const rating = document.querySelector('input[name="rate"]:checked');
  const feedback = feedbackText.value.trim();
  if (rating === null) {
    alert("Please select a rating before posting feedback.");
    event.preventDefault();
  } else if (feedback === "") {
    alert("Please enter feedback before posting.");
    event.preventDefault();
  } else {
    const newFeedback = {
      rating: rating.value,
      feedback,
      orderId,
      OrderedProductUniqueId,
      customerName,
    };
    feedbackArray.push(newFeedback);
    window.location.href = `${pageMove}/pages/user/order_deliver.html?orderDetails=${orderId}&productUniqueId=${OrderedProductUniqueId}`;
    console.log(window.location.href);
    alert("Thank you for your feedback and review");
    localStorage.setItem("reviews", JSON.stringify(feedbackArray));
  }
});

function isLoggedIn() {
  const findLogged = JSON.parse(localStorage.getItem("user_data"));
  if (findLogged) {
    return true;
  }

  return false;
}

if (findFeedbackArray) {
  //  incase user didn't login when user logged out page move to login page
  window.addEventListener("popstate", (event) => {
    if (isLoggedIn()) {
      event.preventDefault();
      window.location.href = `${pageMove}/pages/user/order_deliver.html?orderDetails=${orderId}&productUniqueId=${OrderedProductUniqueId}`;
    }
  });

  // call the isLoggedIn function when the page loads
  if (isLoggedIn()) {
    window.location.href = `${pageMove}/pages/user/order_deliver.html?orderDetails=${orderId}&productUniqueId=${OrderedProductUniqueId}`;
  }
}

// if user click the star feedback class is added to conainer
const stars = document.querySelectorAll(".star-widget input");
stars.forEach((star) => {
  star.addEventListener("change", function () {
    const parent = this.parentNode.parentNode;
    parent.classList.add("feedback");
  });
});

// if user click the cancel button pase is move to orders page
document.getElementById("exitFeedback").addEventListener("click", () => {
  window.location.href = `${pageMove}/pages/user/order_deliver.html?orderDetails=${orderId}&productUniqueId=${OrderedProductUniqueId}`;
});
