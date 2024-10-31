const form = document.getElementById('myForm')
const submitButton = document.getElementById('submitButton');

const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const gender = document.getElementById('gender-dropdown');
const DOB = document.getElementById('date-of-birth');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const activity = document.getElementById('activity-dropdown');
const password = document.getElementById('password');



form.addEventListener('submit', (e) => {
    e.preventDefault();

const fnameError = document.getElementById('fname-error');
const lnameError = document.getElementById('lname-error');
const genderError = document.getElementById('gender-error');
const dobError = document.getElementById('dob-error');
const weightError = document.getElementById('weight-error');
const heightError = document.getElementById('height-error');
const activityError = document.getElementById('activity-error');
const pwdError = document.getElementById('pwd-error');




    if (firstName.value.trim() === ""){
        fnameError.style.display = "block";
    } else {
        fnameError.style.display = "none";
    }
    if (lastName.value.trim() === ""){
       lnameError.style.display = "block";
    } else {
        lnameError.style.display = "none";
    }
    if (gender.value.trim() === ""){
        genderError.style.display = "block";
    } else {
        genderError.style.display = "none";
    }
    if (DOB.value.trim() === ""){
        dobError.style.display = "block";
    } else {
        dobError.style.display = "none";
    }
    if (weight.value.trim() === ""){
        weightError.style.display = "block";
    } else {
        weightError.style.display = "none";
    }
    if (height.value.trim() === ""){
        heightError.style.display = "block";
    } else {
        heightError.style.display = "none";
    }
    if (activity.value.trim() === ""){
        activityError.style.display = "block";
    } else {
        activityError.style.display = "none";
    }
    if (password.value.trim() === ""){
        pwdError.style.display = "block";
    } else if (!password.value.match(/[a-z]/)) {
        pwdError.textContent = "Password must contain at least one lowercase letter.";
    } else if (!password.value.match(/[A-Z]/)) {
        pwdError.textContent = "Password must contain at least one uppercase letter.";
    } else if (!password.value.match(/[0-9]/)) {
        pwdError.textContent = "Password must contain at least one number.";
    } else if (!password.value.match(/[^a-zA-Z\d]/)) {
        pwdError.textContent = "Password must contain at least one special character.";
    } else if (password.value.length < 8) {
        pwdError.textContent = "Password must be at least 8 characters";
    }
    else {
        pwdError.textContent = ""; // Clear error if all conditions are met
    }

 
    
    
});


