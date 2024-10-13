// script.js

import { fetchUserData } from './modules/api.js';
import { toggleTheme } from './modules/theme.js';
import { updateUserProfile, showToast } from './modules/ui.js';
import { root } from './modules/theme.js';

const form = document.querySelector("form");
const input = document.querySelector("input");
const modeToggle = document.querySelector(".toggle");

modeToggle.addEventListener("click", toggleTheme);

form.noValidate = true;


document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        root.classList.remove("light");
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
        root.classList.add("light");
    }
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (input.validity.valueMissing) {
        return;
    }

    try {
        const data = await fetchUserData(input.value);
        updateUserProfile(data);
    } catch (error) {
        if (error.message.includes("404")) {
            showToast("Couldn't find the user");
        } else {
            showToast("Internet connection Error");
        }
    }
});