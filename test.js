/**
 * Created by hongnhung on 23/06/2014.
 */
var container = document.getElementById("container");
//container.setAttribute("align","right");

//var title = document.getElementById(title);
//console.log(title.innerHTML);

//var arrayh2 = container.getElementsById("h2");
//arrayh2[0].innerHTML = "How snocking";
//arrayh2[1].innerHTML = "To be or not to be";
var myArrayTitle = ["How snocking","To be or not to be","So far so good"];
var indexTitle = 0;

function myFuncitontitle() {
    var newTitle = myArrayTitle[indexTitle];
    var titleElement = document.getElementsByTagId("title")
    titleElement.innerHTML = newTitle;
    indexTitle++;
    if (indexTitle >= myArrayTitle.length) {
        iindexTitle = 0;
    }


//Creating the elements
    var newh1 = document.createElement("h1");
    var newp = document.createElement("p");

    newh1.innerHTML = "Login";


    var newp1 = document.createTextNode("Toi yeu Viet Nam");
    newp.appendChild(newp1);

    document.getElementById("second").appendChild(newh1);
//document.getElementById("second").appendChild(newp);

//ClickAndLoad
//document.onclick = function(){
//alert("You click somewhere in the page");

//}
function clickimg() {
        var img = document.getElementsById("abc");
        img.onclick = function () {
            alert("You click image ");
        }

 }

    var emailmain = document.getElementById("email");
    emailmain.onfocus = function () {
        if (emailmain.value == "Your email") {
            emailmain.value == "";
        }
    }
    emailmain.onblur = function () {
        if (emailmain.value == "") {
            emailmain.value = "Your email"
        }
    }
function message() {
        alert("You forget a page");
 }

setTimeout(message, 70000);

    var myImg = document.getElementById("abc");
    var imgA = ["img/UNTITLED.jpg", "img/bb.jpg", "img/xanhla.jpg"];
    var indexImg = 0;

 function changeimg() {
        myImg.setAttribute("src", imgA[indexImg]);
        indexImg++;
        if (indexImg >= imgA.length) {
            indexImg = 0;
        }
    }


    var hand = setInterval(changeimg, 2000);
    myImg.onclick = function () {
        clearInterval(hand);
    }


    function myFuncitoncheck() {
        document.getElementById("login");
        if (document.getElementById("email").value == "") {
            document.getElementById("error").innerHTML = "Please provide at least an email";
            return false;
        } else {
            document.getElementById("error").innerHTML = "";
            return true;
        }
    }
}
window.onload= function(){
    clickimg();
    myFuncitonTitle();
    changeimg();
    myFuncitoncheck()
    setInterval(myFunciton, 2000);
}

