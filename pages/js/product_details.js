

// const productList= JSON.parse(localStorage.getItem("bio_vircides_details"))


const productId = new URLSearchParams(window.location.search).get('product_id');
// const productDetails = JSON.parse(localStorage.getItem('adama_details'));
const dhanukaDetails = JSON.parse(localStorage.getItem('dhanuka_details'));
const dowAgroScienceDetails = JSON.parse(localStorage.getItem("dow_agro_science_details"));
const adamaDetails = JSON.parse(localStorage.getItem("adama_details"))



  const loadProduct = 
//   productDetails.find(product => product.product_unique_id === productId) ||
   dhanukaDetails.find(detail => detail.product_unique_id === productId) ||
   dowAgroScienceDetails.find(detail => detail.product_unique_id === productId) ||
   adamaDetails.find(detail => detail.product_unique_id === productId)




   let  div_fetilizer;
   let  div_fert1;
   let  product_img ;
   let  product_a;
   let  product_i;
   let  div_fert2;
   let  div_fert2_h2;
   let  div_fert3;
   let  div_fert3_h3;
   let  div_fert3_p;
   let  div_fert4;
   let  div_fert4_p;
   let  div_fert4_del;
   let  div_fert55;
   let  div_fert55_p;
   let  div_fert5;
   let  div_fert5_h3;
   let  select;
   let  option1;
   let  div_fert5_1;
   let  div_fert5_h3_1;
   let  div_rem;
   let  rem_a ;
   let  rem_button ;
   let  rem_i;
   let  div_div;
   let  div_a;
   let  rem2_button;
   let  div_i;
   let  div_description;
   let  description_h1;
   let  description_ul;
   let  description_li1;
   let  div_benifits;
   let  benifits_h2;
   let  benifits_ul;
   let  benifits_li1;
  
   let  div_method;
   let  method_h2;
   let  method_ul;
   let  method_li1;
 



// <div class="fertilizer">...</div>
     div_fetilizer = document.createElement("div");
        div_fetilizer.setAttribute("class", "fertilizer");
        document.querySelector("div.total").prepend(div_fetilizer);
        // console.log(div_fetilizer);

//  <div  class="fert1">..</div>
      div_fert1 = document.createElement("div");
      div_fert1.setAttribute("class", " fert1");
      div_fetilizer.append(div_fert1);

//  <img src="../../assets/images/Adama/ada1.avif" alt="AGIL HERBICIDE order page" >
    product_img = document.createElement("img");
    product_img.setAttribute("src", loadProduct["source"]);
    product_img.setAttribute("alt", loadProduct["product_name"]);
    product_img.setAttribute("id","product_image");
    div_fert1.append(product_img);
    
//    <a href="./wishlist.html"><i id="wish1" class="fa fa-heart" style="font-size:36px"></i></a>
    product_a = document.createElement("a");
    // product_a.setAttribute("href", "");
    div_fert1.append(product_a);
  

    product_i = document.createElement("i");
    product_i.setAttribute("id", "wish1");
    product_i.setAttribute("class", "fa fa-heart");
    product_i.setAttribute("style","font-size:36px" );
    product_a.append(product_i);

// <div class="fert2"> <h2>....</h2>  </div>
   div_fert2 = document.createElement("div");
   div_fert2.setAttribute("class", "fert2");
   div_fetilizer.append(div_fert2);

   div_fert2_h2 = document.createElement("h2");
   div_fert2_h2.innerText = loadProduct["product_name"];
   div_fert2_h2.setAttribute("id","pro_name");
   div_fert2.append(div_fert2_h2);

//    <div class="fert3">....</div>
    div_fert3 = document.createElement("div");
    div_fert3.setAttribute("class", "fert3");
    div_fert2.append(div_fert3);
   
// <h3>...</h3>
   div_fert3_h3 = document.createElement("h3");
   div_fert3_h3.innerText= "Company / Manufacture:";
   div_fert3.append(div_fert3_h3);

// <p>...</p>
   div_fert3_p = document.createElement("p");
   div_fert3_p.innerText = loadProduct["manufacture_company"];
   div_fert3.append(div_fert3_p);

//  <div class="fert4">..</div>
    div_fert4 = document.createElement("div");
    div_fert4.setAttribute("class", "fert4");
    div_fert2.append(div_fert4);

// <p>...</p>
   div_fert4_p = document.createElement("p");
   const actual_price = loadProduct["actual_price"];
   const discount = loadProduct["discount"];
   const current_price = actual_price - discount;
   div_fert4_p.innerText =  "₹" + current_price;
   div_fert4.append(div_fert4_p);

// <del>...</del>
    div_fert4_del = document.createElement("del");
    div_fert4_del.innerText = loadProduct["actual_price"] ;
    div_fert4_del.setAttribute("id","actual_price");
   div_fert4.append(div_fert4_del);

