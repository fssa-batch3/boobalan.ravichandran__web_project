const btn=document.getElementsByClassName('btn_bar')[0];
const navbar=document.getElementsByClassName('navbar_links')[0];


btn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
});



// // document.getElementById("update_product").addEventListener("click",)
// let dhanuka = JSON.parse(localStorage.getItem("dhanuka_details"));
// let dhanuka_data =JSON.parse(localStorage.getItem("dhanuka_unique_id"));
// // console.log(dhanuka)


// function prods(e){
//     let pro_unique_id = document.getElementById("pro_unique_id").value;
// console.log(pro_unique_id)
//     e.product_unique_id ==  pro_unique_id;
// }   


// let dhanuka_pro_data = dhanuka.find(prods);


// document.getElementById("pro_unique_id").addEventListener("click",prods)


// console.log(dhanuka_pro_data);
