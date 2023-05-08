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
document.getElementById("dobb").setAttribute("max", maxDate);

// get value from local storage
const user_data = JSON.parse(localStorage.getItem("user_data"));
const user_list = JSON.parse(localStorage.getItem("user_list"));

function profile_data(e) {
  return e.mobile === user_data;
}
const person_data = user_list.find(profile_data);

// document.getElementById("id name").value = person_data["variable name"];

document.getElementById("full_name").value = person_data.full_name;
document.getElementById("gender").value = person_data.gender;
document.getElementById("dobb").value = person_data.date_birth;
document.getElementById("street").value = person_data.street;
document.getElementById("city").value = person_data.city;
document.getElementById("district").value = person_data.district;
document.getElementById("state").value = person_data.state;

document.getElementById("save_data").addEventListener("click", (e) => {
  e.preventDefault();

  const up_name = document.getElementById("full_name").value.trim();
  const gender = document.getElementById("gender").value.trim();
  const date_of_birth = document.getElementById("dobb").value.trim();
  const street = document.getElementById("street").value.trim();
  const city = document.getElementById("city").value.trim();
  const district = document.getElementById("district").value.trim();
  const state = document.getElementById("state").value.trim();

  person_data.full_name = up_name;
  person_data.gender = gender;
  person_data.street = street;
  person_data.date_birth = date_of_birth;
  person_data.city = city;
  person_data.district = district;
  person_data.state = state;
  if (up_name === "" || /^\s*$/.test(up_name)) {
    alert("Please enter your name!");
  } else {
    localStorage.setItem("user_list", JSON.stringify(user_list));
    alert("Your profile ubdated sucessfully..✅");

    window.location.href = "../user/user_profile.html";
  }
});

// if thwy enetr any empty spaces in input field error messsage have to shown