// <div class="fert55">..</div>
    div_fert55 = document.createElement("div");
    div_fert55.setAttribute("class", "fert55");
    div_fert2.append(div_fert55);

// <p>...</p>
   div_fert55_p = document.createElement("p");
   div_fert55_p.innerText = "You Save" +" " + "₹" + discount
   div_fert55_p.setAttribute("id","dicount");
   div_fert55.append(div_fert55_p);

//  <div class="fert5">..</div>
    div_fert5 = document.createElement("div");
    div_fert5.setAttribute("class", "fert5");
    div_fert2.append(div_fert5);
// // <h3>...</h3>
//    div_fert5_h3 = document.createElement("h3");
//    div_fert5_h3.innerText ="Order Qty";
//    div_fert5.append(div_fert5_h3);

// //   <select id="option">...</select>
//     select = document.createElement("select");
//     select.setAttribute("id", "option");
//     div_fert5.append(select);

// // <option>....</option>
// for(i=1; i<=7; i++){
//     option1 = document.createElement("option");
//     option1.innerText = i;
    
//     select.append(option1);
//    }
    


//  <div class="fert5">..</div>
    div_fert5_1 = document.createElement("div");
    div_fert5_1.setAttribute("class", "fert5");
    div_fert2.append(div_fert5_1);
// <h3>...</h3>
   div_fert5_h3_1 = document.createElement("h3");
   
   div_fert5_h3_1.innerText = "Weight" + " " + loadProduct["product_weight"]
   div_fert5_1.append(div_fert5_h3_1);

//  <div class="rem">...</div>
    div_rem = document.createElement("div");
    div_rem.setAttribute("class", "rem");
    div_fert2.append(div_rem);

//<a href="./add_cart.html">...</a>
    rem_a = document.createElement("a");
    rem_a.setAttribute("id", "go_to_cart");
    div_rem.append(rem_a );

// <button id="rem1">.....</button>
    rem_button = document.createElement("button");
    rem_button .setAttribute("id", "rem1");
    rem_button.innerText = "GO TO CART";
    rem_a.append(rem_button );
//<i>...</i>
    rem_i = document.createElement("i");
    rem_i.setAttribute("id", "cart");
    rem_i.setAttribute("class", "fa fa-shopping-cart");
    rem_i.setAttribute("style","font-size:25px" );
    rem_button.prepend(rem_i);

//<div>...</div>
    div_div = document.createElement("div");
    div_rem.append(div_div);

// <a>...<a>
    div_a = document.createElement("a");

    div_div.append(div_a );

// <button id="rem2">.....</button>
    rem2_button = document.createElement("button");
    rem2_button .setAttribute("id", "rem2");
    rem2_button.setAttribute("type","submit");
    rem2_button.innerText = "BUY NOW ";
    div_a.append(rem2_button );

// <i>...</i>
    div_i = document.createElement("i");
    div_i.setAttribute("id", "thunder");
    div_i.setAttribute("class", "fa fa-bolt");
    div_i.setAttribute("style","font-size:25px" );
    rem2_button.prepend(div_i);

//   <div class="description">...</div>
    div_description = document.createElement("div");
    div_description.setAttribute("class", "description");
    document.querySelector("div.total").append(div_description);

// <h1>...</h1>
    description_h1 = document.createElement("h1");
    description_h1 .innerText ="Descriptions";
    div_description.append(description_h1);

// <ul>...</ul>
    description_ul = document.createElement("ul");
    div_description.append(description_ul);

// <li>...</li>
    description_li1 = document.createElement("li");
    description_li1.innerText = loadProduct["description"];
    description_ul.append(description_li1);

//   <div class="benifits">...</div>
    div_benifits = document.createElement("div");
    div_benifits.setAttribute("class", "benifits");
    document.querySelector("div.total").append(div_benifits);

    // <h2>...</h2>
    benifits_h2 = document.createElement("h2");
    benifits_h2.innerText = "Benefits";
    div_benifits.append(benifits_h2);

// <ul>...</ul>
    benifits_ul = document.createElement("ul");
    div_benifits.append(benifits_ul);

// <li>...</li>
    benifits_li1 = document.createElement("li");
    benifits_li1.innerText = loadProduct["benifits"];
    benifits_ul.append(benifits_li1);

//   <div class="method">...</div>
    div_method = document.createElement("div");
    div_method.setAttribute("class", "method");
    document.querySelector("div.total").append(div_method);

    // <h2>...</h2>
    method_h2 = document.createElement("h2");
    method_h2.innerText = "Method of Application";
    div_method.append(method_h2);

// <ul>...</ul>
    method_ul = document.createElement("ul");
    div_method.append(method_ul);

