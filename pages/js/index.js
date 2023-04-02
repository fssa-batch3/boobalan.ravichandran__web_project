
    //  <div class="today">
    //    <a href="./pages/user/off1.html"> <img src="./assets/images/fert7.jpg" alt="Sumitomo Lano Pyriproxyfen 10% SC Insecticides">
    //     <p>Sumitomo Lano Pyriproxyfen 10% SC Insecticides</p>
    //  
    //    <div class="pprice">
    //     <h2>₹ 1040</h2><del>₹ 2040</del></div>
    //     <h3>You Save:₹ 1,000</h3></a>
       
    // </div>
    let product_details = JSON.parse(localStorage.getItem("dhanuka_details"));
  const product_path = window.location.origin

    for (i = 0; i < product_details.length; i++) {
    div_today = document.createElement("div");
            div_today.setAttribute("class", "today");
            div_today.setAttribute("data-id",product_details[i]["product_unique_id"])
            document.querySelector("div.offers1").append(div_today);
            console.log(div_today);
           
            const product_name = encodeURIComponent(product_details[i]["product_name"]);
            const product_id = product_details[i]["product_unique_id"];
              const product_url = `${product_path}/pages/user/product_details.html?product=${product_name}&product_id=${product_id}`;

            insecticide_a = document.createElement("a");
            // insecticide_a.setAttribute("href","../../pages/user/adama1.html"+"?product="+product_details[i]["product_unique_id"]);
            insecticide_a.setAttribute("href", product_url);
            div_today.append(insecticide_a);

            
            //  product image------------------
            insecticide_img = document.createElement("img");
            insecticide_img.setAttribute("src",product_details[i]["source"]);
            insecticide_img.setAttribute("alt", "");
            insecticide_a.append(insecticide_img);

            
            //  product name----------------------.
            pro_name = document.createElement("p");
            pro_name.innerText = product_details[i]["product_name"];
            insecticide_a.append(pro_name);

            div_pricecontain = document.createElement("div");
            div_pricecontain.setAttribute("class", "pricecontain");
            insecticide_a.append(div_pricecontain);

              // price--------------------
              div_price = document.createElement("div");
            div_price.setAttribute("class", "price");
            div_pricecontain.append(div_price);

            price_h2 = document.createElement("h3");
            price_h2.innerText =  "Special Price: ";
            div_price.append(price_h2);
            // current price--------------------
            const old_price1 = product_details[i]["actual_price"];
            const discount1 = product_details[i]["discount"];
            const price = old_price1 - discount1;
            price_h2 = document.createElement("h4");
            price_h2.innerText =  "₹" + price;
            div_price.append(price_h2);

            div_price11 = document.createElement("div");
            div_price11.setAttribute("class", "price11");
            div_pricecontain.append(div_price11);

            price11_h2 = document.createElement("h3");
            price11_h2.innerText =  "Actual Price: ";
            div_price11.append(price11_h2);
            // old price----------------------
            
            const old_price = product_details[i]["actual_price"];
            price_del = document.createElement("del");
            price_del.innerText = "₹" + old_price;
            div_price11.append(price_del);


            
            div_save = document.createElement("div");
            div_save.setAttribute("class", "div_save");
            insecticide_a.append(div_save);

            // save price details------------------
            save_h3 = document.createElement("h3");
            const discount = product_details[i]["discount"];
            save_h3.innerText = "You Save" + " - " + "₹" + discount ;
            div_save.append(save_h3);

            document.querySelector("div.offers1").append(div_today);

    }

    // advertisement images js code

    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


