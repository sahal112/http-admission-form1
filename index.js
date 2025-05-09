const activeButton = document.querySelector("button");
const activeLink = document.querySelector(".link")

activeLink.addEventListener("click", () => {
    activeLink.classList.add("link:hover")
})

activeButton.addEventListener("click", () => {
    activeButton.classList.add("button-hover")
})