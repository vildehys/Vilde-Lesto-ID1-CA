//NOROFF,9-9/21,"SIMPLE FORM VALIDATION", JAVASCRIPT, NOROFF

const paymentForm = document.querySelector("#signUpForm");
const name = document.querySelector("#name");
const errorName = document.querySelector("#errorName");
const cardNumber = document.querySelector("#cardNumber");
const errorCard = document.querySelector("#errorCard");
const date = document.querySelector("#date");
const errorDate = document.querySelector("#errorDate");
const cvc = document.querySelector("#cvc");
const errorCvc = document.querySelector("#errorCvc");
const submitForm = document.querySelector("submit-form")



function signUpFormValidation() {
    event.preventDefault()

    if(checkLength(name.value, 0) === true) {
        errorName.style.display = "none";
    }
    else {
        errorName.style.display = "block";

    }

    if(checkLength(subject.value, 24) === true) {
        errorSubject.style.display = "none";
    }
    else {
        errorSubject.style.display = "block";

    }


    if(checkLength(address.value, 9) === true){
        errorAddress.style.display = "none";
    }
    else {
        errorAddress.style.display = "block";

    }

    if(emailValidation(email.value)) {
        errorEmail.style.display = "none";
    }
    else {
        errorEmail.style.display = "block";

    }

    //console.log("check");
    
}


function emailValidation(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
  }


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}

// function submitForm() {
    // submitForm.innerHTML = "Your form has successfully been submitted. Thank you for your request."
// }

// setTimeout(submitForm, 2500);

signUpForm.addEventListener("submit", signUpFormValidation);