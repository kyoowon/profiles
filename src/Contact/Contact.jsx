import { useEffect, useRef, useState } from "react";
import "./Contact.scss"
import lottie from "lottie-web";
import emailjs from '@emailjs/browser';

import astronaut from "../animations/astronaut.json";


export default function Contact() {
    const [sendMessage, setSendMessage] = useState(false);
    const [values, setValues] = useState({});
    const handleOnchange  = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues({...values, [name] : value});
        console.log(values)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values)
        emailjs.sendForm( 'profilesContact', 'template_4lttl7f', values, 'user_DsgN3yjkrX5NTveVADLtC').then(() => {
            setSendMessage(true)
        }, (err) => {
            console.log('FAILED...', err);
         });
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
                    <input name="user_name" text="text" placeholder="Name" onChange={handleOnchange} />
                    <input name="user_email" text="text" placeholder="Email" onChange={handleOnchange}/>
                    <textarea name="message" placeholder="Message" onChange={handleOnchange}></textarea>
                    <button type="submit">Send</button>
                    {sendMessage && <span>Thanks, I'll reply ASAP 😊</span>}
                </form>
            </div>
            <footer>&copy; Copyright 2022 kyulee</footer>
        </div>
    )
}
