const form = document.querySelector('.form');
const findDetails = document.getElementById('find_details');
const proUniqueIdInput = document.getElementById('pro_unique_id');
const productNameInput = document.getElementById('pro_name');
const actualPriceInput = document.getElementById('act_price');
const discountInput = document.getElementById('discount');
const productWeightInput = document.getElementById('weight');
const productImageInput = document.getElementById("image_url");


// Add event listener to findDetails button
findDetails.addEventListener('click', (event) => {
  event.preventDefault();

  // Get product unique ID
  const uniqueId = proUniqueIdInput.value;

  // Check if product exists in localStorage for each company
  const companies = ['dhanuka_details', 'dow_agro_science_details', 'upl_details' ,'tata_rallis_details' , 'adama_details' , 'bayer_details' , 'aries_agro_details' , 'barrix_details' , 'indofil_details' , 'rinuja_details' ,
                      'bio_insecticides_details' , 'bio_fungicides_details' , 'bio_nematicides_details' , 'bio_vircides_details' , 'major_nurients_details' , 'secondary_nutrients_details' , 'growth_promoters_details' , 'growth_retardants' ,
                      'organic_fertilizer_details' , 'bio_fertilizers_details' , 'anti_stressing_agents_details' , 'micro_nutrients_details'];
  let productFound = false;
  for (const company of companies) {
    const details = JSON.parse(localStorage.getItem(company));
    if (!details) continue; // Skip iteration if details is null or undefined

    const product = details.find(item =>
       item.product_unique_id === uniqueId);
    if (product) {
      // Set product details if found
      productNameInput.value = product.product_name;
      actualPriceInput.value = product.actual_price;
      discountInput.value = product.discount;
      productWeightInput.value = product.product_weight;
      productImageInput.value = product.source;

      // Add event listener to update_product button
      document.getElementById("update_product").addEventListener("click", (event) => {
        event.preventDefault();
        let productName = productNameInput.value;
        let productPrice = actualPriceInput.value;
        let priceDiscount = discountInput.value;
        let productWeight = productWeightInput.value;
        let productImage = productImageInput.value;

        // Update product details in localStorage
        product.product_name = productName;
        product.actual_price = productPrice;
        product.discount = priceDiscount;
        product.product_weight = productWeight;
        product.source = productImage;
        localStorage.setItem(company, JSON.stringify(details));

        // Alert user that product details have been updated
        alert("Product details updated successfully..✅");

        // Reset form
        document.querySelector('form').reset();
        document.getElementById("update_product").setAttribute("disabled", true);
      });

      productFound = true;
      break; // Exit loop if product found in any company
    }
  }
  if (uniqueId == ""){
    alert("Please enter a unique id")
  }
  if (!productFound) {
    // Display error message if product not found
    alert('Product is not found!');
  }
  
});

// Add event listener to delete_product button
document.getElementById("delete_details").addEventListener("click", (event) => {
    event.preventDefault();
    
    // Get product unique ID
    const uniqueId = proUniqueIdInput.value;
    
    // Check if product exists in localStorage for each company
    const companies = ['dhanuka_details', 'dow_agro_science_details', 'upl_details' ,'tata_rallis_details' , 'adama_details' , 'bayer_details' , 'aries_agro_details' , 'barrix_details' , 'indofil_details' , 'rinuja_details' ,
    'bio_insecticides_details' , 'bio_fungicides_details' , 'bio_nematicides_details' , 'bio_vircides_details' , 'major_nurients_details' , 'secondary_nutrients_details' , 'growth_promoters_details' , 'growth_retardants' ,
    'organic_fertilizer_details' , 'bio_fertilizers_details' , 'anti_stressing_agents_details' , 'micro_nutrients_details'];
    for (const company of companies) {
      const details = JSON.parse(localStorage.getItem(company));
      
if (details) {
  const productIndex = details.findIndex(item => item.product_unique_id === uniqueId);
  // rest of the code
  
  if (productIndex > -1) {
    // Remove product details if found
    details.splice(productIndex, 1);
    localStorage.setItem(company, JSON.stringify(details));

    // Alert user that product details have been deleted
    alert("Are you sure you want to delete product details?");

    // Reset form
    document.querySelector('form').reset();
    document.getElementById("delete_product").setAttribute("disabled", true);

    break; // Exit loop if product found in any company
  }
      }

    }
  });
  
  document.getElementById("cancel").addEventListener("click", function cancelUpdate(){

    window.location.href="../user/user_profile.html"
  });

