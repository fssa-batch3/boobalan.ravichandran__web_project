const dhanukaDetailss =
  JSON.parse(localStorage.getItem("dhanuka_details")) || [];
const adamaDetailss = JSON.parse(localStorage.getItem("adama_details")) || [];
const uplDetailss = JSON.parse(localStorage.getItem("upl_details")) || [];
const dowAgroScienceDetailss =
  JSON.parse(localStorage.getItem("barrix_details")) || [];
const tata_rallis_detailss =
  JSON.parse(localStorage.getItem("tata_rallis_details")) || [];
const bayer_detailss = JSON.parse(localStorage.getItem("bayer_details")) || [];
const aries_agro_detailss =
  JSON.parse(localStorage.getItem("aries_agro_details")) || [];
const barrix_detailss =
  JSON.parse(localStorage.getItem("bio_fungicides_details")) || [];
const indofil_detailss =
  JSON.parse(localStorage.getItem("indofil_details")) || [];
const rinuja_detailss =
  JSON.parse(localStorage.getItem("rinuja_details")) || [];
const bio_insecticides_detailss =
  JSON.parse(localStorage.getItem("bio_insecticides_details")) || [];
const bio_fungicides_detailss =
  JSON.parse(localStorage.getItem("bio_fungicides_details")) || [];
const bio_nematicides_detailss =
  JSON.parse(localStorage.getItem("bio_nematicides_details")) || [];
const bio_vircides_detailss =
  JSON.parse(localStorage.getItem("bio_vircides_details")) || [];
const major_nurients_detailss =
  JSON.parse(localStorage.getItem("major_nurients_details")) || [];
const secondary_nutrients_detailss =
  JSON.parse(localStorage.getItem("secondary_nutrients_details")) || [];
const growth_promoters_detailss =
  JSON.parse(localStorage.getItem("growth_promoters_details")) || [];
const growth_retardants_detailss =
  JSON.parse(localStorage.getItem("growth_retardants_details")) || [];
const organic_fertilizer_detailss =
  JSON.parse(localStorage.getItem("organic_fertilizer_details")) || [];
const bio_fertilizers_detailss =
  JSON.parse(localStorage.getItem("bio_fertilizers_details")) || [];
const anti_stressing_agents_detailss =
  JSON.parse(localStorage.getItem("anti_stressing_agents_details")) || [];
const micro_nutrients_detailss =
  JSON.parse(localStorage.getItem("micro_nutrients_details")) || [];

const allProducts = dhanukaDetailss.concat(
  uplDetailss,
  dowAgroScienceDetailss,
  tata_rallis_detailss,
  adamaDetailss,
  bayer_detailss,
  aries_agro_detailss,
  barrix_detailss,
  indofil_detailss,
  rinuja_detailss,
  bio_insecticides_detailss,
  bio_fungicides_detailss,
  bio_nematicides_detailss,
  bio_vircides_detailss,
  major_nurients_detailss,
  secondary_nutrients_detailss,
  growth_promoters_detailss,
  growth_retardants_detailss,
  organic_fertilizer_detailss,
  bio_fertilizers_detailss,
  anti_stressing_agents_detailss,
  micro_nutrients_detailss
);

const rootPath = window.location.origin;
const suggestions = [];

// iterate through allProducts and create an <a> tag for each one
// add each <a> tag to a <li> tag and append to a <div> with class "autocom-box"
for (let i = 0; i < allProducts.length; i++) {
  const li_search = document.createElement("li");
  document.querySelector("div.autocom-box").append(li_search);

  const product_id = allProducts[i].product_unique_id;
  const { product_name } = allProducts[i];
  const product_url = `${rootPath}/pages/user/product_details.html?product=${product_name}&product_id=${product_id}`;

  suggestions.push(allProducts[i].product_name);

  const a_search = document.createElement("a");
  a_search.setAttribute("href", product_url);
  a_search.innerText = allProducts[i].product_name;
  li_search.append(a_search);
}

