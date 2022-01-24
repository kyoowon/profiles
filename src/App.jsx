import Intro from "./Intro/Intro";
import Topbar from "./Topbar/Topbar";
import "./App.scss"
import Skill from "./Skill/Skill";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Skill />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
