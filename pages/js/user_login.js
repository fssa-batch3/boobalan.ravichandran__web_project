document.getElementById("userLoginDel").addEventListener("click", (e) => {
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("txtPassword").value;
  const user_list = JSON.parse(localStorage.getItem("user_list")) || [];
  const exist =
    user_list.length &&
    JSON.parse(localStorage.getItem("user_list")).some(
      (data) =>
        data.mobile.toLowerCase() === mobile && data.password === password
    );
  if (!exist) {
    alert("Incorrect login credentials..❌");
  } else {
    alert("Your login in successful ..✅");
    document.querySelector("form").reset();
    window.location.href = "../../index.html";
    localStorage.setItem("user_data", JSON.stringify(mobile));
  }
  e.preventDefault();
});
