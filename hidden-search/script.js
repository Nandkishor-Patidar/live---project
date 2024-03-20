const search = document.querySelector(".search");
const button = document.querySelector("button");
const input = document.querySelector(".text");
button.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
