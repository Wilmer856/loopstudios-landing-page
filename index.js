
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener('click', e => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")

    document.querySelector("body").classList.toggle("scroll-lock");
})