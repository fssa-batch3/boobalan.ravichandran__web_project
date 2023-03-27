

//  <div class="cart101"> <h2>Price Details</h2> </div>

let div_cart11 = document.createElement("div");
div_cart11.setAttribute("class", "cart101");
document.querySelector(".cart11").append(div_cart11);

let div_cart101_h2 = document.createElement("h2");
div_cart101_h2.innerText ="Price Details";
div_cart11.append(div_cart101_h2);

// <div class="cart111"> <h2>Price</h2> <p>₹708</p></div>

let div_cart111 = document.createElement("div");
div_cart111.setAttribute("class", "cart111");
document.querySelector(".cart11").append(div_cart111);

let div_cart111_h2 = document.createElement("h2");
div_cart111_h2.innerText = "Price";
div_cart111.append(div_cart111_h2);

let div_cart111_p = document.createElement("p");
div_cart111_p.setAttribute("id","total-price");
// div_cart111_p.innerText =`Total Price: ₹${totalPrice}`
div_cart111.append(div_cart111_p)

// <div class="cart112"> <h2>Discount</h2> <p>-₹417</p > </div>

let div_cart112 = document.createElement("div");
div_cart112.setAttribute("class", "cart112");
document.querySelector(".cart11").append(div_cart112);

let div_cart112_h2 = document.createElement("h2");
div_cart112_h2.innerText ="Discount";
div_cart112.append(div_cart112_h2); 

let div_cart112_p = document.createElement("p");
div_cart112_p.setAttribute("id","total-discount");
// div_cart112_p.innerText =`Total Discount: ₹${totalDiscount}`;
div_cart112.append(div_cart112_p);

// <div class="cart113"> <h2>Delivery Charges</h2> <p>FREE</p> </div>

let div_cart113 = document.createElement("div");
div_cart113.setAttribute("class", "cart113");
document.querySelector(".cart11").append(div_cart113);

let div_cart113_h2 = document.createElement("h2");
div_cart113_h2.innerText ="Delivery Charges"
div_cart113.append(div_cart113_h2); 

let div_cart113_p = document.createElement("p");
div_cart113_p.innerText ="FREE";
div_cart113.append(div_cart113_p);

//   <div class="cart115> <h1>Total Amount</h1> <p>₹758</p> </div>

let div_cart115 = document.createElement("div");
div_cart115.setAttribute("class", "cart115");
document.querySelector(".cart11").append(div_cart115);

let div_cart115_h2 = document.createElement("h1");
div_cart115_h2.innerText ="Total Amount"
div_cart115.append(div_cart115_h2); 

let div_cart115_p = document.createElement("p");
div_cart115_p.setAttribute("id","final-price")
div_cart115.append(div_cart115_p);
         
//<div class="cart114"> <h3>You will save ₹417 on this order </h3> </div>

let div_cart114 = document.createElement("div");
div_cart114.setAttribute("class", "cart114");
document.querySelector(".cart11").append(div_cart114);

let div_cart114_h2 = document.createElement("h3");
div_cart114_h2.innerText ="You will save" +"on this order ";
div_cart114.append(div_cart114_h2); 


const logedUser = JSON.parse(localStorage.getItem("user_data"));
const cartIds = JSON.parse(localStorage.getItem("addToCartItem"));
const dhanukaDetails = JSON.parse(localStorage.getItem('dhanuka_details'));
const uplDetails = JSON.parse(localStorage.getItem('adama_details'));
const dowAgroScienceDetails = JSON.parse(localStorage.getItem("dow_agro_science_details"));

 // cart21_a.setAttribute("href", "http://127.0.0.1:5500/pages/user/product_details.html?product_id=" + loadProduct[i]["product_unique_id"]);
  // document.querySelector("")



const allProducts = dhanukaDetails.concat(uplDetails, dowAgroScienceDetails);

const findLogedUseraddtoCart = cartIds.filter(details => details.userUniqueId == logedUser)

const loadProduct = allProducts.filter(product => findLogedUseraddtoCart.some(uuid => uuid.cart_id === product.product_unique_id ));

