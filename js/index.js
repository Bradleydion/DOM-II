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
  } else {
    allFtr.style.backgroundColor = "yellow";
  }
});
const loGo = document.querySelector(".logo-heading ");
console.log(loGo);
window.addEventListener("load", (e) => {
  loGo.remove();
});
const story = document.getElementsByClassName("intro");
console.log(story);
window.addEventListener("resize", (e) => {
  story[0].style.backgroundColor = "pink";
  e.stopPropagation();
});
window.addEventListener("keyup",(e)=>{
 navBar.style.backgroundColor="purple";
})
// wheel
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = anotherPhoto;
anotherPhoto.onwheel = zoom;
