// modules/theme.js

const root = document.querySelector("html");

export const toggleTheme = (event) => {
    if (root.classList.contains("light")) {
        root.classList.remove("light");
        root.classList.add("dark");
        event.target.previousElementSibling.textContent = "Light";
        event.target.src = "./assets/icons/icon-sun.svg";
    } else {
        root.classList.remove("dark");
        root.classList.add("light");
        event.target.previousElementSibling.textContent = "Dark";
        event.target.src = "./assets/icons/icon-moon.svg";
    }
};