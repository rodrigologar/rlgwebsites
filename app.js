const nav = document.querySelector("nav");
const navOffset = document.getElementById("button1").offsetTop;

window.addEventListener("scroll", function () {
    const offset = window.pageYOffset;

    if (offset > navOffset) {
        nav.classList.add("scroll");
    }
    else {
        nav.classList.remove("scroll");
    }
});