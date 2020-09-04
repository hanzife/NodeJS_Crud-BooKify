var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
    //Hide ReservationForm
    var Reservation = document.getElementsByClassName("Toggle");
    for (var j = 0; j < Reservation.length; j++) {
        Reservation[j].style.display = "none";
    }
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("sections");
    var dots = document.getElementsByClassName("dot");
    var figure = document.getElementsByClassName("Figs");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        figure[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    //Reset Button innerHTMl from APPLY To BOOKNOW
    var btn = document.getElementsByClassName("BookNow");
    for (i = 0; i < btn.length; i++) {
        btn[i].innerHTML = "BOOK NOW";
    }
}
var slideI = 1;
SpaceSlides(slideI);

function plusSlidesI(n) {
    SpaceSlides(slideI += n);
}
function currentSlideI(n) {
    SpaceSlides(slideI = n);
}
function SpaceSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Figs");
    var bars = document.getElementsByClassName("bar");
    if (n > slides.length) { slideI = 1 }
    if (n < 1) { slideI = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < bars.length; i++) {
        bars[i].className = bars[i].className.replace(" activeBar", "");
    }
    slides[slideI - 1].style.display = "block";
    bars[slideI - 1].className += " activeBar";
}

//Button Show Reservation Form
var btnIndex;
function Show(n) {
    //Change Button Value
    //this.value = "Apply"; NOT WORKING
    btnIndex = n;
    var btn = document.getElementsByClassName("BookNow");
    for (i = 0; i < btn.length; i++) {
        var x = btn[i].innerHTML;
        if (x === "BOOK NOW") {
            btn[i].innerHTML = "APPLY";
        }
        else if (x === "APPLY") {
            //Form Validation
            // alert(x);
            //avoid checking Errs - only apply when Property 1 is Booked 
            if (n == 1) {
                validateForm();
            }
        }
        else
            break;
    }
    //Show Form
    for (var i = 0; i < 100; i++) {
        var Reservation = document.getElementsByClassName("Toggle")[i];
        Reservation.style.display = "block";

    }
}
//Form Validation

function validateForm() {
    var f_name = document.forms["form"]["fname"].value;
    var chack_in = document.forms["form"]["CheckIn"].value;
    var n_Members = document.forms["form"]["NoMembers"].value;
    var birthday = document.forms["form"]["Birthday"].value;
    var check_out = document.forms["form"]["Checkout"].value;
    var spans = document.getElementsByClassName("spans");

    //All Spans Checker
    var FullName_Err = document.getElementById("FullName");
    var Checkin_Err = document.getElementById("Checkin");
    var NoMembers_Err = document.getElementById("NoMembers");
    var Birthday_Err = document.getElementById("Birthday");

    var dt = new Date();
    if (f_name == "" && chack_in == "" && n_Members == "" && birthday == "" && check_out == "") {
        for (i = 0; i < spans.length; i++) {
            spans[i].innerHTML = "Name must be filled out";
        }
    }
    if (n_Members == "" || n_Members <= 0 || isNaN(n_Members)) {
        NoMembers_Err.innerHTML = "Enter a Valide Number please!";
    }
    else
        //UpperCase 
        if (f_name != f_name.toUpperCase()) {
            FullName_Err.innerHTML = "Must Be UPPERCASE";
        }
    if (chack_in >= check_out) {
        Checkin_Err.innerHTML = "Check date is Correct";
    }

    // if ((dt.getFullYear() - birthday.getFullYear()) < 18) {
    //     Birthday_Err.innerHTML = "Must be over 18";
    // }
    else {


        BookingConfirmation();
        for (i = 0; i < spans.length; i++) {
            spans[i].innerHTML = "";
        }
    }
}



// var input = document.querySelectorAll(".Toggle input");
// var spns = document.querySelectorAll(".Toggle .spans");
// // input.addEventListner = function () {
// for (var i = 0; i < input.length; i++) {
//     input[i].addEventListener("click", function () {
//         spns[i].value = "";

//     });

// }

function BookingConfirmation() {
    var Booked_Property = document.getElementById("PropertyIMG");

    var f_name = document.forms["form"]["fname"].value;
    var chack_in = document.forms["form"]["CheckIn"].value;
    var n_Members = document.forms["form"]["NoMembers"].value;
    var check_out = document.forms["form"]["Checkout"].value;
    var x = btnIndex;
    if (x == 1) {
        Booked_Property.style.backgroundImage = "url('Images/BuildingA1.jpg')";
    }
    if (x == 2) {
        Booked_Property.style.backgroundImage = "url('Images/BuildingA2.jpg')";
    }
    if (x == 3)
        Booked_Property.style.backgroundImage = "url('Images/BuildingA3.jpg')";


    document.getElementById("fname").innerHTML = f_name;
    document.getElementById("chackin").innerHTML = chack_in;
    document.getElementById("chackout").innerHTML = check_out;
    document.getElementById("NoMmbr").innerHTML = n_Members;

    var Modal = document.getElementById("ModalForm");
    Modal.style.display = "block";
    //ModalToggle
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        ModalForm.style.display = "none";

    }
    window.onclick = function (event) {
        if (event.target == ModalForm) {
            ModalForm.style.display = "none";

        }
    }
    if (Modal.style.display === "none") {

    }
}




//SIGN UP
function SignUP() {
    var user_Name = document.forms["form_signup"]["userName"].value;
    var password = document.forms["form_signup"]["Password"].value;
    var c_password = document.forms["form_signup"]["CPasswrd"].value;
    var password_checker = document.getElementById("CPasswrd");
    if (password != c_password) {
        password_checker.innerHTML = "password not match";
    }
    else if (user_Name == "" || password == "" || c_password == "") {

        document.getElementById("InfoPopUp").innerHTML = "\"Please Fill in All Information\"";
        document.getElementById("popUp").style.display = "block";
        document.getElementById("popUp").style.backgroundColor = "red";

    }
    else {
        document.getElementById("popUp").style.backgroundColor = "green";
        document.getElementById("popUp").style.display = "block";
        document.getElementById("InfoPopUp").innerHTML = "\"Account Verification Pending, Check your email!\"";
    }
    // password_checker.innerHTML = "";
}

function hide() {
    var popup = document.getElementById("popUp");
    if (popup.style.display == "block") {
        popup.style.display = "none";
    }
}

