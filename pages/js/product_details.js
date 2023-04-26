

// const productList= JSON.parse(localStorage.getItem("bio_vircides_details"))


const productId = new URLSearchParams(window.location.search).get('product_id');
// const productDetails = JSON.parse(localStorage.getItem('adama_details'));
const dhanukaDetails = JSON.parse(localStorage.getItem('dhanuka_details'));
const dowAgroScienceDetails = JSON.parse(localStorage.getItem("dow_agro_science_details"));
const adamaDetails = JSON.parse(localStorage.getItem("adama_details"))
const uplDetails = JSON.parse(localStorage.getItem('upl_details')) || [];
const tata_rallis_details = JSON.parse(localStorage.getItem("tata_rallis_details")) || [];
const bayer_details = JSON.parse(localStorage.getItem("bayer_details")) || [];
const aries_agro_details = JSON.parse(localStorage.getItem("aries_agro_details")) || [];
const barrix_details = JSON.parse(localStorage.getItem("barrix_details")) || [];
const indofil_details = JSON.parse(localStorage.getItem("indofil_details")) || [];
const rinuja_details = JSON.parse(localStorage.getItem("rinuja_details")) || [];
const bio_insecticides_details = JSON.parse(localStorage.getItem("bio_insecticides_details")) || [];
const bio_fungicides_details = JSON.parse(localStorage.getItem("bio_fungicides_details")) || [];
const bio_nematicides_details = JSON.parse(localStorage.getItem("bio_nematicides_details")) || [];
const bio_vircides_details = JSON.parse(localStorage.getItem("bio_vircides_details")) || [];
const major_nurients_details = JSON.parse(localStorage.getItem("major_nurients_details")) || [];
const secondary_nutrients_details = JSON.parse(localStorage.getItem("secondary_nutrients_details")) || [];
const growth_promoters_details = JSON.parse(localStorage.getItem("growth_promoters_details")) || [];
const growth_retardants_details = JSON.parse(localStorage.getItem("growth_retardants_details")) || [];
const organic_fertilizer_details = JSON.parse(localStorage.getItem("organic_fertilizer_details")) || [];
const bio_fertilizers_details = JSON.parse(localStorage.getItem("bio_fertilizers_details")) || [];
const anti_stressing_agents_details = JSON.parse(localStorage.getItem("anti_stressing_agents_details")) || [];
const micro_nutrients_details = JSON.parse(localStorage.getItem("micro_nutrients_details")) || [];




const loadProduct = [  dhanukaDetails,  dowAgroScienceDetails,  adamaDetails,  uplDetails,  tata_rallis_details,
                    bayer_details,aries_agro_details,barrix_details,indofil_details, rinuja_details, bio_insecticides_details,
                    bio_fungicides_details,bio_nematicides_details,bio_vircides_details,major_nurients_details,secondary_nutrients_details,
                    secondary_nutrients_details,growth_promoters_details,growth_retardants_details,organic_fertilizer_details,
                    bio_fertilizers_details,anti_stressing_agents_details, micro_nutrients_details
                   ].flatMap(details => details).find(detail => detail.product_unique_id === productId);





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
 
//--------------------------live server location get --------------------
const add_path = window.location.origin


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
   div_fert3_h3.innerText= "Manufacture:";
   div_fert3.append(div_fert3_h3);

// <p>...</p>
   div_fert3_p = document.createElement("p");
   div_fert3_p.innerText = " " + loadProduct["manufacture_company"];
   div_fert3_p.setAttribute("id","manufact")
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
    div_fert4_del.innerText = "₹"+ loadProduct["actual_price"] ;
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



//  <div class="fert5">..</div>
    div_fert5_1 = document.createElement("div");
    div_fert5_1.setAttribute("class", "fert5");
    div_fert2.append(div_fert5_1);
// <h3>...</h3>
   div_fert5_h3_1 = document.createElement("h3");
   
   div_fert5_h3_1.innerText = "Weight" +":"+ " " + loadProduct["product_weight"]
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


    //   <div class="offers1">...</div>
let related_product = document.createElement("div");
related_product.setAttribute("class", "related_product");
document.querySelector("div.total").append(related_product);

let related_product_h1 = document.createElement("h1");
related_product_h1.innerText = "Related Products";
related_product.append(related_product_h1);

