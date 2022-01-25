import "./Topbar.scss"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export default function Topbar({ darkMode, setDarkMode }) {
    return (
        <div className={"topBar " + (darkMode && "active")}>
            <div className="warpper">
                <div className="left">
                    <a href="#intro" className="logo">kyulee</a>
                </div>
                <div className="menuContainer">
                    <ul className="menu">
                        <li><a href="#intro">intro</a></li>
                        <li><a href="#skill">skill</a></li>
                        <li><a href="#portfolio">portfolio</a></li>
                        <li></li>
                    </ul>
                </div>
                <div className="right">
                    <span onClick={() => (setDarkMode(!darkMode))}>
                        {darkMode ? <WbSunnyIcon /> : <Brightness4Icon />}
                    </span>
                </div>
            </div>
        </div>
    )
}
