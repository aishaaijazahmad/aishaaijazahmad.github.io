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
