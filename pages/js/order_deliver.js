
    //  <div class="fert12">
    //         <img src="../../assets/images/Adama/ada1.avif" alt="order Status">
    //     </div>

    const productUniqueId = new URLSearchParams(window.location.search).get("orderDetails");
   const orderedProducts  = JSON.parse(localStorage.getItem("addtoCartDeliveryProduct"))
   const getProductDetails = orderedProducts.find(details=>
   details.orderUniqueId == productUniqueId);

   const path_root = window.location.origin
   
    div_fert12 = document.createElement("div");
    div_fert12.setAttribute("class", "fert12");
    document.querySelector(".fert10").appendChild(div_fert12);

    div_fert12_img = document.createElement("img");
    div_fert12_img.setAttribute("src", getProductDetails["productImage"]);
    div_fert12_img.setAttribute("alt", getProductDetails["productName"]);
    div_fert12.append(div_fert12_img);

   // <div class="fert01"></div>
   div_fert101 = document.createElement("div");
   div_fert101.setAttribute("class", "fert01");
   document.querySelector(".fert10").appendChild(div_fert101);

//    <h2>------------</h2>
   fert101_h2 = document.createElement("h2");
   fert101_h2.innerText =  getProductDetails["productName"];
   div_fert101.append(fert101_h2);

   // <div class="fert14">
   // <p>Price: ₹835</p>  </div>
   div_fert14 = document.createElement("div");
   div_fert14.setAttribute("class", "fert14");
   div_fert101.appendChild(div_fert14);
   
   fert14_p = document.createElement("p");
   fert14_p.innerText="Price:" + getProductDetails["productCurrentPrice"];
   div_fert14.append(fert14_p);

   //  <div class="fert5">
   // <h3>Order Qty:</h3><p>2</p>  </div>    
   div_fert5 = document.createElement("div");
   div_fert5.setAttribute("class", "fert5");
   div_fert101.appendChild(div_fert5);

   fert5_h3 = document.createElement("h3");
   fert5_h3.innerText = "Order Quantity: " ;
   div_fert5.append(fert5_h3);

   
   fert5_p = document.createElement("p");
   fert5_p.innerText=getProductDetails["proQuantity"];
   div_fert5.append(fert5_p);

   //<div class="fert16">
   // <h3> Delivery Status:</h3><p>Completed.</p>
   
   div_fert16 = document.createElement("div");
   div_fert16.setAttribute("class", "fert16");
   
   div_fert101.appendChild(div_fert16);

   fert16_h3 = document.createElement("h3");
   fert16_h3.innerText = " Delivery Status:";
   div_fert16.append(fert16_h3);

   
   fert16_p = document.createElement("p");
   fert16_p.innerText=getProductDetails["orderStatus"];
   div_fert16.append(fert16_p);
   
   function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('-');
}
const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const year = currentDate.getFullYear();
const formattedDate = `${day}/${month}/${year}`;




   const deliverydate = getProductDetails["deliveryDate"];
   

  // <div class="fert116">
      //              <h3>Date:</h3><p>15/08/2022</p> </div>>    
      div_fert1116 = document.createElement("div");
   div_fert1116.setAttribute("class", "fert116");
   div_fert101.appendChild(div_fert1116);

   fert1116_h3 = document.createElement("h3");
   fert1116_h3.innerText = "Ordered date: ";
   div_fert1116.append(fert1116_h3);

   
   fert1116_p = document.createElement("p");
   fert1116_p.innerText= getProductDetails["orderDate"];
   div_fert1116.append(fert1116_p);


   div_fert116 = document.createElement("div");
   div_fert116.setAttribute("class", "fert116");
   div_fert101.appendChild(div_fert116);

   fert116_h3 = document.createElement("h3");
   fert116_h3.innerText = "Delivery date: ";
   div_fert116.append(fert116_h3);

   
   fert116_p = document.createElement("p");
   fert116_p.innerText= deliverydate;
   div_fert116.append(fert116_p);

 //  <div class="address1">
        //            <h3>Delivery address:</h3><p>R. VASUDEVAN (PRESIDENT)</p> </div>
        div_fert117 = document.createElement("div");
   div_fert117.setAttribute("class", "address1");
   div_fert101.appendChild(div_fert117);

   fert117_h3 = document.createElement("h3");
   fert117_h3.innerText = "Delivery address: ";
   div_fert117.append(fert117_h3);

   
   fert117_p = document.createElement("textarea");
   fert117_p.innerText= getProductDetails["address"];
   div_fert117.append(fert117_p);


   // <div class="cancel_order"><button type="submit">Cancel order</button></div>


    div_cancel_order = document.createElement("div");
   div_cancel_order.setAttribute("class", "cancel_order");
   div_fert101.appendChild(div_cancel_order);

   back_button = document.createElement("button");
   back_button.setAttribute("id", "back");
   back_button.setAttribute("type", "button");
   back_button.innerText="back";
   div_cancel_order.append(back_button);

   cancel_button = document.createElement("button");
   cancel_button.setAttribute("id", "cancel");
   cancel_button.setAttribute("type", "submit");
   cancel_button.innerText="Cancel order";
   div_cancel_order.append(cancel_button);



   document.getElementById("back").addEventListener("click", function backHome() {
    const path_pros = `${path_root}/pages/user/user_order.html`
    location.href = path_pros;
});

document.getElementById("cancel").addEventListener("click", function cancelOrder() {
    if (formattedDate > deliverydate) {
        const confirmed = confirm("Are you sure you want to cancel this order?");
        if (confirmed) {
            const orderSts = "Cancelled";
            getProductDetails["orderStatus"] = orderSts;
            localStorage.setItem("addtoCartDeliveryProduct", JSON.stringify(orderedProducts));
            const path_pros = `${path_root}/pages/user/user_order.html`
            console.log(path_pros);
            location.href = path_pros;
        }
    }
});




if (getProductDetails["orderStatus"] == "Delivered"){
    cancel_button.style.display = "none";
};

// Incase user want to cancell the order that status have to update for Cancelled
if(getProductDetails["orderStatus"] == "Cancelled"){
    cancel_button.style.display = "none";
}


