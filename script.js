const but = document.getElementById("but");
const heading = document.querySelector(".heading");
const oderList = document.querySelectorAll("li");
const nav = document.querySelector("nav");

let show = 1;
let mood = 0;

const text = document.getElementById("li_text");

const sun = document.getElementById("li_text");

// const moon = document.getElementById("moon");

text.addEventListener("click", () => {
  if (mood == 1) {
    text.innerText = "light";
    // sun.style.display = "block";
    console.log("print light color");
    nav.style.backgroundColor = "blue";

    mood = 0;
  } else if (mood == 0) {
    text.innerText = "dark";
    nav.style.backgroundColor = "BLACK";
    heading.style.color = "red";
    console.log("print dark color");
    mood = 1;
  }
});

but.addEventListener("click", () => {
  if (show == 1) {
    console.log("on");
    show = 0;
    nav.style.width = "100%";
    nav.style.height = "11rem";
    oderList.style.display = "block";
    heading.style.display = "none";
  } else if (show == 0) {
    show = 1;
    console.log("off");
    nav.style.height = "4rem";
    heading.style.display = "block";
  }
});
