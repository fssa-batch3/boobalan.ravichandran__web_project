document.getElementById("save_pro").addEventListener("click", (e) => {
  e.preventDefault();

  const category = document.getElementById("category").value;
  const companyName = document.getElementById("company_name").value;
  const product_name = document.getElementById("pro_name").value;
  const imageURL = document.getElementById("image_url").value;
  const actual_price = document.getElementById("act_price").value;
  const discountPrice = document.getElementById("discount").value;
  const proWeight = document.getElementById("weight").value;
  const description = document.getElementById("description").value;
  const benifits = document.getElementById("benifits").value;
  const application = document.getElementById("application").value;
  const dhanuka = document.getElementById("dhanuka").value;
  const dowAgroScience = document.getElementById("dow_agro_science").value;
  const upl = document.getElementById("upl").value;
  const tataRallis = document.getElementById("tata_rallis").value;
  const adama = document.getElementById("adama").value;
  const bayer = document.getElementById("bayer").value;
  const ariesAgro = document.getElementById("aries_agro").value;
  const barrix = document.getElementById("barrix").value;
  const indofil = document.getElementById("indofil").value;
  const rinuja = document.getElementById("rinuja").value;
  const bioInsecticides = document.getElementById("bio_insecticides").value;
  const bioFungicides = document.getElementById("bio_fungicides").value;
  const bioNematicides = document.getElementById("bio_nematicides").value;
  const bioVircides = document.getElementById("bio_vircides").value;
  const majorNurients = document.getElementById("major_nurients").value;
  const secondaryNutrients = document.getElementById(
    "secondary_nutrients"
  ).value;
  const growthPromoters = document.getElementById("growth_promoters").value;
  const growthRetardants = document.getElementById("growth_retardants").value;
  const organicFertilizer = document.getElementById("organic_fertilizer").value;
  const bioFertilizers = document.getElementById("bio_fertilizers").value;
  const antiStressingAgents = document.getElementById(
    "anti_stressing_agents"
  ).value;
  const microNutrients = document.getElementById("micro_nutrients").value;
  // eslint-disable-next-line no-undef
  const uniqueId = uuidv4();

  // dhanka details----------------
  if (category === dhanuka) {
    const dhanukaDetails =
      JSON.parse(localStorage.getItem("dhanuka_details")) || [];

    const exit = dhanukaDetails.some(
      (data) =>
        data.dhanukaDetails === dhanukaDetails || data.imageURL === imageURL
    );

    if (!exit) {
      dhanukaDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem("dhanuka_details", JSON.stringify(dhanukaDetails));
      // localStorage.setItem("dhanuka_uniqueId",JSON.stringify(uniqueId));
    }
  }
  // ----dow_agro_science----------------
  else if (category === dowAgroScience) {
    const dowAgroScienceDetails =
      JSON.parse(localStorage.getItem("dow_agro_science_details")) || [];

    const exit = dowAgroScienceDetails.some(
      (data) =>
        data.dowAgroScienceDetails === dowAgroScienceDetails ||
        data.imageURL === imageURL
    );

    if (!exit) {
      dowAgroScienceDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "dow_agro_science_details",
        JSON.stringify(dowAgroScienceDetails)
      );
      // localStorage.setItem("dow_agro_science_uniqueId",JSON.stringify(uniqueId));
    }
  }
  // UPL ---------------------
  else if (category === upl) {
    const uplDetails = JSON.parse(localStorage.getItem("upl_details")) || [];

    const exit = uplDetails.some(
      (data) => data.uplDetails === uplDetails || data.imageURL === imageURL
    );

    if (!exit) {
      uplDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem("upl_details", JSON.stringify(uplDetails));
    }
  }
  // -------tata_rallis------------
  else if (category === tataRallis) {
    const tataRallisDetails =
      JSON.parse(localStorage.getItem("tata_rallis_details")) || [];

    const exit = tataRallisDetails.some(
      (data) =>
        data.tataRallisDetails === tataRallisDetails ||
        data.imageURL === imageURL
    );

    if (!exit) {
      tataRallisDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "tata_rallis_details",
        JSON.stringify(tataRallisDetails)
      );
    }
  }
  // adama-----------------
  else if (category === adama) {
    const adamaDetails =
      JSON.parse(localStorage.getItem("adama_details")) || [];

    const exit = adamaDetails.some(
      (data) => data.adamaDetails === adamaDetails || data.imageURL === imageURL
    );

    if (!exit) {
      adamaDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem("adama_details", JSON.stringify(adamaDetails));
    }
  }
  // --------bayer---------------------
  else if (category === bayer) {
    const bayerDetails =
      JSON.parse(localStorage.getItem("bayer_details")) || [];

    const exit = bayerDetails.some(
      (data) => data.bayerDetails === bayerDetails || data.imageURL === imageURL
    );

    if (!exit) {
      bayerDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem("bayer_details", JSON.stringify(bayerDetails));
    }
  }
  // ----------------aries_agro--------------
  else if (category === ariesAgro) {
    const ariesAgroDetails =
      JSON.parse(localStorage.getItem("aries_agro_details")) || [];

    const exit = ariesAgroDetails.some(
      (data) =>
        data.ariesAgroDetails === ariesAgroDetails || data.imageURL === imageURL
    );

    if (!exit) {
      ariesAgroDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "aries_agro_details",
        JSON.stringify(ariesAgroDetails)
      );
    }
  }
  // ----barrix-------------------
  else if (category === barrix) {
    const barrixDetails =
      JSON.parse(localStorage.getItem("barrix_details")) || [];

    const exit = barrixDetails.some(
      (data) =>
        data.barrixDetails === barrixDetails || data.imageURL === imageURL
    );

    if (!exit) {
      barrixDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem("barrix_details", JSON.stringify(barrixDetails));
    }
  }
  // ----------indofil-----------------
  else if (category === indofil) {
    const indofilDetails =
      JSON.parse(localStorage.getItem("indofil_details")) || [];

    const exit = indofilDetails.some(
      (data) =>
        data.indofilDetails === indofilDetails || data.imageURL === imageURL
    );

    if (!exit) {
      indofilDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem("indofil_details", JSON.stringify(indofilDetails));
    }
  }
  // --------rinuja----------------------
  else if (category === rinuja) {
    const rinujaDetails =
      JSON.parse(localStorage.getItem("rinuja_details")) || [];

    const exit = rinujaDetails.some(
      (data) =>
        data.rinujaDetails === rinujaDetails || data.imageURL === imageURL
    );

    if (!exit) {
      rinujaDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem("rinuja_details", JSON.stringify(rinujaDetails));
    }
  }
  // ------------bio_insecticides-------------
  else if (category === bioInsecticides) {
    const bioInsecticidesDetails =
      JSON.parse(localStorage.getItem("bio_insecticides_details")) || [];

    const exit = bioInsecticidesDetails.some(
      (data) =>
        data.bioInsecticidesDetails === bioInsecticidesDetails ||
        data.imageURL === imageURL
    );

    if (!exit) {
      bioInsecticidesDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "bio_insecticides_details",
        JSON.stringify(bioInsecticidesDetails)
      );
    }
  }
  // -----------------bio_fungicides------------
  else if (category === bioFungicides) {
    const bioFungicidesDetails =
      JSON.parse(localStorage.getItem("bio_fungicides_details")) || [];

    const exit = bioFungicidesDetails.some(
      (data) =>
        data.bioFungicidesDetails === bioFungicidesDetails ||
        data.imageURL === imageURL
    );

    if (!exit) {
      bioFungicidesDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "bio_fungicides_details",
        JSON.stringify(bioFungicidesDetails)
      );
    }
  }
  // -------bio_nematicides-----------
  else if (category === bioNematicides) {
    const bioNematicidesDetails =
      JSON.parse(localStorage.getItem("bio_nematicides_details")) || [];

    const exit = bioNematicidesDetails.some(
      (data) =>
        data.bioNematicidesDetails === bioNematicidesDetails ||
        data.imageURL === imageURL
    );

    if (!exit) {
      bioNematicidesDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "bio_nematicides_details",
        JSON.stringify(bioNematicidesDetails)
      );
    }
  }
  // ---------------- bio_vircides--------------------
  else if (category === bioVircides) {
    const bioVircidesDetails =
      JSON.parse(localStorage.getItem("bio_vircides_details")) || [];

    const exit = bioVircidesDetails.some(
      (data) =>
        data.bioVircidesDetails === bioVircidesDetails ||
        data.imageURL === imageURL
    );

    if (!exit) {
      bioVircidesDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "bio_vircides_details",
        JSON.stringify(bioVircidesDetails)
      );
    }
  }

  // -----------major_nutrients------------
  else if (category === majorNurients) {
    const majorNurientDetails =
      JSON.parse(localStorage.getItem("major_nurients_details")) || [];

    const exit = majorNurientDetails.some(
      (data) =>
        data.majorNurientDetails === majorNurientDetails ||
        data.imageURL === imageURL
    );

    if (!exit) {
      majorNurientDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "major_nurients_details",
        JSON.stringify(majorNurientDetails)
      );
    }
  }

  // ----------------secondary_nutrients-------------------
  else if (category === secondaryNutrients) {
    const secondaryNutrientsDetails =
      JSON.parse(localStorage.getItem("secondary_nutrients_details")) || [];

    const exit = secondaryNutrientsDetails.some(
      (data) =>
        data.secondaryNutrientsDetails === secondaryNutrientsDetails ||
        data.imageURL === imageURL
    );

    if (!exit) {
      secondaryNutrientsDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "secondary_nutrients_details",
        JSON.stringify(secondaryNutrientsDetails)
      );
    }
  }

  // ------------ growth_promoters ------------
  else if (category === growthPromoters) {
    const growthPromotersDetails =
      JSON.parse(localStorage.getItem("growth_promoters_details")) || [];

    const exit = growthPromotersDetails.some(
      (data) =>
        data.growthPromotersDetails === growthPromotersDetails ||
        data.imageURL === imageURL
    );

    if (!exit) {
      growthPromotersDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "growth_promoters_details",
        JSON.stringify(growthPromotersDetails)
      );
    }
  }

  // -------------growth_retardants-----------
  else if (category === growthRetardants) {
    const growthRetardantsDetails =
      JSON.parse(localStorage.getItem("growth_retardants_details")) || [];

    const exit = growthRetardantsDetails.some(
      (data) =>
        data.growthRetardantsDetails === growthRetardantsDetails ||
        data.imageURL === imageURL
    );

    if (!exit) {
      growthRetardantsDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "growth_retardants_details",
        JSON.stringify(growthRetardantsDetails)
      );
    }
  }

  // -----------------organic_fertilizer------------
  else if (category === organicFertilizer) {
    const organicFertilizerDetails =
      JSON.parse(localStorage.getItem("organic_fertilizer_details")) || [];

    const exit = organicFertilizerDetails.some(
      (data) =>
        data.organicFertilizerDetails === organicFertilizerDetails ||
        data.imageURL === imageURL
    );

    if (!exit) {
      organicFertilizerDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "organic_fertilizer_details",
        JSON.stringify(organicFertilizerDetails)
      );
    }
  }

  // --------------bio_fertilizers--------------
  else if (category === bioFertilizers) {
    const bioFertilizersDetails =
      JSON.parse(localStorage.getItem("bio_fertilizers_details")) || [];

    const exit = bioFertilizersDetails.some(
      (data) =>
        data.bioFertilizersDetails === bioFertilizersDetails ||
        data.imageURL === imageURL
    );

    if (!exit) {
      bioFertilizersDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "bio_fertilizers_details",
        JSON.stringify(bioFertilizersDetails)
      );
    }
  }

  // ----------------anti_stressing_agents---------------
  else if (category === antiStressingAgents) {
    const antiStressingAgentsDetails =
      JSON.parse(localStorage.getItem("anti_stressing_agents_details")) || [];

    const exit = antiStressingAgentsDetails.some(
      (data) =>
        data.antiStressingAgentsDetails === antiStressingAgentsDetails ||
        data.imageURL === imageURL
    );

    if (!exit) {
      antiStressingAgentsDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        produc_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "anti_stressing_agents_details",
        JSON.stringify(antiStressingAgentsDetails)
      );
    }
  }

  // ----------- micro_nutrients------------
  else if (category === microNutrients) {
    const microNutrientsDetails =
      JSON.parse(localStorage.getItem("micro_nutrients_details")) || [];

    const exit = microNutrientsDetails.some(
      (data) =>
        data.microNutrientsDetails === microNutrientsDetails ||
        data.imageURL === imageURL
    );

    if (!exit) {
      microNutrientsDetails.push({
        category,
        manufacture_company: companyName,
        actual_price,
        discount: discountPrice,
        source: imageURL,
        product_weight: proWeight,
        product_name,
        product_unique_id: uniqueId,
        description,
        benifits,
        application,
      });
      localStorage.setItem(
        "micro_nutrients_details",
        JSON.stringify(microNutrientsDetails)
      );
    }
  }

  // Check if any input field is empty
  if (
    category === "Select" ||
    !companyName ||
    !product_name ||
    !imageURL ||
    !actual_price ||
    !discountPrice ||
    !proWeight ||
    !description ||
    !benifits ||
    !application
  ) {
    // Show alert message
    alert("Please fill all the input fields");
  } else {
    document.querySelector("form").reset();
    alert("Product detail created Successfully");
    // eslint-disable-next-line no-restricted-globals
    location.href = "../../index.html";
  }
});
document.getElementById("cancel").addEventListener("click", (e) => {
  e.preventDefault();
  alert("You want to cancel product details?");
  // eslint-disable-next-line no-restricted-globals
  location.href = "../../index.html";
});
