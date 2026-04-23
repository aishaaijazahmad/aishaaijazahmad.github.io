const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("icon");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    icon.textContent = savedTheme === "dark" ? "☀" : "☾";
} else {
    icon.textContent = "☾"; // default
}

// Toggle theme
toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");

    const newTheme = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    icon.textContent = newTheme === "dark" ? "☀" : "☾";
});
