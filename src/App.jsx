import Intro from "./Intro/Intro";
import Topbar from "./Topbar/Topbar";
import "./App.scss"
import Skill from "./Skill/Skill";
import Portfolio from "./Portfolio/Portfolio";
import { useState } from "react";
import Career from "./Career/Career";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={"app " + (darkMode && "active")}>
      <Topbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Skill />
        <Career />
      </div>
    </div>
  );
}

export default App;
