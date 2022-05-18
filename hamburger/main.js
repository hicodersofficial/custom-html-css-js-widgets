const hamburger = document.querySelector(".hamburger");
const layers = document.querySelectorAll(".hamburger span");

hamburger.addEventListener("click", (e) => {
  layers.forEach((layer) => layer.classList.toggle("active"));
});
