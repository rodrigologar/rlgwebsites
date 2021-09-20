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
    const togglerImage = document.getElementById("toggler-image");

    navLinks.classList.toggle("active");
    togglerImage.classList.toggle("active");
}

function deToggle() {
    const navLinks = document.getElementById("nav-links");
    const togglerImage = document.getElementById("toggler-image");

    navLinks.classList.remove("active");
    togglerImage.classList.remove("active");
}