let totalPrice = 0;
let totalDiscount = 0;

// Calculate initial total price and discount
for (let i = 0; i < loadProduct.length; i++) {
  const product = loadProduct[i];
  const quantity = 1; // default quantity is 1
  const price = (product["actual_price"] - product["discount"]) * quantity;
  const discount = product["discount"] * quantity;
  totalPrice += price;
  totalDiscount += discount;
}

// Display initial total price and discount
div_cart111_p.innerText = "₹" + `${totalPrice}`;
div_cart112_p.innerText = "₹" + `${totalDiscount}`;
div_cart115_p.innerText = "₹" + `${totalPrice - totalDiscount}`
div_cart114_h2.innerText = `You will save ₹${totalDiscount} on this order `


// Function to remove a product from the cart
function removeProductFromCart(cartId) {
  // Show a confirmation dialog box
  const confirmed = confirm("Are you sure you want to remove this product from your cart?");

  if (confirmed) {
    // Get the current cart from local storage
    const cart = JSON.parse(localStorage.getItem("addToCartItem"));

    // Find the index of the product to remove
    const index = cart.findIndex(item => item.cartId === cartId);

    // Remove the product from the cart
    cart.splice(index, 1);

    // Update the cart in local storage
    localStorage.setItem("addToCartItem", JSON.stringify(cart));

    // Show an alert message to confirm that the product has been removed
   

    // Refresh the page to update the cart display
    location.reload();
  }
}



function addToCartItem(product) {
  const productInCart = `
    <div class="cart_details">
      <div class="cart2">
        <div class="cart21">
          <a href="http://127.0.0.1:5500/pages/user/product_details.html?product=${encodeURIComponent(product["product_name"])}&product_id=${product["product_unique_id"]}"><img src="${product["source"]}" alt="DHANUKA M45 FUNGICIDE"></a>
        </div>
        <div class="cart22">
          <a href="http://127.0.0.1:5500/pages/user/product_details.html?product=${encodeURIComponent(product["product_name"])}&product_id=${product["product_unique_id"]}">
            <h1 id="product_name">${product["product_name"]}</h1>
            <div class="price">
              <h2 id="product_pri">₹${product["actual_price"] - product["discount"]}</h2>
              <del id="actual_price">₹${product["actual_price"]}</del>
            </div>
            <h3 id="discount">You Save: ${product["discount"]}</h3>
          </a>
        </div>
      </div>
      <div class="btnn">
        <div class="fert5">
          <h3>Order Qty</h3>
          <select id="option">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
        
        <div class="remove-button">
          <a><button onclick="removeProductFromCart('${product.cartId}')">Remove</button></a>
        </div>
      </div>
    </div>
  `;
  const cart21_a = document.createElement("a");
 
  const productEl = document.createElement("div");
  productEl.innerHTML = productInCart;

  const select = productEl.querySelector("#option");

// });
select.addEventListener("change", () => {
  const oldQuantity = product.quantity || 1; // use 1 as default if quantity is not defined
  const newQuantity = select.value;
  const priceEl = productEl.querySelector("#product_pri");
  const actualPriceEl = productEl.querySelector("#actual_price");
  const discountEl = productEl.querySelector("#discount");
  const oldPrice = (product["actual_price"] - product["discount"]) * oldQuantity;
  const oldDiscount = product["discount"] * oldQuantity;
  const newPrice = (product["actual_price"] - product["discount"]) * newQuantity;
  const newDiscount = product["discount"] * newQuantity;
  priceEl.textContent = `₹${newPrice}`;
  actualPriceEl.textContent = `₹${product["actual_price"] * newQuantity}`;
  discountEl.textContent = `You Save: ₹${newDiscount}`;
  
  // update total price and discount
  totalPrice = totalPrice - oldPrice + newPrice;
  totalDiscount = totalDiscount - oldDiscount + newDiscount;

  div_cart111_p.innerText = "₹" + `${totalPrice}`;
  div_cart112_p.innerText = "₹" + `${totalDiscount}`;
  div_cart115_p.innerText = "₹" + `${totalPrice - totalDiscount}`
  div_cart114_h2.innerText = `You will save ₹${totalDiscount} on this order `;
  
  // update product quantity in the cart
  product.quantity = newQuantity;
});


  return productEl;
}


  const cartContainer = document.querySelector(".cart1");


  for (let i = 0; i < loadProduct.length; i++) {
    const product = loadProduct[i];
    const productInCart = addToCartItem(product);
    cartContainer.append(productInCart);
    const quantity = productInCart.querySelector("#option").value;
  const price = (product["actual_price"] - product["discount"]) * quantity;
 
  const discount = product["discount"] * quantity;
 
  }

  


  // ------------cart empty message photo

  let cartEmpty = document.getElementById("empty-cart-image");
