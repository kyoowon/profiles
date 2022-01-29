import { useState } from "react";
import "./Contact.scss"

export default function Contact() {

    const [message, setMessage] = useState(false);
    const handleSubmit = (event) =>{
        event.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://via.placeholder.com/300" alt=""/>
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
