
const dhanukaDetailss = JSON.parse(localStorage.getItem('dhanuka_details')) || [];
const adamaDetailss = JSON.parse(localStorage.getItem('adama_details')) || [];
const uplDetailss = JSON.parse(localStorage.getItem('upl_details')) || [];
const dowAgroScienceDetailss = JSON.parse(localStorage.getItem("barrix_details")) || [];
const tata_rallis_detailss = JSON.parse(localStorage.getItem("tata_rallis_details")) || [];
const bayer_detailss = JSON.parse(localStorage.getItem("bayer_details")) || [];
const aries_agro_detailss = JSON.parse(localStorage.getItem("aries_agro_details")) || [];
const barrix_detailss = JSON.parse(localStorage.getItem("bio_fungicides_details")) || [];
const indofil_detailss = JSON.parse(localStorage.getItem("indofil_details")) || [];
const rinuja_detailss = JSON.parse(localStorage.getItem("rinuja_details")) || [];
const bio_insecticides_detailss = JSON.parse(localStorage.getItem("bio_insecticides_details")) || [];
const bio_fungicides_detailss = JSON.parse(localStorage.getItem("bio_fungicides_details")) || [];
const bio_nematicides_detailss = JSON.parse(localStorage.getItem("bio_nematicides_details")) || [];
const bio_vircides_detailss = JSON.parse(localStorage.getItem("bio_vircides_details")) || [];
const major_nurients_detailss = JSON.parse(localStorage.getItem("major_nurients_details")) || [];
const secondary_nutrients_detailss = JSON.parse(localStorage.getItem("secondary_nutrients_details")) || [];
const growth_promoters_detailss = JSON.parse(localStorage.getItem("growth_promoters_details")) || [];
const growth_retardants_detailss = JSON.parse(localStorage.getItem("growth_retardants_details")) || [];
const organic_fertilizer_detailss = JSON.parse(localStorage.getItem("organic_fertilizer_details")) || [];
const bio_fertilizers_detailss = JSON.parse(localStorage.getItem("bio_fertilizers_details")) || [];
const anti_stressing_agents_detailss = JSON.parse(localStorage.getItem("anti_stressing_agents_details")) || [];
const micro_nutrients_detailss = JSON.parse(localStorage.getItem("micro_nutrients_details")) || [];

const allProducts = dhanukaDetailss.concat(uplDetailss, dowAgroScienceDetailss, tata_rallis_detailss, adamaDetailss, bayer_detailss, aries_agro_detailss, barrix_detailss, indofil_detailss, rinuja_detailss, bio_insecticides_detailss, bio_fungicides_detailss, bio_nematicides_detailss, bio_vircides_detailss, major_nurients_detailss, secondary_nutrients_detailss, growth_promoters_detailss, growth_retardants_detailss, organic_fertilizer_detailss, bio_fertilizers_detailss, anti_stressing_agents_detailss, micro_nutrients_detailss);

const rootPath = window.location.origin;
const suggestions = [];

for (let i = 0; i < allProducts.length; i++) {
  let li_search = document.createElement("li");
  document.querySelector("div.autocom-box").append(li_search);

  const product_id = allProducts[i]["product_unique_id"];
  const product_name = allProducts[i]["product_name"];
  const product_url = `${rootPath}/pages/user/product_details.html?product=${product_name}&product_id=${product_id}`;

  suggestions.push(allProducts[i]["product_name"]);

  let a_search = document.createElement("a");
  a_search.setAttribute("href", product_url);
  a_search.innerText = allProducts[i]["product_name"];
  li_search.append(a_search);
}

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

inputBox.addEventListener("input", () => {
  const productData = inputBox.value.trim().toLowerCase();
  let emptyArray = [];

  if (productData.length > 0) {
    emptyArray = suggestions.filter((data) => {
      return data.toLowerCase().includes(productData);
    });

    emptyArray = emptyArray.map((data) => {
      const product_id = allProducts.find((p) => p.product_name === data).product_unique_id;
      const product_url = `${rootPath}/pages/user/product_details.html?product=${data}&product_id=${product_id}`;
      return `<li><a href="${product_url}">${data}</a></li>`;
    });
    
    if (emptyArray.length === 0) {
      emptyArray.push(`<li>No results found for "${productData}"</li>`);
    }

    searchWrapper.classList.add("actives");
    showSuggestions(emptyArray);

    let allList = suggBox.querySelectorAll("li");

    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "selectedd(this)");
    }
  } else {
    searchWrapper.classList.remove("actives");
  }
});

function selectedd(element) {
  let selectProductData = element.textContent;
  inputBox.value = selectProductData;
  searchWrapper.classList.remove("actives");
}
// encase search product is not found belowed not found message shown. if we click that result messagae that is not replced in search bar input field
function selectedd(element) {
  const clickedData = element.textContent;
  const product_id = allProducts.find((p) => p.product_name === clickedData)?.product_unique_id;
  
  if (suggestions.includes(clickedData)) {
    inputBox.value = clickedData;
    const product_url = `${rootPath}/pages/user/product_details.html?product=${clickedData}&product_id=${product_id}`;
    window.location.href = product_url;
  } else {
    inputBox.value = '';
  }
  
  searchWrapper.classList.remove("actives");
}


function showSuggestions(list) {
  let listData;

  if (!list.length) {
    userValue = inputBox.value;
    const product_url = `${rootPath}/pages/user/product_details.html?product=${userValue}&product_id=${product_id}`;
    listData = '<li>' + '<a href="' + product_url + '">' + userValue + '</a>' + '</li>';
  } else {
    listData = list.join("");
  }

  suggBox.innerHTML = listData;
}


// search icon click -------------
const searchBtn = document.querySelector(".sear_btn");
searchBtn.addEventListener("click", search);
function search() {
  const productData = inputBox.value.trim().toLocaleLowerCase();
  const selectedProduct = suggestions.find((data) =>
    data.toLocaleLowerCase() === productData
  );
  
  if (selectedProduct) {
    const product_id = allProducts.find(p => p.product_name === selectedProduct).product_unique_id;
    const product_url = `${rootPath}/pages/user/product_details.html?product=${selectedProduct}&product_id=${product_id}`;
    window.location.href = product_url;
  } else if (productData) {
    const filteredProducts = suggestions.filter((data) =>
      data.toLocaleLowerCase().startsWith(productData)
    );
    const emptyArray = filteredProducts.map((data) => {
      const product_id = allProducts.find(p => p.product_name === data).product_unique_id;
      const product_url = `${rootPath}/pages/user/product_details.html?product=${data}&product_id=${product_id}`;
      return `<li><a href="${product_url}">${data}</a></li>`;
    });
    showSuggestions(emptyArray);
  } else {
    searchWrapper.classList.remove("actives");
  }
}
function selected(element) {
  const selectProductData = element.textContent;
  const product_id = allProducts.find(p => p.product_name === selectProductData).product_unique_id;
  const product_url = `${rootPath}/pages/user/product_details.html?product=${selectProductData}&product_id=${product_id}`;
  window.location.href = product_url;
  searchWrapper.classList.remove("actives");
}


  
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
