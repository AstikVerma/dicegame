var texttochange=document.querySelector("body > div > h1");

var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;

if(a>b) texttochange.innerHTML="🚩Player 1 Won.";
else if(a<b) texttochange.innerHTML="Player 2 Won.🚩";
else texttochange.innerHTML="Draw";

document.querySelector(".dice .img1").setAttribute("src","images/dice"+a+".png");
document.querySelector(".dice .img2").setAttribute("src","images/dice"+b+".png");