const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");
    if (current === "dark") {
        document.body.setAttribute("data-theme", "light");
    } else {
        document.body.setAttribute("data-theme", "dark");
    }
});
