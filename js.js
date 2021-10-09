//NOROFF,9-9/21,"SIMPLE FORM VALIDATION", JAVASCRIPT, NOROFF

const contactForm = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const errorFirstName = document.querySelector("#errorFirstName");
const lastName = document.querySelector("#lastName");
const errorLastName = document.querySelector("#errorlastName");
const email = document.querySelector("#email");
const errorEmail = document.querySelector("#errorEmail");
const subject = document.querySelector("#subject");
const errorSubject = document.querySelector("#errorSubject");
const text = document.querySelector("#text");
const errorText = document.querySelector("#errorText");




function contactFormValidation() {
    event.preventDefault()

    if(checkLength(firstName.value, 0) === true) {
        errorFirstName.style.display = "none";
    }
    else {
        errorFirstName.style.display = "block";

    }

    if(checkLength(lastName.value, 0) === true) {
        errorLastName.style.display = "none";
    }
    else {
        errorLastName.style.display = "block";

    }

    if(checkLength(subject.value, 24) === true) {
        errorSubject.style.display = "none";
    }
    else {
        errorSubject.style.display = "block";

    }


    if(checkLength(text.value, 9) === true){
        errorText.style.display = "none";
    }
    else {
        errorText.style.display = "block";

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

contactForm.addEventListener("submit", contactFormValidation);