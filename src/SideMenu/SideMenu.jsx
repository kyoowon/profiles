import "./SideMenu.scss"

export default function SideMenu({MenuOpen, darkMode}) {
    return (
        <div className={"sidemenu " + (MenuOpen && " active ") + (darkMode && " darkMode ")}>
            <ul>
                <li><a href="#intro">intro</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#works">works</a></li>
                <li><a href="#career">career</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        </div>
    )
}
