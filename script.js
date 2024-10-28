const form = document.getElementById('myForm')
const submitButton = document.getElementById('submitButton');
let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let genderSelection = document.getElementById('dropdown');
let weight = document.getElementById('weight');
let height = document.getElementById('height');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (firstName.value.trim() === ""){
        alert("Please enter your first name");
    }
    if (lastName.value.trim() === ""){
        alert("Please enter your last name");
    }
    if (genderSelection.value.trim() === ""){
        alert("Select your gender")
    } 
});


