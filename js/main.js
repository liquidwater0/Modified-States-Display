import { customFileInputContainer } from "./fileInput.js";

const stateNameTextElement = document.getElementById("stateName");
const stateAbbrTextElement = document.getElementById("stateAbbreviation");
const stateCapitalTextElement = document.getElementById("stateCapital");

document.addEventListener("click", selectState);

export async function insert(file) {
    if (!file || file.type != "image/svg+xml") return;

    const svgContainer = document.getElementById("svgContainer");
    const main = document.getElementById("main");

    customFileInputContainer.style.display = "none";
    main.style.display = "grid";
    svgContainer.insertAdjacentHTML("afterbegin", await file.text());
}

function selectState({ target }) {
    const state = target.parentElement;
    const infoJSON = JSON.parse(state.getAttribute("data-info"));
    
    if (!target.closest(".state-info")) unselectAll();
    if (state.tagName !== "G" && !state.hasAttribute("data-state")) return;

    state.classList.add("selected");
    insertStateInfo(infoJSON);
}

function insertStateInfo({ name, abbreviation, capital }) {
    stateNameTextElement.textContent = name;
    stateAbbrTextElement.textContent = abbreviation;
    stateCapitalTextElement.textContent = capital;
}

function unselectAll() {
    const states = document.querySelectorAll("g[data-state]");
    states.forEach(state => state.classList.remove("selected"));

    stateNameTextElement.textContent = "";
    stateAbbrTextElement.textContent = "";
    stateCapitalTextElement.textContent = "";
}
