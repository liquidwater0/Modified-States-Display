const stateNameTextElement = document.getElementById("stateName");
const stateAbbrTextElement = document.getElementById("stateAbbreviation");
const stateCapitalTextElement = document.getElementById("stateCapital");

const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("input", async ({ target }) => {
    const file = target.files[0];
    
    if (!file || file.type != "image/svg+xml") return;
    insert(await file.text());
});

document.addEventListener("click", selectState);

function insert(html) {
    const svgContainer = document.getElementById("svgContainer");
    const app = document.getElementById("app");

    fileInput.style.display = "none";
    app.style.display = "grid";
    svgContainer.insertAdjacentHTML("afterbegin", html);
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