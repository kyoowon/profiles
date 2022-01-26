import "./Intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"


export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        console.log(textRef.current)
        init(textRef.current, { showCursor: false, backDelay: 1400, backSpeed: 60, strings: ["Fontend", "React", "Web"] })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profile_img.png" alt="user" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>KyuWon Lee</h1>
                    <h3><span ref={textRef}>Fontend</span> Developer</h3>
                </div>
            </div>
        </div>
    )
}
