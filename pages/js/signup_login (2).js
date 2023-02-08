const signup = e => {
    let email = document.getElementById("email").value
       let mobile = document.getElementById("mobile").value
       let full_name = document.getElementById("full_name").value
       let password = document.getElementById("txtPassword").value
       let confirmpassword = document.getElementById("TXTpassword").value

       //   // Parsing the JSON string back into an array, or creating an empty array if there's no data
   let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
   let exist = user_list.length &&
       JSON.parse(localStorage.getItem('user_list')).some(data =>
           data.mobile.toLowerCase() == mobile.toLowerCase() ||
           data.email.toLowerCase() == email.toLowerCase()
       );


   if(!exist){
       user_list.push({ email, mobile, full_name, password,
                    confirmpassword });
       localStorage.setItem('user_list', JSON.stringify(user_list));
       console.log(localStorage.getItem('user_list'));
       document.querySelector('form').reset();
       document.getElementById('mobile').focus();
       document.getElementById('email').focus();
       alert('Account created Successfully');
      location.href="./user_login.html";
   }
   else{
       alert('Sorry the User already Exist!! \n Try with different Phone number or email');
       document.querySelector('form').reset();
   }
   e.preventDefault();
}
