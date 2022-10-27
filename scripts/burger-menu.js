const nav = document.querySelector("nav");
const menu = document.querySelector(".menu-items");
const burger = document.querySelector("#burger");
burger.addEventListener("click", mobilMenu);


function mobilMenu() {
    if (menu.style.display !== "flex") {
    //hvis nav ul ikke har display:flex
    menu.style.display = "flex"; // så sætter vi display:flex, på nav ul
    } 
    else {
    menu.style.display = "none";
   }
}