import "./MobileMenu.scss"

export default function MobileMenu({MenuOpen, darkMode}) {
    return (
        <div className={"mobilemenu " + (MenuOpen && "menuActive ")}>
            <span className={"line1 " + (darkMode && "darkmodeActive ")}></span>
            <span className={"line2 " + (darkMode && "darkmodeActive ")}></span>
            <span className={"line3 " + (darkMode && "darkmodeActive ")}></span>
        </div>
    )
}
