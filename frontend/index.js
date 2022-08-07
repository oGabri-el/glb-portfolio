const portfolioNav = document.querySelector('#portfolio-nav');
const portfolioNavStyle = portfolioNav.style;
let textContainer = document.querySelector(".textContainer");
const iconContainer = document.querySelector(".icon-container");

function openNav(){
    if (portfolioNavStyle.display === "block") {
        portfolioNavStyle.display = "none";
    } else {
        portfolioNavStyle.display = "block";
    }

}

// function showInfo() {
//  if (textContainer1.style.display === "none"){

//    textContainer1.style.display = "block";
//  } else{
//   textContainer1.style.display = "none";}
// }
function showInfo1() {
 if (textContainer.style.width === "10px"){
   textContainer.style.width = "500px";
   textContainer.style.opacity = 1;
   textContainerText.style.opacity = 1;

 } else{
   textContainer.style.width = "10px";
   textContainer.style.opacity = 0;
   textContainerText.style.opacity = 0;
}}
function showInfo2() {
 if (textContainer.style.width === "10px"){
   textContainer.style.width = "500px";
   textContainer.style.opacity = 1;
   textContainerText.style.opacity = 1;

 } else{
   textContainer.style.width = "10px";
   textContainer.style.opacity = 0;
   textContainerText.style.opacity = 0;
}}
function showInfo3() {
 if (textContainer.style.width === "10px"){
   textContainer.style.width = "500px";
   textContainer.style.opacity = 1;
   textContainerText.style.opacity = 1;

 } else{
   textContainer.style.width = "10px";
   textContainer.style.opacity = 0;
   textContainerText.style.opacity = 0;
}}