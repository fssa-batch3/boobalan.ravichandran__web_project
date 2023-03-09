
    document.getElementById("save_pro").addEventListener("click",
    function createProduct(e){
        e.preventDefault();
        
        let category = document.getElementById("category").value
        let comp_name = document.getElementById("company_name").value
        let product_name = document.getElementById("pro_name").value
        let image_url = document.getElementById("image_url").value
        let actual_price = document.getElementById("act_price").value
        let discount_price = document.getElementById("discount").value
        let pro_weight = document.getElementById("weight").value
        let description = document.getElementById("description").value
        let benifits = document.getElementById("benifits").value
        let application = document.getElementById("application").value
        let dhanuka = document.getElementById("dhanuka").value
        let  dow_agro_science = document.getElementById("dow_agro_science").value
        let  upl  = document.getElementById("upl").value
        let  tata_rallis = document.getElementById("tata_rallis").value
        let  adama = document.getElementById("adama").value
        let  bayer = document.getElementById("bayer").value
        let  aries_agro = document.getElementById("aries_agro").value
        let  barrix = document.getElementById("barrix").value
        let  indofil = document.getElementById("indofil").value
        let  rinuja = document.getElementById("rinuja").value
        let  bio_insecticides = document.getElementById("bio_insecticides").value
        let  bio_fungicides = document.getElementById("bio_fungicides").value
        let  bio_nematicides = document.getElementById("bio_nematicides").value
        let  bio_vircides = document.getElementById("bio_vircides").value
        let  major_nurients = document.getElementById("major_nurients").value
        let  secondary_nutrients = document.getElementById("secondary_nutrients").value
        let growth_promoters  = document.getElementById("growth_promoters").value
        let growth_retardants  = document.getElementById("growth_retardants").value
        let  organic_fertilizer = document.getElementById("organic_fertilizer").value
        let  bio_fertilizers = document.getElementById("bio_fertilizers").value
        let  anti_stressing_agents = document.getElementById("anti_stressing_agents").value
        let micro_nutrients  = document.getElementById("micro_nutrients").value
        unique_id = uuidv4();
 
// dhanka details----------------
        if(category == dhanuka){
            let dhanuka_details = JSON.parse(localStorage.getItem('dhanuka_details')) || [];

        let exit = dhanuka_details.some(data =>
         data.dhanuka_details == dhanuka_details||
         data.image_url == image_url
         );

         if(!exit){

            dhanuka_details.push({
          
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("dhanuka_details",JSON.stringify(dhanuka_details));
        // localStorage.setItem("dhanuka_unique_id",JSON.stringify(unique_id));
    }
}
// ----dow_agro_science----------------
    else if(category == dow_agro_science){
        let dow_agro_science_details = JSON.parse(localStorage.getItem('dow_agro_science_details')) || [];

        let exit = dow_agro_science_details.some(data =>
         data.dow_agro_science_details== dow_agro_science_details ||
         data.image_url == image_url
         );

         if(!exit){
            dow_agro_science_details.push({
           
            "category": category,
            "manufacture_company":comp_name,
            "actual_price":actual_price,
            "discount":discount_price,
            "source":image_url,
            "product_weight":pro_weight,
            "product_name":product_name,
            "product_unique_id":unique_id,
              "description":description,
            "benifits":benifits,
            "application":application
        
        });
        localStorage.setItem("dow_agro_science_details",JSON.stringify(dow_agro_science_details));
        // localStorage.setItem("dow_agro_science_unique_id",JSON.stringify(unique_id));
         }
    }
    // UPL ---------------------
    else if(category == upl){
        let upl_details = JSON.parse(localStorage.getItem('upl_details')) || [];

        let exit = upl_details.some(data => 
         data.upl_details== upl_details ||
         data.image_url == image_url
         );

         if(!exit){

            upl_details.push({
           
            "category": category,
            "manufacture_company":comp_name,
            "actual_price":actual_price,
            "discount":discount_price,
            "source":image_url,
            "product_weight":pro_weight,
            "product_name":product_name,
            "product_unique_id":unique_id,
            "description":description,
          "benifits":benifits,
          "application":application
        
        });
        localStorage.setItem("upl_details",JSON.stringify(upl_details));
         }
    }
    // -------tata_rallis------------
    else if(category == tata_rallis){
        let tata_rallis_details = JSON.parse(localStorage.getItem('tata_rallis_details')) || [];

        let exit = tata_rallis_details.some(data =>
         data.tata_rallis_details == tata_rallis_details ||
         data.image_url == image_url
         );

         if(!exit){

            tata_rallis_details.push({
          
            "category": category,
            "manufacture_company":comp_name,
            "actual_price":actual_price,
            "discount":discount_price,
            "source":image_url,
            "product_weight":pro_weight,
            "product_name":product_name,
            "product_unique_id":unique_id,
            "description":description,
          "benifits":benifits,
          "application":application
        
        });
        localStorage.setItem("tata_rallis_details",JSON.stringify(tata_rallis_details));
         }
    }
    // adama-----------------
    else if(category == adama){
        let adama_details = JSON.parse(localStorage.getItem('adama_details')) || [];

        let exit = adama_details.some(data =>
         data.adama_details== adama_details ||
         data.image_url == image_url
         );

         if(!exit){

            adama_details.push({
           
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("adama_details",JSON.stringify(adama_details));
         }
    }
    // --------bayer---------------------
    else if(category == bayer){
        let bayer_details = JSON.parse(localStorage.getItem('bayer_details')) || [];

        let exit = bayer_details.some(data =>
         data.bayer_details== bayer_details ||
         data.image_url == image_url
         );

         if(!exit){

            bayer_details.push({
          
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("bayer_details",JSON.stringify(bayer_details));
         }
    }
    // ----------------aries_agro--------------
    else if(category == aries_agro){
        let aries_agro_details = JSON.parse(localStorage.getItem('aries_agro_details')) || [];

        let exit = aries_agro_details.some(data =>
         data.aries_agro_details == aries_agro_details ||
         data.image_url == image_url
         );

         if(!exit){

            aries_agro_details.push({
          
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("aries_agro_details",JSON.stringify(aries_agro_details));
         }
    }
    // ----barrix-------------------
    else if(category == barrix){
        let barrix_details = JSON.parse(localStorage.getItem('barrix_details')) || [];

        let exit = barrix_details.some(data =>
         data.barrix_details == barrix_details||
         data.image_url == image_url
         );

         if(!exit){

            barrix_details.push({
         
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("barrix_details",JSON.stringify(barrix_details));
         }
    }
    //----------indofil-----------------
    else if(category == indofil){
        let indofil_details = JSON.parse(localStorage.getItem('indofil_details')) || [];

        let exit = indofil_details.some(data =>
         data.indofil_details == indofil_details ||
         data.image_url == image_url
         );

         if(!exit){

            indofil_details.push({
          
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("indofil_details",JSON.stringify(indofil_details));
         }
    }
    //--------rinuja----------------------
    else if(category == rinuja){
        let rinuja_details = JSON.parse(localStorage.getItem('rinuja_details')) || [];

        let exit = rinuja_details.some(data =>
         data.rinuja_details == rinuja_details ||
         data.image_url == image_url
         );

         if(!exit){

            rinuja_details.push({
           
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("rinuja_details",JSON.stringify(rinuja_details));
         }
    }
    //------------bio_insecticides-------------
    else if(category == bio_insecticides){
        let bio_insecticides_details = JSON.parse(localStorage.getItem('bio_insecticides_details')) || [];

        let exit = bio_insecticides_details.some(data =>
         data.bio_insecticides_details == bio_insecticides_details ||
         data.image_url == image_url
         );

         if(!exit){

            bio_insecticides_details.push({
          
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem('bio_insecticides_details',JSON.stringify(bio_insecticides_details));
         }
    }
    // -----------------bio_fungicides------------
    else if(category == bio_fungicides){
        let bio_fungicides_details = JSON.parse(localStorage.getItem('bio_fungicides_details')) || [];

        let exit = bio_fungicides_details.some(data =>
         data.bio_fungicides_details == bio_fungicides_details ||
         data.image_url == image_url
         );

         if(!exit){

            bio_fungicides_details.push({
         
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("bio_fungicides_details",JSON.stringify(bio_fungicides_details));
         }
    }
    // -------bio_nematicides-----------
    else if(category == bio_nematicides){
        let bio_nematicides_details = JSON.parse(localStorage.getItem('bio_nematicides_details')) || [];

        let exit = bio_nematicides_details.some(data =>
         data.bio_nematicides_details == bio_nematicides_details ||
         data.image_url == image_url
         );

         if(!exit){

            bio_nematicides_details.push({
      
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("bio_nematicides_details",JSON.stringify(bio_nematicides_details));
         }
    }
    // ---------------- bio_vircides--------------------
    else if(category ==  bio_vircides){
        let  bio_vircides_details = JSON.parse(localStorage.getItem('bio_vircides_details')) || [];

        let exit = bio_vircides_details.some(data =>
         data.bio_vircides_details == bio_vircides_details ||
         data.image_url == image_url
         );

         if(!exit){

            bio_vircides_details.push({
         
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("bio_vircides_details",JSON.stringify(bio_vircides_details));
         }
    }

    // -----------major_nutrients------------

    else if(category ==  major_nurients){
        let  major_nurients_details = JSON.parse(localStorage.getItem('major_nurients_details')) || [];

        let exit = major_nurients_details.some(data =>
         data.major_nurients_details == major_nurients_details ||
         data.image_url == image_url
         );

         if(!exit){

            major_nurients_details.push({
          
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("major_nurients_details",JSON.stringify(major_nurients_details));
         }
    }

    // ----------------secondary_nutrients-------------------
    else if(category == secondary_nutrients){
        let secondary_nutrients_details = JSON.parse(localStorage.getItem('secondary_nutrients_details')) || [];

        let exit = secondary_nutrients_details.some(data =>
         data.secondary_nutrients_details == secondary_nutrients_details ||
         data.image_url == image_url
         );

         if(!exit){

            secondary_nutrients_details.push({
         
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("secondary_nutrients_details",JSON.stringify(secondary_nutrients_details));
         }
    }

    // ------------ growth_promoters ------------
    else if(category ==  growth_promoters){
        let  growth_promoters_details = JSON.parse(localStorage.getItem('growth_promoters_details')) || [];

        let exit = growth_promoters_details.some(data =>
         data.growth_promoters_details == growth_promoters_details ||
         data.image_url == image_url
         );

         if(!exit){

            growth_promoters_details.push({
           
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("growth_promoters_details",JSON.stringify(growth_promoters_details));
         }
    }

    // -------------growth_retardants-----------
    else if(category == growth_retardants){
        let growth_retardants_details = JSON.parse(localStorage.getItem('growth_retardants')) || [];

        let exit = growth_retardants_details.some(data =>
         data.growth_retardants_details == growth_retardants_details ||
         data.image_url == image_url
         );

         if(!exit){

            growth_retardants_details.push({
        
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("growth_retardants_details",JSON.stringify(growth_retardants_details));
         }
    }

    // -----------------organic_fertilizer------------
    else if(category == organic_fertilizer){
        let organic_fertilizer_details = JSON.parse(localStorage.getItem('organic_fertilizer_details')) || [];

        let exit = organic_fertilizer_details.some(data =>
         data.organic_fertilizer_details == organic_fertilizer_details ||
         data.image_url == image_url
         );

         if(!exit){

            organic_fertilizer_details.push({
      
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("organic_fertilizer_details",JSON.stringify(organic_fertilizer_details));
         }
    }

    // --------------bio_fertilizers--------------
    else if(category == bio_fertilizers){
        let bio_fertilizers_details = JSON.parse(localStorage.getItem('bio_fertilizers_details')) || [];

        let exit = bio_fertilizers_details.some(data =>
         data.bio_fertilizers_details == bio_fertilizers_details ||
         data.image_url == image_url
         );

         if(!exit){

            bio_fertilizers_details.push({
          
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("bio_fertilizers_details",JSON.stringify(bio_fertilizers_details));
         }
    }

    // ----------------anti_stressing_agents---------------
    else if(category == anti_stressing_agents){
        let anti_stressing_agents_details = JSON.parse(localStorage.getItem('anti_stressing_agents_details')) || [];

        let exit = anti_stressing_agents_details.some(data =>
         data.anti_stressing_agents_details == anti_stressing_agents_details ||
         data.image_url == image_url
         );

         if(!exit){

            anti_stressing_agents_details.push({
          
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("anti_stressing_agents_details",JSON.stringify(anti_stressing_agents_details));
         }
    }

    //----------- micro_nutrients------------
    else if(category ==  micro_nutrients){
        let  micro_nutrients_details = JSON.parse(localStorage.getItem('micro_nutrients_details')) || [];

        let exit = micro_nutrients_details.some(data =>
         data.micro_nutrients_details == micro_nutrients_details ||
         data.image_url == image_url
         );

         if(!exit){

            micro_nutrients_details.push({
           
            "category": category,
            "manufacture_company":comp_name,
                "actual_price":actual_price,
                "discount":discount_price,
                "source":image_url,
                "product_weight":pro_weight,
                "product_name":product_name,
                "product_unique_id":unique_id,
                "description":description,
                "benifits":benifits,
                "application":application
        
        });
        localStorage.setItem("micro_nutrients_details",JSON.stringify(micro_nutrients_details));
         }
    }  
        document.querySelector('form').reset();
       alert("Product detail created Successfully");    
}  
    ) 
    document.getElementById("cancel").addEventListener("click",
function cancelDetails(e){
    e.preventDefault();
    alert("You want to cancel product details?");
    location.href = "./user_interface.html";
}
    )