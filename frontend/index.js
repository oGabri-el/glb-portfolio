let portfolioNav = document.querySelector('#portfolio-nav');
let portfolioNavStyle = portfolioNav.style;

function openNav(){
    if (portfolioNavStyle.display === "block") {
        portfolioNavStyle.display = "none";
    } else {
        portfolioNavStyle.display = "block";
    }

}