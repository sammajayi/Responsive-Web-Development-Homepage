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
    } 
    if (lastName.value.trim() === ""){
       lnameError.style.display = "block";
    }
    if (gender.value.trim() === ""){
        genderError.style.display = "block";
    } 
    if (DOB.value.trim() === ""){
        dobError.style.display = "block";
    }
    if (weight.value.trim() === ""){
        weightError.style.display = "block";
    }
    if (height.value.trim() === ""){
        heightError.style.display = "block";
    }
    if (activity.value.trim() === ""){
        activityError.style.display = "block";
    }
    if (password.value.trim() === ""){
        pwdError.style.display = "block";
    }

    
});


