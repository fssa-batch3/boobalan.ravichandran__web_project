const root = window.location.origin;

const cartItems = JSON.parse(localStorage.getItem("addToCartItem")) || [];
const loinFindUser = JSON.parse(localStorage.getItem("user_data"));

const cartCount = cartItems.filter(
  (details) => details.userUniqueId === loinFindUser
);
const cartValueCount = cartCount.length;

// wishlist count finding
const wishlist = JSON.parse(localStorage.getItem("wishlisstItem")) || [];
const wishlistCount = wishlist.filter(
  (data) => data.userUniqueId === loinFindUser
);
const wishlistValueCount = wishlistCount.length;

const beforeLogin = ` <div class="all_header">
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
 
<div class="wrapperer">
<div class="search-input">
<div class="search_bar">
<button class="sear_btn" type="submit"><i class="fa fa-search"></i></button>
<input  class="input0" type="text" placeholder="Search....">
</div>
<div class="autocom-box">

</div>
</div>

<!-- hero class start -->
    <div class="navbar_links">
            <ul class="hero">
           
            <li class="hero_list11" id="useraboutus"><a href="${root}/pages/user/about_us.html">About Us</a>
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
        
        <a href="${root}/pages/user/dhanuka.html">TATA RALLIS</a>
        <a href="${root}/pages/user/dow_agro.html">ADAMA</a>
        <a href="${root}/pages/user/major_nutrients.html">BAYER</a>
        <a href="${root}/pages/user/fungicides.html">GEOLIFE</a>
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
</div>`;

const AfterLogin = `  <div class="user_header">
<div class="header">
    <ul class="seller">
     <li></li>
    </ul>
 </div>
 <header id="nav_bars_head">
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
     <div class="fert_logo">
         <img src="${root}/assets/images/Fert agri.png" alt="logo for fert agri boomi" class="header__logo" />
 </div>
 </a>

<div class="wrapperer">
<div class="search-input">
<div class="search_bar">
<button class="sear_btn" type="submit"><i class="fa fa-search"></i></button>
<input  class="input0" type="text" placeholder="Search....">
</div>
<div class="autocom-box">

</div>
</div>

     <!-- search bar end -->
         <div class="navbar_links">
                 <ul class="hero">
                 <div class="all_nave_links">
                 <li class="hero_list11"><a href="${root}/pages/user/wishlist.html"><img  src="${root}/assets/images/heart.png" id="wish"><span id="wish_span_count">${wishlistValueCount}</span>  <p id="wish_name">Wishlist</p> </a> </li>
                 <li class="hero_list11"><a href="${root}/pages/user/user_order.html"> <img  src="${root}/assets/images/order.png" id="order_del"><p>Orders</p></a>
                 </li>
             <li  class="hero_list11" id="cart_icon"><a href="${root}/pages/user/add_cart.html" ><img  src="${root}/assets/images/shopping.png" id="cart"><span id="span_count">${cartValueCount}</span> <p id="cart_name">Cart</p></a></li>
             <li class="hero_list11"><a href="${root}/index.html" id="user_logout"><img  src="${root}/assets/images/logout.png" id="cart"> <p>Logout</p></a>
             </li >
                 </div>
             <a href="${root}/pages/user/user_profile.html" id="#profile_icon"><img class="img1"  src="${root}/assets/images/profile in.jpg" alt="profile" width="35px" height="35px" ></a>
             </ul>
         </div>
     </div>   
 </header>
 <div class="nav">
     <a href="${root}/index.html"><button class="btn1">HOME</button></a>
     <div class="dropdown">
         <button class="dropbtn">BRANDS</button>
         <div class="dropdown-content">
             <a href="${root}/pages/user/dhanuka.html">DHANUKA</a>
             <a href="${root}/pages/user/dow_agro.html">DOW AGRO SCIENCE</a>
         
             <a href="${root}/pages/user/tata.html">TATA RALLIS</a>
             <a href="${root}/pages/user/adama.html">ADAMA</a>
             <a href="${root}/pages/user/bayer.html">BAYER</a>
             <a href="${root}/pages/user/aries_agro.html">GEOLIFE</a>
             <a href="${root}/pages/user/barrix.html">BARRIX</a>
            <a href="${root}/pages/user/indofil.html">INDOFIL</a>
            <a href="${root}/pages/user/rinuja.html">RINUJA</a>
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
             <a href="${root}/pages/user/secodary_nutrients.html">SECONDARY NUTRIENTS</a>
             <a href="${root}/pages/user/promoters.html">GROWTH PROMOTERS</a>
             <a href="${root}/pages/user/retardants.html">GROWTH RETARDANTS</a>
             <a href="${root}/pages/user/organic.html">ORGANIC FERTILIZERS</a>
             <a href="${root}/pages/user/bio_fertilizer.html">BIO FERTILIZERS</a>
             <a href="${root}/pages/user/anti_stressing_agents.html">ANTI STRESSING AGENTS</a>
             <a href="${root}/pages/user/micro_nutrients.html">MICRO NUTRIENTS</a>
         </div>
     </div>
</div>
</div>`;

const loginUser = JSON.parse(localStorage.getItem("user_data"));

if (loginUser) {
  document.body.insertAdjacentHTML("afterbegin", AfterLogin);
  const userLoginElement = document.getElementById("userLogin");
  userLoginElement?.addEventListener("click", () => {
    document.body.innerHTML = beforeLogin;
  });

  //   const beforeLoginElement = document.querySelector(".all_header");
  //   beforeLoginElement?.remove();

  // cart----------
  const cart = document.getElementById("span_count");
  const wish = document.getElementById("wish_span_count");
  if (cartValueCount === 0) {
    cart.style.display = "none";
  }

  if (wishlistValueCount === 0) {
    wish.style.display = "none";
  }

  const userLogoutElement = document.getElementById("user_logout");
  userLogoutElement?.addEventListener("click", () => {
    localStorage.removeItem("user_data");
    document.body.innerHTML = beforeLogin;
  });
} else {
  document.body.insertAdjacentHTML("afterbegin", beforeLogin);
  const userLoginElement = document.getElementById("user_logout");
  userLoginElement?.removeEventListener("click", () => {
    document.body.innerHTML = AfterLogin;
  });
  //   const afterLoginElement = document.querySelector(".user_header");
  //   afterLoginElement?.remove();
  localStorage.removeItem("user_data");
}
