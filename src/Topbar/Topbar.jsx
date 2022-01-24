import "./Topbar.scss"

export default function Topbar() {
    return (
        <div className="topBar">
            <div className="warpper">
                <div className="left">
                    <a href="#intro" className="logo">kyulee</a>
                    <div className="itemContainer"></div>
                </div>
                <div className="right">
                    <h2>this is right</h2>
                </div>
            </div>
        </div>
    )
}
