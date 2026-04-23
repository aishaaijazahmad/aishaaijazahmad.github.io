const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("icon");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    icon.src = savedTheme === "dark" ? "assets/sun.svg" : "assets/moon.svg";
} else {
    icon.src = "assets/moon.svg";
}

// Toggle
toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    icon.src = newTheme === "dark" ? "assets/sun.svg" : "assets/moon.svg";
});
