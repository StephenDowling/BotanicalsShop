/*
script.js
S Dowling x21189994@student.ncirl.ie
04 04 2023
*/

function validateName(){
    let fn=document.forms["contactusform"]["fname"].value;
    if(fn==""){
        alert("First name cannot be blank")
        return false;
    }
}

function ValidateEmail(email){
    var emailval = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(emailval)){
        document.contactusform.email.focus();
        return true;
    }
    else{
        alert("The email address you entered is invalid");
        document.contactusform.email.focus();
        return false;
    }
}


