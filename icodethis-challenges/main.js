const checkToggle = document.getElementById("checkToggle");
const checkSpan = document.getElementById("checkSpan");
const checkSVG = document.getElementById("checkSVG");

// toggle checkbox
checkToggle.addEventListener("click", () => {
    checkSpan.classList.toggle("checked--fill");
    checkSVG.classList.toggle("checked--opac");
})

// submit form
const button = document.querySelector("button");
const sumbitPage = document.getElementById("submitPage");

button.addEventListener("click", () => {
    sumbitPage.classList.toggle("open");
})

// close submit
const closeSubmit = document.getElementById("closeSubmit");

closeSubmit.addEventListener("click", () => {
    sumbitPage.classList.toggle("open");
})