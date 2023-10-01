let add = document.querySelector(".add");
let info = document.querySelector(".info");
let submit = document.querySelector("button[type='submit']")

add.addEventListener("click", display);
submit.addEventListener("click", hide);

function display() {
  info.style.display = "grid";
  info.classList.toggle("show")
}

function hide() {
    info.style.display = "none";
    info.classList.toggle("show")
}