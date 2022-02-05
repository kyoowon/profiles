import { useEffect, useRef, useState } from "react";
import "./Contact.scss"
import lottie from "lottie-web";
import emailjs from '@emailjs/browser';

import astronaut from "../animations/astronaut.json";


export default function Contact() {
    const [sendMessage, setSendMessage] = useState(false);
    const form = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target)
        emailjs.sendForm('profilesContact', 'template_ty2yt3n', form.current, 'user_DsgN3yjkrX5NTveVADLtC')
      .then((result) => {
          console.log(result.text);
          setSendMessage(true)
      }, (error) => {
          console.log(error.text);
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
                <form ref={form} onSubmit={handleSubmit}>
                    <input name="user_name" text="text" placeholder="Name" />
                    <input name="user_email" text="text" placeholder="Email"/>
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {sendMessage && <span>Thanks, I'll reply ASAP 😊</span>}
                </form>
            </div>
            <footer>&copy; Copyright 2022 kyulee</footer>
        </div>
    )
}
