const header = `
<header>
<div class="head">
    <div class="fert_logo">
        <img src="../../assets/images/Fert agri.png" alt="logo for fert agri boomi" class="header__logo" />
    </div>
    <div class="seller_header">
        <ul class="hero">
         <li class="hero_list"><a href="./seller_homepage.html">Home</a></li>
         
         <li class="hero_list"><a href="./image_upload.html" >Add new Listing</a></li>
         <li class="hero_list"><a href="./new_order.html" >Orders</a></li>

         <li class="hero_list"><a href="../../index.html" id = "logout_seller">Logout</a>
         <li class="hero_list"><a href="./profile.html" ><i class="fa fa-user-circle-o" style="font-size:36px"></i></a></li>
        
        </ul>
    </div>
</div>

</header>`
document.body.insertAdjacentHTML("afterbegin", header);


window.addEventListener('popstate', function(event) {
    if (!isLoggedIn()) {
      event.preventDefault();
      window.location.href = "../seller/login.html";
    }
  });
  
  function isLoggedIn() {
    const findLogged = JSON.parse(localStorage.getItem("seller_data"));
    if(findLogged){
      return true;
    }
    else{
      return false;
    }
  }
  
  // call the isLoggedIn function when the page loads
  if (!isLoggedIn()) {
    window.location.href = "../seller/login.html";
  }
  
  
  const logoutSeller = document.getElementById("logout_seller");
  logoutSeller.addEventListener("click", function(event) {
    event.preventDefault(); // prevent the default behavior of the link
    const confirmed = confirm("Are you sure you want to log out?"); // show the confirmation message
    if (confirmed) { // if "Logout Yes" is clicked
      localStorage.removeItem("seller_data"); // remove the seller_data from local storage
      window.location.href = "../../index.html"; // redirect the user to the home page
    }
  });

