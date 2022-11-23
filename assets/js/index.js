// Experience
const experienceContent = document.getElementsByClassName("experience__content");
const experienceHeader = document.querySelectorAll(".experience__header");

function toggleexperience() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < experienceContent.length; i++) {
        experienceContent[i].className = "experience__content experience__close";
    }

    if (itemClass === "experience__content experience__close") {
        this.parentNode.className = "experience__content experience__open";
    }
}

experienceHeader.forEach((el) => {
    el.addEventListener("click", toggleexperience);
});

// Scroll Up
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);