

const logedUser = JSON.parse(localStorage.getItem("user_data"));

// -------wishlist product get here -------
const wishListProduct = JSON.parse(localStorage.getItem("wishlisstItem"));
const dhanukaDetails = JSON.parse(localStorage.getItem('dhanuka_details'));
const adamaDetails = JSON.parse(localStorage.getItem('adama_details'));
const dowAgroScienceDetails = JSON.parse(localStorage.getItem("dow_agro_science_details"));

const allProducts = dhanukaDetails.concat(adamaDetails, dowAgroScienceDetails);

const findLogedUserWishlist = wishListProduct.filter(details => details.userUniqueId == logedUser)

const wishProducts = allProducts.filter(product => findLogedUserWishlist.some(uuid => uuid.product_id === product.product_unique_id));
const path = window.location.origin

for(i=0; i<wishProducts.length; i++){

     div_fertilizer = document.createElement("div");
    div_fertilizer.setAttribute("class", "fertilizer");
    document.querySelector("div.wishlist").append(div_fertilizer);
        // console.log(div_fetilizer);

    //  <div  class="fert1">
    div_fert1 = document.createElement("div");
    div_fert1.setAttribute("class", "fert1");
    div_fertilizer.appendChild(div_fert1);

  
    fert_a = document.createElement("a");
    fert_a.setAttribute("href", "http://127.0.0.1:5500/pages/user/product_details.html?product=" + encodeURIComponent(wishProducts[i]["product_name"]) + "&product_id=" + wishProducts[i]["product_unique_id"]);
    div_fert1.append(fert_a);

    image = document.createElement("img");
    image.setAttribute("src", wishProducts[i]["source"]);
    fert_a.append(image);

     //  <div  class="fert2">
        div_fert2 = document.createElement("div");
    div_fert2.setAttribute("class", "fert2");
    div_fertilizer.appendChild(div_fert2);
    
    div_product_details = document.createElement("div");
    div_product_details.setAttribute("class", "product_details");
    div_fert2.append(div_product_details);
    

    fert2_a = document.createElement("a");
    fert2_a.setAttribute("href", "");
    div_product_details.append(fert2_a);

    fert2_p = document.createElement("p");
    fert2_p.innerText = wishProducts[i]["product_name"];
    fert2_a.append(fert2_p);

    // <div class="pro_price">
    //                     <h2>---</h2>
    //                     <h3>....</h3>
    //                 </div>
    div_pro_price = document.createElement("div");
    div_pro_price.setAttribute("class","pro_price");
    div_product_details.append(div_pro_price);

    div_pro_price_h2 = document.createElement("h2");
   let discount = wishProducts[i]["discount"]
    let actual_price = wishProducts[i]["actual_price"];
    curre_price = actual_price-discount
    div_pro_price_h2.innerText = "₹" + curre_price;
    div_pro_price.append(div_pro_price_h2);

    div_pro_price_h3 = document.createElement("h3");
    div_pro_price_h3.innerText = "₹" + actual_price;
    div_pro_price.append(div_pro_price_h3);

    // <div class="you_save">
    div_pro_save = document.createElement("div");
    div_pro_save.setAttribute("class","you_save");
    div_product_details.append(div_pro_save);

    div_discount = document.createElement("h2");
    div_discount.innerText= "You Save:" +" " + "₹" +discount;
    div_pro_save.appendChild(div_discount);


    fert2_button = document.createElement("button");
    fert2_button.setAttribute("class","remov");
    fert2_button.setAttribute("id","remove_wishlist");
    fert2_button.setAttribute("data-product-id",wishProducts[i]["product_unique_id"] );
    fert2_button.innerText = "Remove";
    div_fert2.append(fert2_button)


     }

     document.querySelector("#remove_wishlist").addEventListener("click", 
     function removeWishList(event){
  const productId = this.dataset.productId;
  this.setAttribute("like", "false");
  const updatedWishlist = wishListProduct.filter(product => product.product_id !== productId);
  localStorage.setItem("wishlisstItem", JSON.stringify(updatedWishlist));
  this.style.color = "rgb(198, 198, 198)";
  location.reload();
});

let emptyWishList = document.getElementById("empty-wishlist");
let shownProducts = document.querySelector(".wishlist");


if(wishListProduct.length == 0){
    emptyWishList.style.display="block";
    shownProducts.style.display="none";
    
}
else{
    emptyWishList.style.display="none";
    shownProducts.style.display="block";
}