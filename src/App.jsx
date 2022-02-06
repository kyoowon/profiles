import Intro from "./Intro/Intro";
import Topbar from "./Topbar/Topbar";
import "./App.scss"
import Portfolio from "./Portfolio/Portfolio";
import { useState } from "react";
import Career from "./Career/Career";
import Contact from "./Contact/Contact";
import Works from "./Works/Works";
import SideMenu from "./SideMenu/SideMenu";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <div className={"app " + (darkMode && "active")}>
      <Topbar darkMode={darkMode} setDarkMode={setDarkMode} MenuOpen={MenuOpen} setMenuOpen={setMenuOpen}/>
      <SideMenu MenuOpen={MenuOpen} darkMode={darkMode}/>
      <section className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Career />
        <Contact />
      </section>
    </div>
  );
}

export default App;
