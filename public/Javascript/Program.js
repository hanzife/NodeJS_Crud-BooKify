//SIGN UP
function SignUP() {
  var user_Name = document.forms["form_signup"]["userName"].value;
  var password = document.forms["form_signup"]["Password"].value;
  var c_password = document.forms["form_signup"]["CPasswrd"].value;
  var password_checker = document.getElementById("CPasswrd");
  if (password != c_password) {
    password_checker.innerHTML = "password not match";
  } else if (user_Name == "" || password == "" || c_password == "") {
    document.getElementById("InfoPopUp").innerHTML =
      '"Please Fill in All Information"';
    document.getElementById("popUp").style.display = "block";
    document.getElementById("popUp").style.backgroundColor = "red";
  } else {
    document.getElementById("popUp").style.backgroundColor = "green";
    document.getElementById("popUp").style.display = "block";
    document.getElementById("InfoPopUp").innerHTML =
      '"Account Verification Pending, Check your email!"';
  }
  // password_checker.innerHTML = "";
}

function hide() {
  var popup = document.getElementById("popUp");
  if (popup.style.display == "block") {
    popup.style.display = "none";
  }
}
