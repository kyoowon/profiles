import "./Topbar.scss"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DesktopMenu from "./Menu/DesktopMenu";
import MobileMenu from "./Menu/MobileMenu";

export default function Topbar({ darkMode, setDarkMode, MenuOpen,setMenuOpen}) {
    return (
        <nav className={"topBar " + (darkMode && "darkActive ")}>
            <div className="warpper">
                <div className="left">
                    <a href="#intro" className="logo">kyulee</a>
                </div>
                <div className="menuContainer" >
                    <DesktopMenu className="desktop"/>
                    <div className="mobile" onClick={() => setMenuOpen(!MenuOpen)}>
                        <MobileMenu MenuOpen={MenuOpen} darkMode={darkMode}/>
                    </div>
                </div>
                <div className="right">
                    <span onClick={() => (setDarkMode(!darkMode))}>
                        {darkMode ? <WbSunnyIcon /> : <Brightness4Icon />}
                    </span>
                </div>
            </div>
        </nav>
    )
}
