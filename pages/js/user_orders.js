const logedUserDetails = JSON.parse(localStorage.getItem("user_data"));
const orderDetails =
  JSON.parse(localStorage.getItem("addtoCartDeliveryProduct")) || [];

const allProductDatas = JSON.parse(localStorage.getItem("products")) || [];
  

const pro_path = window.location.origin;

const deliverStatus = "true";
const getOrderDetails = orderDetails.filter(
  (details) =>
    details.deliveryStatus === deliverStatus &&
    details.userUniqueId === logedUserDetails
);

for (let i = 0; i < getOrderDetails.length; i++) {
  const orderDetail = getOrderDetails[i];
  const matchingProducts = allProductDatas.filter(
    (product) => product.product_unique_id === orderDetail.productUniqueId
  );
  matchingProducts.forEach((product) => {
    const tr = document.createElement("tr");
    tr.setAttribute("class", "td");
    document.querySelector(".order_table").append(tr);

    const td_1 = document.createElement("td");
    tr.append(td_1);
    const td_1_img = document.createElement("img");
    td_1_img.setAttribute("src", product.source);
    td_1_img.setAttribute("alt", "");
    td_1.append(td_1_img);

    const td_2 = document.createElement("td");
    td_2.innerText = getOrderDetails[i].deliveryDate;
    tr.append(td_2);

    const td_3 = document.createElement("td");
    td_3.innerText = getOrderDetails[i].orderStatus;
    tr.append(td_3);

    const td_4 = document.createElement("td");
    td_4.innerText = `₹${getOrderDetails[i].productCurrentPrice}`;
    tr.append(td_4);

    const td_5 = document.createElement("td");
    td_5.setAttribute("class", "eye");
    tr.append(td_5);

    const product_id = getOrderDetails[i].orderUniqueId;
    const product_Unique = product.product_unique_id;
    const product_url = `${pro_path}/pages/user/order_deliver.html?orderDetails=${product_id}&productUniqueId=${product_Unique}`;
    // <div class="insecticide"> </div>
    const td_5_a = document.createElement("a");
    td_5_a.setAttribute("href", product_url);
    td_5_a.innerText = "View";
    td_5.append(td_5_a);

    const td_5_a_i = document.createElement("i");
    td_5_a_i.setAttribute("class", "fa fa-eye");
    td_5_a_i.setAttribute("style", "font-size:20px");
    td_5_a.append(td_5_a_i);


    
    if (getOrderDetails[i].orderStatus !== "Cancelled") {
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, "0");
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const year = currentDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;

      // console.log("formattedDate:", formattedDate);

      const deliverydate = getOrderDetails[i].deliveryDate;
      const [inputDay, inputMonth, inputYear] = deliverydate.split("/");
      const inputDateObj = new Date(`${inputMonth}/${inputDay}/${inputYear}`);
      inputDateObj.setDate(inputDateObj.getDate() - 3);
      const threeDaysBeforeDate = `${String(inputDateObj.getDate()).padStart(2,"0")}/${String(inputDateObj.getMonth() + 1).padStart(2,"0")}/${inputDateObj.getFullYear()}`;

      // console.log("deliverydate:", deliverydate);
      // console.log("threeDaysBeforeDate:", threeDaysBeforeDate);

      if (threeDaysBeforeDate === formattedDate) {
        const status = "Shipping";
        getOrderDetails[i].orderStatus = status;
        localStorage.setItem(
          "addtoCartDeliveryProduct",
          JSON.stringify(getOrderDetails)
        );
      }

      if (deliverydate === formattedDate) {
        const ord_status = "Delivered";
        getOrderDetails[i].orderStatus = ord_status;
        localStorage.setItem(
          "addtoCartDeliveryProduct",
          JSON.stringify(getOrderDetails)
        );
      }
    }
  });
}

const orderMessage = document.getElementById("empty_orderr");
const orderTable = document.getElementById("order_tablee");

if (getOrderDetails.length === 0) {
  orderMessage.style.display = "block";
  orderTable.style.display = "none";
} else {
  orderMessage.style.display = "none";
  orderTable.style.display = "block";
}

document.getElementById("start_shopping").addEventListener("click", () => {
  window.location.href = `${pro_path}/index.html`;
});
