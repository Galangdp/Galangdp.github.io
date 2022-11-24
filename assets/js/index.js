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



//Contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbzfQ3Y9KvpMbMmGjTw3eJ9Xiq3DoofP7djjbSRV4XqDyOf2nl-mg8ejaJb8wvQShay9oQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })




// Scroll Up
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);