// <li>...</li>
    method_li1 = document.createElement("li");
    method_li1.innerText = loadProduct["application"];
    method_ul.append(method_li1);
    


    // ----------------------------------
let button = document.querySelector("#wish1");
const loginUserDetails = JSON.parse(localStorage.getItem("user_data"));

button.addEventListener("click", function wishListAction() {
    
// if user login ornot check this function
const logedUserDetails = JSON.parse(localStorage.getItem("user_data"));

if(loginUserDetails){
    this.classList.toggle("fa-solid");
    this.classList.toggle("true");
    this.classList.toggle("active");
    this.style.color = "rgb(7, 14, 88)";

    let wishlisstItem = JSON.parse(localStorage.getItem("wishlisstItem")) || [];
    let productUniqueId = loadProduct["product_unique_id"];
    let exit = wishlisstItem.length && wishlisstItem.some(data => data.product_id == productUniqueId && data.userUniqueId == logedUserDetails);

    if (this.classList.contains("true") && !exit) {
        this.setAttribute("like", "true");
       
        wishlisstItem.push({
            "product_id": productUniqueId,
            "userUniqueId": loginUserDetails
        });
        localStorage.setItem("wishlisstItem", JSON.stringify(wishlisstItem));
        setTimeout(() => {
  location.reload();
}, 500);

        // showMessage("Added to your Wishlist");
    } else {
        this.setAttribute("like", "false");
        let wishlistRemove = wishlisstItem.filter(data => data.product_id !== productUniqueId || (data.product_id === productUniqueId && data.userUniqueId !== logedUserDetails));
        localStorage.setItem("wishlisstItem", JSON.stringify(wishlistRemove));
         this.style.color = "rgb(198, 198, 198)";
         setTimeout(() => {
  location.reload();
}, 500);

        // showMessage("Removed from your Wishlist");
    }
}
else{
    window.location.href = "../user/user_login.html";

}

});





function timeout(){ 
    let like=document.getElementById("like")
    like.style.display="none";
}

function timeout2(){
    let dislike=document.getElementById("dislike")
    dislike.style.display="none";
}


function likeAlert(){
    
if(loginUserDetails){
    
    if(this.classList.contains("active")){
        let like=document.getElementById("like")
        like.style.display="block"
        setTimeout(timeout,1200)
    } else {
        let dislike=document.getElementById("dislike")
        dislike.style.display= "block";
        setTimeout(timeout2,1200)
    }}
else{
    window.location.href = "../user/user_login.html";
}
}

button.addEventListener("click",likeAlert)



function findLike(){
      
if(loginUserDetails){
    const logedUserDetails = JSON.parse(localStorage.getItem("user_data"));
    
    let wishlisstItem = JSON.parse(localStorage.getItem("wishlisstItem")) || [];
    let productUniqueId = loadProduct["product_unique_id"];
    let exit = wishlisstItem.length && wishlisstItem.some(data => data.product_id == productUniqueId && data.userUniqueId == logedUserDetails);
    if(exit){
        button.classList.add("fa-solid");
        button.classList.add("true");
        button.classList.add("active");
        button.style.color = "rgb(7, 14, 88)";
    } else {
        button.classList.remove("fa-solid");
        button.classList.remove("true");
        button.classList.remove("active");
        button.style.color = "rgb(198, 198, 198)";
    }
}
else{
    button.style.color = "rgb(198, 198, 198)";
}
}



window.onload = function() {
    findLike();
}

// ------------------ Add to cart buttons--------------

const add_path = window.location.origin
function addToCart(){
    if(loginUserDetails){
        const logedUserDetails = JSON.parse(localStorage.getItem("user_data"));
    let addToCartItem = JSON.parse(localStorage.getItem("addToCartItem")) || [];
    let addProductId = loadProduct["product_unique_id"];

    let productExists = addToCartItem.some(data => data.cart_id === addProductId && data.userUniqueId == logedUserDetails);
    if(!productExists){
        addToCartItem.push({
            "cart_id": addProductId,
            "userUniqueId": loginUserDetails
        })
        localStorage.setItem("addToCartItem", JSON.stringify(addToCartItem));

        const add_root = `${add_path}/pages/user/add_cart.html`
      rem_a.setAttribute("href",add_root)
    } 
    else(
        alert("Product already in cart")
        
    )
}
else{
    window.location.href = "../user/user_login.html";
}
}
document.getElementById("rem1").addEventListener("click", addToCart)

// when click uynow button this function is work............
document.getElementById("rem2").addEventListener("click",
function buyNow(){
    if(loginUserDetails){
        const product_id = loadProduct["product_unique_id"]
        const wish_p = `${add_path}/pages/user/order_summary.html?order=`+ product_id;
        div_a.setAttribute("href", wish_p )
    }
else{
    window.location.href = `${add_path}/user/user_login.html`;
}
});

