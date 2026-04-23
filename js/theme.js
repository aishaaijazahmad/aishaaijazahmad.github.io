const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");
    if (current === "dark") {
        document.body.setAttribute("data-theme", "light");
    } else {
        document.body.setAttribute("data-theme", "dark");
    }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const icon = document.getElementById("icon");

if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    icon.textContent = "☀";
}

toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");

    if (current === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        icon.textContent = "☾";
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        icon.textContent = "☀";
        localStorage.setItem("theme", "dark");
    }
});

const track = document.getElementById("slider-track");
const left = document.querySelector(".arrow.left");
const right = document.querySelector(".arrow.right");

const scrollAmount = 300;

right.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

left.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
