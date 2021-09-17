const nav = document.querySelector("nav");
const navOffset = document.getElementById("social-icons").offsetTop;

window.addEventListener("scroll", function () {
    const offset = window.pageYOffset;

    if (offset > navOffset) {
        nav.classList.add("scroll");
    }
    else {
        nav.classList.remove("scroll");
    }
});

function menuToggle() {
    const navLinks = document.getElementById("nav-links");

    navLinks.classList.toggle("active");
}

function deToggle() {
    const navLinks = document.getElementById("nav-links");

    navLinks.classList.remove("active");
}