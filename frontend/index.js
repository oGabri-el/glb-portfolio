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