const related_img = `${add_path}/assets/images/add-to-cart.png`;

let related_product_img = document.createElement("img");
related_product_img.setAttribute("src", related_img)
related_product.append(related_product_img);

 
//   <div class="offers1">...</div>
let crop_offers1 = document.createElement("div");
crop_offers1.setAttribute("class", "offerscrop");
document.querySelector("div.total").append(crop_offers1);

let crop_description = document.createElement("div");
crop_description.setAttribute("class", "crop_description");
document.querySelector("div.total").append(crop_description);

//   <div class="description">...</div>
    div_description = document.createElement("div");
    div_description.setAttribute("class", "description");
    document.querySelector("div.total").append(div_description);

// <h1>...</h1>
    description_h1 = document.createElement("h1");
    description_h1 .innerText ="Descriptions";
    description_h1 .setAttribute("id", "descriptiondes");
    description_h1 .setAttribute("type", "submit");
    crop_description.append(description_h1);

// <ul>...</ul>
    description_ul = document.createElement("ul");
    description_ul.setAttribute("id", "descriptionul");
    div_description.append(description_ul);

// <li>...</li>
    description_li1 = document.createElement("li");
    description_li1.innerText = loadProduct["description"];
    description_ul.append(description_li1);

    let bdescription_inn = document.createElement("h3");
    bdescription_inn.innerText = "Descriptions";
    bdescription_inn .setAttribute("id", "descriptionin");
    description_li1.prepend(bdescription_inn);

//   <div class="benifits">...</div>
    div_benifits = document.createElement("div");
    div_benifits.setAttribute("class", "benifits");
    document.querySelector("div.total").append(div_benifits);

    // <h2>...</h2>
    benifits_h2 = document.createElement("h2");
    benifits_h2.innerText = "Benefits";
    benifits_h2 .setAttribute("id", "benifitsbeni");
    crop_description.append(benifits_h2);

// <ul>...</ul>
    benifits_ul = document.createElement("ul");
    benifits_ul.setAttribute("id", "benifitsul");
    div_benifits.append(benifits_ul);

// <li>...</li>
    benifits_li1 = document.createElement("li");
    benifits_li1.innerText = loadProduct["benifits"];
    benifits_ul.append(benifits_li1);

    let benifits_inn = document.createElement("h3");
    benifits_inn.innerText = "Benefits";
    benifits_inn .setAttribute("id", "benifitsin");
    benifits_li1.prepend(benifits_inn);


//   <div class="method">...</div>
    div_method = document.createElement("div");
    div_method.setAttribute("class", "method");
    document.querySelector("div.total").append(div_method);

    // <h2>...</h2>
    method_h2 = document.createElement("h2");
    method_h2.innerText = "Method of Application";
    method_h2 .setAttribute("id", "applicationapp");
    crop_description.append(method_h2);

// <ul>...</ul>
    method_ul = document.createElement("ul");
    method_ul.setAttribute("id","applicationul")
    div_method.append(method_ul);


// <li>...</li>
    method_li1 = document.createElement("li");
    method_li1.innerText = loadProduct["application"];
    method_ul.append(method_li1);
    
    
    let application_inn = document.createElement("h3");
    application_inn.innerText = "Method of Application";
    application_inn .setAttribute("id", "applicationin");
    method_li1.prepend(application_inn);


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

        
    } else {
        this.setAttribute("like", "false");
        let wishlistRemove = wishlisstItem.filter(data => data.product_id !== productUniqueId || (data.product_id === productUniqueId && data.userUniqueId !== logedUserDetails));
        localStorage.setItem("wishlisstItem", JSON.stringify(wishlistRemove));
         this.style.color = "rgb(198, 198, 198)";
         setTimeout(() => {
  location.reload();
}, 500);

        
    }
}
else{
    window.location.href = `${add_path}/pages/user/user_login.html`;

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
    window.location.href = `${add_path}/pages/user/user_login.html`;
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
    window.location.href = `${add_path}/pages/user/user_login.html`;
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
    window.location.href = `${add_path}/pages/user/user_login.html`;
}
});

