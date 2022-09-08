import { useEffect, useState } from 'react';
import './scss/App.scss';
import SideBar from './components/SideBar';
import SvgView from './components/SvgView';

function App() {
  const [selectedState, setSelectedState] = useState({});
  const [hasFile, setHasFile] = useState(false);

  useEffect(() => document.addEventListener("click", selectState), []);

  function unselectAll() {
    const states = document.querySelectorAll("g[data-state]");
    states.forEach(state => state.classList.remove("selected"));
    setSelectedState({});
  }

  function selectState({ target }) {
    const state = target.closest("g[data-state]");
    if (!state) return;

    const stateInfo = state.getAttribute("data-info");
    const { name, abbreviation, capital } = JSON.parse(stateInfo);

    unselectAll();
    setSelectedState({ name: name, abbreviation: abbreviation, capital: capital, shape: state.innerHTML });
    state.classList.add("selected");
  }

  return (
    <>
      <SideBar selectedState = {selectedState} hasFile = {hasFile}/>
      <SvgView hasFile = {hasFile} setHasFile = {setHasFile}/>
    </>
  );
}

export default App;