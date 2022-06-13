import { insert } from "./main.js";

export const realFileInput = document.getElementById("fileInput");
export const customFileInputContainer = document.getElementById("customFileInput");
const customFileInput = document.querySelector("#customFileInput label");

window.addEventListener("drop", event => event.preventDefault());
window.addEventListener("dragover", event => event.preventDefault());

realFileInput.addEventListener("input", ({ target }) => {
    const file = target.files[0];
    insert(file);
});

customFileInput.addEventListener("drop", ({ target, dataTransfer }) => {
    const file = dataTransfer.files[0];
    target.classList.remove("highlighted");
    insert(file);
});

customFileInput.addEventListener("dragover", ({ target }) => {
    target.classList.add("highlighted");
});