// get input and suggestion box elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

// Add event listener for input changes
inputBox.addEventListener("input", () => {
  // Get input value and trim whitespace and convert to lowercase
  const productData = inputBox.value.trim().toLowerCase();
  // Initialize empty array to hold suggestions
  let emptyArray = [];

  // If there's input data
  if (productData.length > 0) {
    // Filter the suggestions array to find matches
    emptyArray = suggestions.filter((data) =>
      data.toLowerCase().includes(productData)
    );

    // Map the filtered data to HTML list elements
    emptyArray = emptyArray.map((data) => {
      // Find the product ID based on the product name
      const product_id = allProducts.find(
        (p) => p.product_name === data
      ).product_unique_id;
      // Generate the URL for the product details page
      const product_url = `${rootPath}/pages/user/product_details.html?product=${data}&product_id=${product_id}`;
      // Return the HTML link
      return `<li><a href="${product_url}">${data}</a></li>`;
    });

    // If there are no results, add a message to the list
    if (emptyArray.length === 0) {
      emptyArray.push(`<li>No results found for "${productData}"</li>`);
    }

    // Show the suggestions box and update the HTML
    searchWrapper.classList.add("actives");
    showSuggestions(emptyArray);

    // Add click event listeners to the suggestion links
    const allList = suggBox.querySelectorAll("li");

    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "selectedd(this)");
    }
  } else {
    // Hide the suggestions box if there's no input data
    searchWrapper.classList.remove("actives");
  }
});

// function to handle the click on suggested items
function selectedd(element) {
  // get the clicked data
  const clickedData = element.textContent;

  // find the product id of the clicked data from allProducts array
  const product_id = allProducts.find(
    (p) => p.product_name === clickedData
  )?.product_unique_id;

  // if the clicked data is in suggestions array
  if (suggestions.includes(clickedData)) {
    // set the value of input box to the clicked data
    inputBox.value = clickedData;

    // create the product url with the clicked data and product id
    const product_url = `${rootPath}/pages/user/product_details.html?product=${clickedData}&product_id=${product_id}`;

    // redirect the user to the product url
    window.location.href = product_url;
  } else {
    // if the clicked data is not in suggestions array, clear the input box
    inputBox.value = "";
  }

  // remove the active class from search wrapper
  searchWrapper.classList.remove("actives");
}

// function to show the suggestions
function showSuggestions(list) {
  let listData;

  // if the list is empty, create a new item for user value
  if (!list.length) {
    const userValue = inputBox.value;
    const product_url = `${rootPath}/pages/user/product_details.html?product=${userValue}&product_id=${product_id}`;
    listData = `<li><a href="${product_url}">${userValue}</a></li>`;
  } else {
    // join the list items with empty string
    listData = list.join("");
  }

  // set the inner HTML of suggestion box to the list data
  suggBox.innerHTML = listData;
}

// search icon click -------------

// search function to handle search functionality
function search() {
  // get input value and remove leading/trailing whitespace, and convert to lowercase
  const productData = inputBox.value.trim().toLocaleLowerCase();

  // check if the input matches any suggestions
  const selectedProduct = suggestions.find(
    (data) => data.toLocaleLowerCase() === productData
  );

  // if the input matches a suggestion, redirect to the corresponding product page
  if (selectedProduct) {
    // get the unique ID of the selected product from the allProducts array
    const product_id = allProducts.find(
      (p) => p.product_name === selectedProduct
    ).product_unique_id;

    // construct the URL of the product page with the selected product name and ID, and redirect to it
    const product_url = `${rootPath}/pages/user/product_details.html?product=${selectedProduct}&product_id=${product_id}`;
    window.location.href = product_url;
  }
  // if the input does not match any suggestions but is not empty, display filtered suggestions
  else if (productData) {
    // filter suggestions that start with the input
    const filteredProducts = suggestions.filter((data) =>
      data.toLocaleLowerCase().startsWith(productData)
    );

    // create an array of HTML elements containing the filtered suggestions
    const emptyArray = filteredProducts.map((data) => {
      // get the unique ID of the corresponding product from the allProducts array
      const product_id = allProducts.find(
        (p) => p.product_name === data
      ).product_unique_id;

      // construct the URL of the product page with the product name and ID, and return it as an HTML element
      const product_url = `${rootPath}/pages/user/product_details.html?product=${data}&product_id=${product_id}`;
      return `<li><a href="${product_url}">${data}</a></li>`;
    });

    // display the array of HTML elements as suggestions
    showSuggestions(emptyArray);
  }
  // if the input is empty, hide the suggestions
  else {
    searchWrapper.classList.remove("actives");
  }
}

