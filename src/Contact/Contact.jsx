import { useEffect, useRef, useState } from "react";
import "./Contact.scss"
import lottie from "lottie-web";

import astronaut from "../animations/astronaut.json";


export default function Contact() {

    const [message, setMessage] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(true);
    }
    const anime = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: astronaut,
        });
    }, []);
    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="animations" ref={anime}></div>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input text="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP 😊</span>}
                </form>
            </div>
            <footer>&copy; Copyright 2022 kyulee</footer>
        </div>
    )
}
