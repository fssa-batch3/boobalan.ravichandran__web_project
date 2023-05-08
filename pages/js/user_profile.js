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

document.getElementById("edit").addEventListener("click", () => {
  window.location.href = "./user_profile_edit.html";
});

const user_data = JSON.parse(localStorage.getItem("user_data"));
const user_list = JSON.parse(localStorage.getItem("user_list"));

const person_data = user_list.find((e) => e.mobile === user_data);

document.getElementById("full_name").value = person_data.full_name;
document.getElementById("dobb").value = person_data.date_birth;
document.getElementById("full_name1").value = person_data.full_name;
document.getElementById("mobile").value = person_data.mobile;
document.getElementById("email").value = person_data.email;
document.getElementById("gender").value = person_data.gender;
document.getElementById("street").value = person_data.street;
document.getElementById("city").value = person_data.city;
document.getElementById("district").value = person_data.district;
document.getElementById("state").value = person_data.state;

const del_account = document.getElementById("del_account");

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