let cartremove = document.getElementById("cartRemove");
if(loadProduct.length == 0 ){
  cartEmpty.style.display = "block";
  cartremove.style.display="none";
}
else{
  cartEmpty.style.display = "none";
  cartremove.style.display="flex";
}


// ----------------------place porder button creating--------------

let div_btnn = document.createElement("div");
div_btnn.setAttribute("class", "bttn");
cartContainer.append(div_btnn);

let div_btnn_a = document.createElement("a");
div_btnn.append(div_btnn_a);

let div_btnn_button = document.createElement("button");
div_btnn_button.setAttribute("id","place_order");
div_btnn_button.setAttribute("type","submit");
div_btnn_button.innerText ="Place order";
div_btnn_a.append(div_btnn_button);



// ---- store all products details in local storage
document.getElementById("place_order").addEventListener("click", function placeOrder() {
  const addtoCartDeliveryProduct = JSON.parse(localStorage.getItem('addtoCartDeliveryProduct')) || [];
  const deliveryStatus = "false";
  
  const cartItems = document.querySelectorAll(".cart_details");
  
  const existingProduct = addtoCartDeliveryProduct.find(product => product.deliveryStatus == deliveryStatus);

  if (!existingProduct) {
    for (let i = 0; i < cartItems.length; i++) {
      const cartItem = cartItems[i];
      const productImage = cartItem.querySelector(".cart21 img").getAttribute("src");
      const productName = cartItem.querySelector("#product_name").textContent;
      const productCurrentPrice = cartItem.querySelector("#product_pri").textContent.replace(/₹/g, '');
      const productActualPrice = cartItem.querySelector("#actual_price").textContent.replace(/₹/g, '');
      const ProductDiscount = cartItem.querySelector("#discount").textContent.replace(/₹/g, '');
      const proQuantity = cartItem.querySelector('#option').value;
      const productTotalPrice = document.querySelector("#total-price").textContent.replace(/₹/g, '');
      const productTotalDiscount = document.querySelector('#total-discount').textContent.replace(/₹/g, '');
      const productFinalPrice = document.querySelector('#final-price').textContent.replace(/₹/g, '');
      const orderDate = new Date().toLocaleDateString();
      const deliveryDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();
      // const deliveryStatus = "false";
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

      // Generate a unique ID for the order
      const uid = (new Date().getTime()).toString(24);
      const currentTime = new Date();
      const timeString = currentTime.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

      const addProduct = {
        productImage,
        productName,
        productCurrentPrice,
        productActualPrice,
        ProductDiscount,
        proQuantity,
        productTotalPrice,
        productTotalDiscount,
        productFinalPrice,
        deliveryStatus,
        orderUniqueId: uid,
        orderDate,
        deliveryDate,
        timeString,
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        zipCode,
        deliveryPlace,
        paymentMethod,
        orderStatus,
        userUniqueId : logedUser,
      };

      addtoCartDeliveryProduct.push(addProduct);
    }

    localStorage.setItem('addtoCartDeliveryProduct', JSON.stringify(addtoCartDeliveryProduct));
    alert("order details stored successfully");
    location.href = "http://127.0.0.1:5500/pages/user/delivery_addtocart.html?delivery-status=" + deliveryStatus;
  }
});

