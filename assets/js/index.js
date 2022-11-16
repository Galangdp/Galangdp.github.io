



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