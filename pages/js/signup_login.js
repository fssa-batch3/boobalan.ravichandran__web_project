//   const signUp = e => 
function signUp(e) {
    e.preventDefault();

     let email = document.getElementById("email").value
        mobile = document.getElementById("mobile").value
        full_name = document.getElementById("full_name").value
        password = document.getElementById("txtPassword").value
         confirmpassword = document.getElementById("TXTpassword").value
         unique_id = uuidv4();
         date_birth = "";
         gender = "";
        street = "";
         city = "";
        district ="";
        state = "";
        //   // Parsing the JSON string back into an array, or creating an empty array if there's no data
    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
    let exist = user_list.length &&
        JSON.parse(localStorage.getItem('user_list')).some(data =>
            data.mobile.toLowerCase() == mobile.toLowerCase() ||
            data.email.toLowerCase() == email.toLowerCase()
        );


    if(!exist){
        if( password == confirmpassword)
        {
        user_list.push({ 
        full_name,
        email, 
        mobile, 
        password,
         confirmpassword ,
        date_birth,
         gender,
         street,
         city,
         district,
         state,
         unique_id
          
        });
        localStorage.setItem('user_list', JSON.stringify(user_list));
      
        // console.log(localStorage.getItem('user_list'));
        document.querySelector('form').reset();
        document.getElementById('mobile').focus();
        document.getElementById('email').focus();
            alert("Account created Successfully ✅");
             location.href="./user_login.html";
        }
        else{
            alert("Invalid Confirm password ..❌");
        }
    }
    else{
        alert('Sorry the User already Exist  ..❌!! \n Try with different Phone number or email');
        document.querySelector('form').reset();
    }
    
}


const signIn = e =>{
        let mobile = document.getElementById('mobile').value,
          password = document.getElementById('txtPassword').value;
        let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
        let exist = user_list.length &&
        JSON.parse(localStorage.getItem('user_list')).some(data =>
            data.mobile.toLowerCase() == mobile &&
            data.password == password);
        if(!exist){
            alert("Incorrect login credentials..❌");
        }
        else{
            alert("Your login in successful ..✅");
            location.href = "./user_interface.html";
            localStorage.setItem("user_data", JSON.stringify(mobile));
        }
        e.preventDefault();
    }

