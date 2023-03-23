const root = window.location.origin

const beforeLogin = 
` <div class="all_header">
<div class="header">
    <ul>
     <li class="hero_list"><a href="${root}/pages/seller/login.html">Sell on Fert Agri Boomi</a></li>
    </ul>
 </div>
 <header>
    <!-- // menu bar -->
<div class="search_menu">
    <div class="menu_bar1">
        <img src="${root}/assets/images/Fert agri.png" alt="logo for fert agri boomi" class="header__logo1" />
       <a href="#" class="btn_bar">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
       </a>
    </div>
    <div class="search_bar1">
        <button class="sear_btn1" type="submit"><i class="fa fa-search"></i></button>
        <input  class="input00" type="text" placeholder="Search....">
    </div>
</div>
<!-- --------------menu bar end -------------------- -->

<div class="head">
   <a href="${root}/index.html">
   <div>
   <img src="${root}/assets/images/Fert agri.png" alt="logo for fert agri boomi" class="header__logo" />
</div>
   </a>

<div class="search_bar">
    <button class="sear_btn" type="submit"><i class="fa fa-search"></i></button>
    <input  class="input0" type="text" placeholder="Search....">
</div>
<!-- hero class start -->
    <div class="navbar_links">
            <ul class="hero">
            <li class="hero_list1" id="userLogin"><a href="${root}/pages/user/user_login.html">Login</a>
            </li>
       
      
        </ul>
    </div>
    <!-- hero class end -->
</div>   

</header>
<!-- dropdown content start -->
<div class="nav">
<a href="#"><button class="btn1">HOME</button></a>
<div class="dropdown">
    <button class="dropbtn">BRANDS</button>
    <div class="dropdown-content">
        <a href="${root}/pages/user/dhanuka.html">DHANUKA</a>
        <a href="${root}/pages/user/dow_agro.html">DOW AGRO SCIENCE</a>
        <a href="${root}/pages/user/insecticides.html">UPL</a>
        <a href="${root}/pages/user/dhanuka.html">TATA RALLIS</a>
        <a href="${root}/pages/user/dow_agro.html">ADAMA</a>
        <a href="${root}/pages/user/major_nutrients.html">BAYER</a>
        <a href="${root}/pages/user/fungicides.html">ARIES AGRO</a>
        <a href="${root}/pages/user/organic.html">BARRIX</a>
       <a href="${root}/pages/user/retardants.html">INDOFIL</a>
       <a href="${root}/pages/user/secodary_nutrients.html">RINUJA</a>
    </div>
</div>
<div class="dropdown1">
    <button class="dropbtn1">CROP PROTECTION</button>
    <div class="dropdown1-content">
        <a href="${root}/pages/user/insecticides.html">BIO INSECTICIDES</a>
        <a href="${root}/pages/user/fungicides.html">BIO FUNGICIDES</a>
        <a href="${root}/pages/user/dow_agro.html">BIO NEMATICIDES</a>
        <a href="${root}/pages/user/viricides.html"> BIO VIRCIDES</a>
    </div>
</div>
<div  class="dropdown2">
     <button class="dropbtn2" > CROP NUTRITION</button>
    <div class="dropdown2-content">
        <a href="${root}/pages/user/major_nutrients.html">MAJOR NUTRIENTS</a>
        <a href="${root}/pages/user/secodary_nutrients.html">SECONDARY NUTRIENTS</a>
        <a href="${root}/pages/user/dhanuka.html">GROWTH PROMOTERS</a>
        <a href="${root}/user/fungicides.html">GROWTH RETARDANTS</a>
        <a href="${root}/pages/user/secodary_nutrients.html">ORGANIC FERTILIZERS</a>
        <a href="${root}/pages/major_nutrients.html">BIO FERTILIZERS</a>
        <a href="${root}/pages/user/insecticides.html">ANTI STRESSING AGENTS</a>
        <a href="${root}/pages/user/major_nutrients.html">MICRO NUTRIENTS</a>
    </div>
</div>
</div>
</div>`

