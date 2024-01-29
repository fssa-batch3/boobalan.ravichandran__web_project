//   const signUp = e =>
document.getElementById("userSignUp").addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const full_name = document.getElementById("full_name").value;
  const password = document.getElementById("txtPassword").value;
  const confirmpassword = document.getElementById("TXTpassword").value;
  const unique_id = uuidv4();
  const date_birth = "";
  const gender = "";
  const street = "";
  const city = "";
  const district = "";
  const state = "";
  //   // Parsing the JSON string back into an array, or creating an empty array if there's no data
  const user_list = JSON.parse(localStorage.getItem("user_list")) || [];
  const exist =
    user_list.length &&
    JSON.parse(localStorage.getItem("user_list")).some(
      (data) =>
        data.mobile.toLowerCase() === mobile.toLowerCase() ||
        data.email.toLowerCase() === email.toLowerCase()
    );

  if (!exist) {
    if (password === confirmpassword) {
      user_list.push({
        full_name,
        email,
        mobile,
        password,
        confirmpassword,
        date_birth,
        gender,
        street,
        city,
        district,
        state,
        unique_id,
      });
      localStorage.setItem("user_list", JSON.stringify(user_list));

      // console.log(localStorage.getItem('user_list'));
      document.querySelector("form").reset();
      document.getElementById("mobile").focus();
      document.getElementById("email").focus();
      alert("Account created Successfully ✅");
      window.location.href = "./user_login.html";
    } else {
      alert("Invalid Confirm password ..❌");
    }
  } else {
    alert(
      "Sorry the User already Exist  ..❌!! \n Try with different Phone number or email"
    );
    document.querySelector("form").reset();
  }
});
