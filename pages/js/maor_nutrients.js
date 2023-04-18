
        
    let div_today;
        let insecticide_a;
        let insecticide_img;
        let pro_name;
        let div_star;
        let star_span;
        let div_price;
        let price_h2;
        let price_del;
        let save_h3;
        
  let product_details = JSON.parse(localStorage.getItem("major_nurients_details")) || [];

  const root_path = window.location.origin


        for(let i = 0; i < product_details.length; i++) {
            
            const product_name = encodeURIComponent(product_details[i]["product_name"]);
            const product_id = product_details[i]["product_unique_id"];
              const product_url = `${root_path}/pages/user/product_details.html?product=${product_name}&product_id=${product_id}`;
            // <div class="insecticide"> </div>
            div_today = document.createElement("div");
            div_today.setAttribute("class", "today");
            div_today.setAttribute("data-id",product_details[i]["product_unique_id"])
            document.querySelector("div.offers1").append(div_today);
            console.log(div_today);

            // product page link----------------------->
            // <a>---------------------</a>
            insecticide_a = document.createElement("a");
            // insecticide_a.setAttribute("href","../../pages/user/adama1.html"+"?product="+product_details[i]["product_unique_id"]);
            insecticide_a.setAttribute("href",product_url);
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

            //  star div start---------------------
            div_star = document.createElement("div");
            div_star.setAttribute("class", "star");
            insecticide_a.append(div_star);

            // }
           let div_pricecontain = document.createElement("div");
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


           let div_price11 = document.createElement("div");
            div_price11.setAttribute("class", "price11");
            div_pricecontain.append(div_price11);

           let price11_h2 = document.createElement("h3");
            price11_h2.innerText =  "Actual Price: ";
            div_price11.append(price11_h2);
            // old price----------------------
            
            const old_price = product_details[i]["actual_price"];
            price_del = document.createElement("del");
            price_del.innerText = "₹" + old_price;
            div_price11.append(price_del);


            
           let div_save = document.createElement("div");
            div_save.setAttribute("class", "div_save");
            insecticide_a.append(div_save);

            // save price details------------------
            save_h3 = document.createElement("h3");
            const discount = product_details[i]["discount"];
            save_h3.innerText = "You Save" + " - " + "₹" + discount ;
            div_save.append(save_h3);

            document.querySelector("div.offers1").append(div_today);

        }
