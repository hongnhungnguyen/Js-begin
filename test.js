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

newHeading2.innerHTML = "login";

var newParagraphChild = document.createTextNode("Vui long nhap du thong tin");
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

var imgArray = ["img/UNTITLED.jpg", "img/bb.jpg", "img/xanhla.jpg"];
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

//input email
var emailInput = document.getElementById("email");

emailInput.onfocus = function(){
    if(emailInput.value == "Your email"){
            emailInput.value = "";
    }
};

emailInput.onblur = function(){
    if(emailInput.value == ""){
            emailInput.value ="Enter your email";
    }
};

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

window.onload = function(){
    clickImg();
    changeImg();
    changTitle();
    setTimeout(hiddenMyBox,5000);
//    checkMail()
};