const AfterLogin =
`  <div class="user_header">
<div class="header">
    <ul class="seller">
     <li></li>
    </ul>
 </div>
 <header>
     <!-- // menu bar -->
 <div class="search_menu">
     <div class="menu_bar1">
         <img src="${root}/assets/images/Fert agri.png" alt="logo for fert agri boomi" class="header__logo1" />
        <a href="#" class="btn_bar">
         <span class="bar"></span>
         <span class="bar"></span>
         <span class="bar"></span>
        </a>
     </div>
     <div class="search_bar1">
         <button class="sear_btn1" type="submit"><i class="fa fa-search"></i></button>
         <input  class="input00" type="text" placeholder="Search....">
     </div>
 </div>
 <!-- --------------menu bar end -------------------- -->

 <div class="head">
 <a href="${root}/index.html">
     <div>
         <img src="${root}/assets/images/Fert agri.png" alt="logo for fert agri boomi" class="header__logo" />
 </div>
 </a>
 
 <div class="search_bar">
     <button class="sear_btn" type="submit"><i class="fa fa-search"></i></button>
     <input  class="input0" type="text" placeholder="Search....">
 </div>

     <!-- search bar end -->
         <div class="navbar_links">
                 <ul class="hero">
                  <li class="hero_list11"><a href="${root}/pages/user/wishlist.html"><i id="wish" class="fa fa-heart" style="font-size:21px"></i>Wishlist</a> </li>
                 <li class="hero_list11"><a href="${root}/pages/user/user_order.html">My orders</a>
                 </li>
             <li  class="hero_list11"><a href="${root}/pages/user/add_cart.html"><i id="cart" class="fa fa-shopping-cart" style="font-size:26px"></i> Cart</a></li>
             <li class="hero_list11"><a href="${root}/index.html" id="user_logout"><i class="fa fa-sign-out" style="font-size:21px"></i>Logout</a>
             </li>
             <a href="${root}/pages/user/user_profile.html" ><img class="img1" src="${root}/assets/images/profile in.jpg" alt="profile" width="35px" height="35px"></a>
             </ul>
         </div>
     </div>   
 </header>
 <div class="nav">
     <a href="${root}/user_interface.html"><button class="btn1">HOME</button></a>
     <div class="dropdown">
         <button class="dropbtn">BRANDS</button>
         <div class="dropdown-content">
             <a href="${root}/pages/user/dhanuka.html">DHANUKA</a>
             <a href="${root}/pages/user/dow_agro.html">DOW AGRO SCIENCE</a>
             <a href="${root}/pages/user/upl.html">UPL</a>
             <a href="${root}/pages/user/tata.html">TATA RALLIS</a>
             <a href="${root}/pages/user/adama.html">ADAMA</a>
             <a href="${root}/pages/user/bayer.html">BAYER</a>
             <a href="${root}/pages/user/upl.html">ARIES AGRO</a>
             <a href="${root}/pages/user/promoters.html">BARRIX</a>
            <a href="${root}/pages/user/bio_fertilizer.html">INDOFIL</a>
            <a href="${root}/pages/user/tata.html">RINUJA</a>
         </div>
     </div>
     <div class="dropdown1">
         <button class="dropbtn1">CROP PROTECTION</button>
         <div class="dropdown1-content">
             <a href="${root}/pages/user/insecticides.html">BIO INSECTICIDES</a>
             <a href="${root}/pages/user/fungicides.html">BIO FUNGICIDES</a>
             <a href="${root}/pages/user/nematicides.html">BIO NEMATICIDES</a>
             <a href="${root}/pages/user/viricides.html"> BIO VIRCIDES</a>
         </div>
     </div>
     <div  class="dropdown2">
          <button class="dropbtn2" > CROP NUTRITION</button>
         <div class="dropdown2-content">
             <a href="${root}/pages/user/major_nutrients.html">MAJOR NUTRIENTS</a>
             <a href="${root}/secodary_nutrients.html">SECONDARY NUTRIENTS</a>
             <a href="${root}/pages/user/promoters.html">GROWTH PROMOTERS</a>
             <a href="${root}/pages/user/retardants.html">GROWTH RETARDANTS</a>
             <a href="${root}/pages/user/organic.html">ORGANIC FERTILIZERS</a>
             <a href="${root}/pages/user/bio_fertilizer.html">BIO FERTILIZERS</a>
             <a href="${root}/pages/user/secodary_nutrients.html">ANTI STRESSING AGENTS</a>
             <a href="${root}/pages/user/viricides.html">MICRO NUTRIENTS</a>
         </div>
     </div>
</div>
</div>`


// let loginUser = JSON.parse(localStorage.getItem("user_data"));

// if (loginUser) {
//   document.body.insertAdjacentHTML("afterbegin",AfterLogin);

  

//   function loginClickHandler() {
//     document.body.innerHTML.insertAdjacentHTML("afterbegin",beforeLogin);
//   }

//   const userLoginElement = document.getElementById("userLogin");
//   if (userLoginElement) {
//     userLoginElement.addEventListener("click", loginClickHandler);
//   }

//   // remove the beforeLogin content if it exists
//   const beforeLoginElement = document.querySelector(".all_header");
//   if (beforeLoginElement) {
//     beforeLoginElement.remove();
//   }
  
//   const userLogoutElement = document.getElementById("user_logout");
//   if (userLogoutElement) {
//     userLogoutElement.addEventListener("click", () => {
//       localStorage.removeItem("user_data");
//       document.body.innerHTML = beforeLogin;
//     });
//   }
  
// } else {
//   document.body.insertAdjacentHTML("afterbegin",beforeLogin);

//   function removeLoginClickHandler() {
//     document.body.insertAdjacentHTML("afterbegin", AfterLogin);
//   }

//   const userLoginElement = document.getElementById("user_logout");
//   if (userLoginElement) {
//     userLoginElement.removeEventListener("click", removeLoginClickHandler);
//   }

//   // remove the afterLogin content if it exists
//   const afterLoginElement = document.querySelector(".user_header");
//   if (afterLoginElement) {
//     afterLoginElement.remove();
//   }
//   localStorage.removeItem("user_data");
// }
const loginUser = JSON.parse(localStorage.getItem("user_data"));

if (loginUser) {
  document.body.insertAdjacentHTML("afterbegin", AfterLogin);
  const userLoginElement = document.getElementById("userLogin");
  userLoginElement?.addEventListener("click", () => document.body.innerHTML = beforeLogin);
//   const beforeLoginElement = document.querySelector(".all_header");
//   beforeLoginElement?.remove();
  const userLogoutElement = document.getElementById("user_logout");
  userLogoutElement?.addEventListener("click", () => {
    localStorage.removeItem("user_data");
    document.body.innerHTML = beforeLogin;
  });
} else {
  document.body.insertAdjacentHTML("afterbegin", beforeLogin);
  const userLoginElement = document.getElementById("user_logout");
  userLoginElement?.removeEventListener("click", () => document.body.innerHTML = AfterLogin);
//   const afterLoginElement = document.querySelector(".user_header");
//   afterLoginElement?.remove();
  localStorage.removeItem("user_data");
}