// get search button element and add event listener to trigger search function on click
const searchBtn = document.querySelector(".sear_btn");
searchBtn.addEventListener("click", search);

//   const allProductss = dhanukaDetailss.concat(uplDetailss, dowAgroScienceDetailss,tata_rallis_detailss, adamaDetailss,
//     bayer_detailss,aries_agro_detailss, barrix_detailss, indofil_detailss, rinuja_detailss, bio_insecticides_detailss, bio_fungicides_detailss, bio_nematicides_detailss,
//     bio_vircides_detailss, major_nurients_detailss, secondary_nutrients_detailss, growth_promoters_detailss, growth_retardants_detailss,
//     organic_fertilizer_detailss, bio_fertilizers_detailss, anti_stressing_agents_detailss,micro_nutrients_detailss);

//     const root_pathss = window.location.href;
//     const suggessions = [];
//     for(let i=0; i<allProductss.length; i++){
//         let li_search = document.createElement("li");
//         const product_id = allProductss[i]["product_unique_id"];
//         const product_name = allProductss[i]["product_name"];
//         const product_url = `${root_pathss}/pages/user/product_details.html?product=${encodeURIComponent(product_name)}&product_id=${encodeURIComponent(product_id)}`;
//         let a_search = document.createElement("a");
//         a_search.href = product_url;
//         a_search.textContent = product_name;
//         li_search.appendChild(a_search);
//         suggBox.appendChild(li_search);

//     }

// const searchWrapper = document.querySelector(".search-input")
// const inputBox = searchWrapper.querySelector("input")
// const suggBox = searchWrapper.querySelector(".autocom-box");

// inputBox.onkeyup = (e)=> {
// // console.log(e.target.value);
// let productData = e.target.value // user entered product
// let emptyArray = [];
// if(productData){
//     emptyArray = suggessions.filter((data)=>{
//         // fltering array valueand user char to lowercase and
//         // return only those word/sentence which are starts with user entered word.
//         return data.toLocaleLowerCase().startsWith(productData.toLocaleLowerCase());
//     }
//     );

//         // console.log(emptyArray);
//         emptyArray = emptyArray.map((data)=>{
//             return data = '<li>' + `<a href="">` + data + '</a>' + '</li>';
//         });
//         // console.log(emptyArray);
//         searchWrapper.classList.add("actives")//show autocomplete box
//         showSuggestions(emptyArray);
//         let allList = suggBox.querySelectorAll("li");
//         for(let i=0; i<allList.length; i++){
//             //adding onclick attribute in all li tag
//             allList[i].setAttribute('onclick', 'select(this)');
//         }
// }else{
//     searchWrapper.classList.remove("actives")// remove autocomplete box

// }

// }

// function select(element){
//     let selectProductData = element.textContent;
//     // console.log(selectProductData);
//     inputBox.value = selectProductData; // passing the user selected data in the search bar input field
//     searchWrapper.classList.remove("actives")// remove autocomplete box

// }

// function showSuggestions(list){
//     let listData;
//     if(!list.length){
//       userValue = inputBox.value;
//       listData = '<li>' + '<a href="">' + userValue + '</a>' + '</li>';
//     }
//     else{
//         listData = list.join('');
//     }
//     suggBox.innerHTML = listData;
// }
