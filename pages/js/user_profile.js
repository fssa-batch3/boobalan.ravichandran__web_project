

document.getElementById("edit").addEventListener("click", 
function edit(){
   window.location.href="./user_profile_edit.html";
}
)


//get value from local storage
let user_data = JSON.parse(localStorage.getItem("user_data"));
let user_list= JSON.parse(localStorage.getItem("user_list"));

   function profile_data(e){
       return e.mobile == user_data;
   }


  person_data = user_list.find(profile_data);

document.getElementById("full_name").value = person_data["full_name"];
document.getElementById("dobb").value = person_data["date_birth"]
   document.getElementById("full_name1").value = person_data["full_name"]
   document.getElementById("mobile").value = person_data["mobile"]
   document.getElementById("email").value = person_data["email"]
   document.getElementById("gender").value = person_data["gender"]
   document.getElementById("street").value = person_data["street"]
   document.getElementById("city").value = person_data["city"]
   document.getElementById("district").value = person_data["district"]
   document.getElementById("state").value = person_data["state"]

//  logout function
const del_account = document.getElementById("del_account")
del_account.addEventListener("click",
function deleteAcc(e)
   {
       if(confirm("Are you sure to delete your account?")){
             e.preventDefault();
       //get value from local storage
       let user_data = JSON.parse(localStorage.getItem("user_data"));
       let user_list= JSON.parse(localStorage.getItem("user_list"));

   function profile_data(e){
       return e.mobile == user_data;
   }
    // finding the userData which unique_id correctly matches
   person_data = user_list.find(profile_data);
   

       const indexOfUser = user_list.indexOf(person_data);

       // console.log(result);
       // user_list.splice(position(which means index 1,2,3,4), counting);
       user_list.splice(indexOfUser, 1);
       localStorage.setItem("user_list", JSON.stringify(user_list));
       window.location.href="../../index.html";
       localStorage.removeItem("user_data");
   };

}
)