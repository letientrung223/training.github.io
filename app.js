const toggle =document.querySelector(".header-toggle");
const menu = document.querySelector(".menu");
const toggleClose = document.querySelector(".menu-close");
toggle.addEventListener("click",handleToggleMenu);
toggleClose.addEventListener("click",handleToggleMenu);


function handleToggleMenu(e){
    console.log("hello")
    menu.classList.toggle("is-show");
}