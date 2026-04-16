 
const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    burger.addEventListener ("click", () =>{
        navList.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger")
    })
}

navSlide();

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName("form")) {
        form.reset()
    }
};

/* ===== NAV ACTIVE ===== */

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

/* ===== TYPING EFFECT ===== */

const roles = [
  "Junior Frontend Developer",
  "Junior Web Developer",
  "Junior Fullstack Developer",
  "Junior App Developer",
  "Web Designer",
  "UI/UX Designer",
  "Graphic Designer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  const element = document.getElementById("typing");
  if (!element) return;

  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      current = roles[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = roles[i].substring(0, j--);
    }

    element.innerHTML = current;

    if (j === roles[i].length) isDeleting = true;
    if (j === 0) {
      isDeleting = false;
      i++;
    }
  } else {
    i = 0;
  }

  setTimeout(type, 100);
}

type();