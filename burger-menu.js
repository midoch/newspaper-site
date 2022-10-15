const nav = document.querySelector("nav");
const menu = document.querySelector(".menu-items");
const burger = document.querySelector("#burger");
burger.addEventListener("click", mobilMenu);


function mobilMenu() {
    if (menu.style.display !== "flex") {
    //hvis nav ul ikke har display:flex
    menu.classList.add("active");
    nav.classList.add("active");
    burger.classList.add("active");
    menu.style.display = "flex"; // så sætter vi display:flex, på nav ul
    burger.firstChild.classList.remove("fa-bars");
    // fa-bars class fjernes som er burger ikoenet, og tilføjer class fa-xmark som er vores kryds ikon
    burger.firstChild.classList.add("fa-circle-xmark");
    } 
    else {
    menu.style.display = "none";
    menu.classList.remove("active");
    nav.classList.remove("active");
    burger.classList.remove("active");
    //hvis menuen allerede er flex, så sætter vi display til none
    burger.firstChild.classList.remove("fa-circle-xmark");
    burger.firstChild.classList.add("fa-bars");
   }
}