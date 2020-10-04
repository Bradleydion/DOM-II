// Your code goes here
const navBar = document.querySelector(".main-navigation");
navBar.addEventListener("click", (e) => {
  navBar.style.backgroundColor = "teal";
});
navBar.addEventListener("dblclick", (e) => {
  navBar.style.backgroundColor = "#ffffbf";
});
const busPhoto = document.querySelector(".intro img");
busPhoto.addEventListener("mouseenter", (e) => {
  busPhoto.style.transform = "scale(2.5)";
  busPhoto.style.transition = "transform 1s";
});
busPhoto.addEventListener("mouseleave", (e) => {
  busPhoto.style.transform = "scale(1)";
  busPhoto.stle.transition = "transform 1s";
});
const anotherPhoto = document.querySelector(".content-destination img");
console.log(anotherPhoto);
window.addEventListener("scroll", (e) => {
  anotherPhoto.style.transform = "scale(-.1)";
  anotherPhoto.style.transition = "transform 5s";
});

const allFtr = document.querySelector(".footer");
window.addEventListener("keydown", (e) => {
  if (e.key === "a") {
    allFtr.style.backgroundColor = "#D3D3D3";
  } 
  else {
    allFtr.style.backgroundColor = "yellow";
  }
});