const descriptionCrop = document.getElementById("descriptiondes");
const benifitsCrop = document.getElementById("benifitsbeni");
const applicationCrop = document.getElementById("applicationapp");
const descriptionCropUl = document.getElementById("descriptionul");
const benifitsCropUl = document.getElementById("benifitsul");
const applicationCropUl = document.getElementById("applicationul");
applicationCropUl.style.display ="none";
benifitsCropUl.style.display ="none";
descriptionCropUl.style.display = "none";

descriptionCrop.addEventListener("click",
function description(){
    descriptionCropUl.style.display = "inline";
    benifitsCropUl.style.display = "none";
    applicationCropUl.style.display ="none"
    
}
);
benifitsCrop.addEventListener("click",
function description(){
    benifitsCropUl.style.display = "inline";
    descriptionCropUl.style.display = "none";
    applicationCropUl.style.display ="none"
    
}
);
applicationCrop.addEventListener("click",
function description(){
    applicationCropUl.style.display = "inline";
    descriptionCropUl.style.display = "none";
    benifitsCropUl.style.display ="none"
}
);

const pageProduct = loadProduct["category"]

const findRelatedDetails = [
    ...dhanukaDetails.filter(detail => detail.category === pageProduct),
    ...dowAgroScienceDetails.filter(detail => detail.category === pageProduct),
    ...adamaDetails.filter(detail => detail.category === pageProduct),
    ...uplDetails.filter(detail => detail.category === pageProduct),
    ...tata_rallis_details.filter(detail => detail.category === pageProduct),
    ...bayer_details.filter(detail => detail.category === pageProduct),
    ...aries_agro_details.filter(detail => detail.category === pageProduct),
    ...barrix_details.filter(detail => detail.category === pageProduct),
    ...indofil_details.filter(detail => detail.category === pageProduct),
    ...rinuja_details.filter(detail => detail.category === pageProduct),
    ...bio_insecticides_details.filter(detail => detail.category === pageProduct),
    ...bio_fungicides_details.filter(detail => detail.category === pageProduct),
    ...bio_nematicides_details.filter(detail => detail.category === pageProduct),
    ...bio_vircides_details.filter(detail => detail.category === pageProduct),
    ...major_nurients_details.filter(detail => detail.category === pageProduct),
    ...secondary_nutrients_details.filter(detail => detail.category === pageProduct),
    ...growth_promoters_details.filter(detail => detail.category === pageProduct),
    ...growth_retardants_details.filter(detail => detail.category === pageProduct),
    ...organic_fertilizer_details.filter(detail => detail.category === pageProduct),
    ...bio_fertilizers_details.filter(detail => detail.category === pageProduct),
    ...anti_stressing_agents_details.filter(detail => detail.category === pageProduct),
    ...micro_nutrients_details.filter(detail => detail.category === pageProduct),

  ].filter(Boolean); // remove any falsy values (e.g. empty arrays)
  
  const findRelated = findRelatedDetails.filter(details => details.product_name != loadProduct.product_name)

  const product_path = window.location.origin

    for (i = 0; i < findRelated.length; i++) {
    div_today = document.createElement("div");
            div_today.setAttribute("class", "todaycrop");
            div_today.setAttribute("data-id",findRelated[i]["product_unique_id"])
            document.querySelector("div.offerscrop").append(div_today);
            
           
            const product_name = encodeURIComponent(findRelated[i]["product_name"]);
            const product_id = findRelated[i]["product_unique_id"];
              const product_url = `${product_path}/pages/user/product_details.html?product=${product_name}&product_id=${product_id}`;

            insecticide_a = document.createElement("a");
            // insecticide_a.setAttribute("href","../../pages/user/adama1.html"+"?product="+product_details[i]["product_unique_id"]);
            insecticide_a.setAttribute("href", product_url);
            div_today.append(insecticide_a);

            
            //  product image------------------
            insecticide_img = document.createElement("img");
            insecticide_img.setAttribute("src",findRelated[i]["source"]);
            insecticide_img.setAttribute("alt", findRelated[i]["product_name"]);
            insecticide_a.append(insecticide_img);

            
            //  product name----------------------.
            pro_name = document.createElement("p");
            pro_name.innerText = findRelated[i]["product_name"];
            insecticide_a.append(pro_name);


            document.querySelector("div.offerscrop").append(div_today);

    }


