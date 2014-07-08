/**
 * Created by hongnhung on 23/06/2014.
 */
var container = document.getElementById("container");
container.setAttribute("align","left");

//var title = document.getElementById(title);
//console.log(title.innerHTML);

//var arrayh2 = container.getElementsById("h2");
//arrayh2[0].innerHTML = "How snocking";
//arrayh2[1].innerHTML = "To be or not to be";

//message
function message() {
        alert("You forget a page");
}

setTimeout(message, 90000);

// create Element
var newHeading2 = document.createElement("h2");
var newParagraph = document.createElement("p");

newHeading2.innerHTML = "Kiem tra Email";

var newParagraphChild = document.createTextNode("Vui long nhap email");
newParagraph.appendChild(newParagraphChild);

document.getElementById("second").appendChild(newHeading2);
document.getElementById("second").appendChild(newParagraph);

//click img
function clickImg(){
    var imgClick = document.getElementById("abc");
    imgClick.onclick = function(){
        alert("You clicked the img");
    }
}

//change img
var myImg = document.getElementById("abc");

    var imgArray = ["img/UNTITLED.jpg", "img/01.jpg", "img/02.jpg","img/05.jpg","img/03.jpg","img/04.jpg"];
var indexImg = 0;

function changeImg(){
    myImg.setAttribute("src",imgArray[indexImg]);
    indexImg++;
    if(indexImg>=imgArray.length){
        indexImg=0;
    }
}

var handImg = setInterval(changeImg,2000);
myImg.onclick = function(){
    clearInterval(handImg);
};

// change title
var myArrayTitle = ["How snocking","To be or not to be","So far so good"];
var indexTitle = 0;

function changTitle(){
    var newTitle = myArrayTitle[indexTitle];
    var title = document.getElementById("title");
    title.innerHTML=newTitle;
    indexTitle++;
    if(indexTitle>=myArrayTitle.length){
        indexTitle=0;
    }
}
setInterval(changTitle,3000);

// change color and fontWeight
document.getElementById("title").style.color="green";
document.getElementById("title").style.fontWeight = "bold";
document.getElementById("title").style.marginLeft = "30px";



// move box
var movePos = 0;
var moveHand ;


function hiddenMyBox(){
    document.getElementById("jump").style.display = "inline";
    document.getElementById("jump").style.position ="absolute";
    document.getElementById("jump").style.left = "0px";
    document.getElementById("jump").style.top = "100px";
    moveHand = setInterval(moveMyBox,50);

}

function moveMyBox(){
    movePos+=5;
    document.getElementById("jump").style.left = movePos + "px";

    if(movePos > 900){
        clearInterval(moveHand);
        document.getElementById("jump").style.display="";
        document.getElementById("jump").style.position = "";
        document.getElementById("jump").style.left = "";
        document.getElementById("jump").style.top = "";
    }
}

// Create Clock
function show_time(){
    var date,hour,min,sec,data;
    date = new Date();
    hour = date.getHours(); if(hour<10) hour= "0" +hour;
    min = date.getMinutes(); if(min<10) min = "0" + min;
    sec = date.getSeconds(); if(sec<10) sec= "0" + sec;
    data = hour + ":" + min + ":" + sec;
    document.clock.time.value = data ;
    setTimeout("show_time()",1000);
}
//chang Bg-Color
function changBgColor(){
    var mau = prompt("Nhap mau nen cua trang","");
    document.body.style.backgroundColor = mau;
}

//Check mail
var result= document.getElementById("error");
function checkMail() {
    var check = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email = document.getElementById("email");
    if (!check.test(email.value)) {
        result.innerHTML = "Dia chi Email sai";
        email.onfocus();
        return false;
    }
    else {
        alert("Dia chi Email hop le");
    }
}
window.onload = function(){
    changBgColor();
    clickImg();
    changeImg();
    changTitle();
    setTimeout(hiddenMyBox,5000);
    show_time();

    checkMail();

};
