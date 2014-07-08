/**
 * Created by hongnhung on 26/06/2014.
 */
//input email
    var emailInput = document.getElementById("email");
    var login = document.getElementById("btn-login");
    var passInput = document.getElementById("pass");

    emailInput.onfocus();
function checkLogin(){
    if (emailInput.value =="hongnhung_donal@yahoo.com"){
        location.href = "../trash/test.html";
    }
    else{
        alert("Kiem tra lai email")
    }
}

/*function checkSubmit(){
    var frm = window.document.login;
    if(frm.email.value == ""){
        alert("Xin vui long nhap Email");
        document.forms["login"].email.onfocus();
        return false;
    }else if(frm.pass == ""){
        alert("Xin vui long nhap Password");
        document.forms["login"].pass.onfocus();
        return false;
    }
    else
    location.href ="test.html";
}

/* function inputLogin(){

    if(emailInput.value == "hongnhung_donal@yahoo.com" && passInput.value == "12345" ){

    }else{
        alert("Vui long kiem tra lai");
    }
}

emailInput.onblur = function(){
    if(emailInput.value == ""){
            emailInput.value ="Enter your email";
    }
};*/
window.onload = function(){
    inputLogin();
    checkSubmit();
    checkLogin();
}

/* function checkMail() {
        document.getElementById("login");
        if (document.getElementById("email").value == "") {
            document.getElementById("error").innerHTML = "Please provide at least an email";
            return false;
        } else {
            document.getElementById("error").innerHTML = "";
            return true;
        }
    }

*/