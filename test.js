/**
 * Created by hongnhung on 23/06/2014.
 */
var container = document.getElementById("container");
//container.setAttribute("align","right");

//var title = document.getElementById(title);
//console.log(title.innerHTML);

var arrayh2 = container.getElementsByTagName("h2");
arrayh2[0].innerHTML = "Nhung ";
arrayh2[1].innerHTML = "Back Khoa"

//Creating the elements
var newh1 = document.createElement("h1");
var newp = document.createElement("p");

newh1.innerHTML = "Nguyen Nhung";
//newp.innerHTML = "Co nhung thu ko the biet trc dc";

var newp1 = document.createTextNode("CO nhung thu ko the biet trc dc");
newp.appendChild(newp1);

document.getElementById("second").appendChild(newh1);
document.getElementById("second").appendChild(newp);

//ClickAndLoad
document.onclick = function(){
 alert("You click somewhere in the page");

}
function clickimg(){
    var img = document.getElementById("abc");
    img.onclick= function (){
        alert("nhung ");
    }

}
window.onload = function(){
    clickimg();
}
var emailmain = document.getElementById("emailmain");
emailmain.onfocus = function(){
    if(emailmain.value == "linh"){
        emailmain.value =="nhung";
    }
}
emailmain.onblur = function(){
    if(emailmain.value == "nhung"){
        emailmain.value = "12345"
    }
}
function message(){
    alert("123456");

}
setTimeout(message,2000);
var myImg = document.getElementById("abc");
var imgA = ["img/UNTITLED.jpg","img/bb.jpg","img/xanhla.jpg"];
var index = 0;
function changeimg(){
    myImg.setAttribute("src",imgA[index]);
    index++;
    if(index>=imgA.length){
        index= 0;
    }
}
var hand = setInterval(changeimg,2000);
myImg.onclick = function(){
    clearInterval(hand);
}
var myArray = ["Nguyen Nhung","Nhat Linh","Thanh Huong"];
var index = 0;

function myFunciton(){
    var newMess = myArray[index];
    var messElement = document.getElementById("mess");
    messElement.innerHTML = newMess;
    index++;
    if(index>=myArray.length){
        index=0;
    }

}
window.onload = function(){
    setInterval(myFunciton,2000);
}
function myFunciton() {
    document.getElementById("login");
    if (document.getElementById("email").value ==""){
        document.getElementById("error").innerHTML = "Please provide at least an email";
        return false;
    }else {
        document.getElementById("error").innerHTML="";
        return true;
    }
}
window.onload = function(){
    myFunciton();
}
var ul = document.getElementById("group-ul");