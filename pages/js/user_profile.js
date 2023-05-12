const file_root = window.location.origin;

function isLoggedIn() {
  const findLogged = JSON.parse(localStorage.getItem("user_data"));
  if (findLogged) {
    return true;
  }

  return false;
}

//  incase user didn't login when user logged out page move to login page
window.addEventListener("popstate", (event) => {
  if (!isLoggedIn()) {
    event.preventDefault();
    window.location.href = `${file_root}/pages/user/user_login.html`;
  }
});

// call the isLoggedIn function when the page loads
if (!isLoggedIn()) {
  window.location.href = `${file_root}/pages/user/user_login.html`;
}


// edit profile button click
const editPopPupShow = document.querySelector(".edit-profile-details")
document.querySelector(".edit-profile").addEventListener("click", () => {
  editPopPupShow.classList.add("open-message");
});

// close the poppup message

document.querySelector(".close-profile-details").addEventListener("click", () => {
  editPopPupShow.classList.remove("open-message");
});


const user_data = JSON.parse(localStorage.getItem("user_data"));
const user_list = JSON.parse(localStorage.getItem("user_list"));

const person_data = user_list.find((e) => e.mobile === user_data);

console.log(person_data)


document.getElementById("full_name1").innerHTML = person_data.full_name;
document.getElementById("dobb").innerHTML = person_data.date_birth;
document.getElementById("mobile").innerHTML = person_data.mobile;
document.getElementById("email").innerHTML = person_data.email;
document.getElementById("gender").innerHTML = person_data.gender;

const del_account = document.querySelector(".del_account");

del_account.addEventListener("click", (event) => {
  if (confirm("Are you sure to delete your account?")) {
    event.preventDefault();
    // const person_data = user_list.find((e) => e.mobile == user_data);
    const indexOfUser = user_list.indexOf(person_data);
    user_list.splice(indexOfUser, 1);
    localStorage.setItem("user_list", JSON.stringify(user_list));
    window.location.href = "../../index.html";
    localStorage.removeItem("user_data");
  }
});



// profile edit pop up messgae
// Calculate the maximum date value for 15 years completed persons
const today = new Date();
const maxDate = new Date(
  today.getFullYear() - 15,
  today.getMonth(),
  today.getDate()
)
  .toISOString()
  .split("T")[0];

// Set the maximum date value for the date of birth input field
document.getElementById("date-of-birth").setAttribute("max", maxDate);


document.getElementById("edit-full_name").value = person_data.full_name;
document.getElementById("edit-gender").value = person_data.gender;
document.getElementById("date-of-birth").value = person_data.date_birth;

document.getElementById("save_data").addEventListener("click", (e) => {
  e.preventDefault();

  const up_name = document.getElementById("edit-full_name").value.trim();
  const gender = document.getElementById("edit-gender").value.trim();
  const date_of_birth = document.getElementById("date-of-birth").value.trim();

  
  person_data.full_name = up_name;
  person_data.gender = gender;
  person_data.date_birth = date_of_birth;
  if (up_name === "" || /^\s*$/.test(up_name)) {
    alert("Please enter your name!");
  } else {
    localStorage.setItem("user_list", JSON.stringify(user_list));
    alert("Your profile ubdated sucessfully..✅");

    window.location.href = "../user/user_profile.html";
  }
});

