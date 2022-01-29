import { useEffect, useRef } from "react";
import shootingStar from "../animations/shootingstar.json";
import lottie from "lottie-web";
import "./Career.scss"


export default function Career() {
    const data = [
        {
            id: 1,
            title: "Chungbuk University",
            img: "https://www.chungbuk.ac.kr/resource/DATA/board/201304/E91C01365489275602.png",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum numquam, in nemo soluta doloribus deserunt sint cupiditate consequatur, ipsam, provident adipisci quas esse laudantium ad. Beatae voluptas quae voluptatum.",
            period: "2015.03 ~ 2022.02",
            degree: "도시공학 & 소프트웨어학과 복수전공 학사 수료 "
        },
        {
            id: 2,
            title: "42 Seoul",
            img: "https://apply.42seoul.kr/uploads/admissions/campus/logo_website/18/logo42.svg",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum numquam, in nemo soluta doloribus deserunt sint cupiditate consequatur, ipsam, provident adipisci quas esse laudantium ad. Beatae voluptas quae voluptatum.",
            period: "2020.09 ~ 2021.09",
            degree: "2기 Cadet 활동",
        },
    ]
    const anime = useRef (null);
    useEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: shootingStar,
        });
    }, []);

    return (
        <div className="career" id="career">
            <div class="custom-shape-divider-top-1643438611">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <h1>Career</h1>
            <div className="container">
                {data.map(d => (
                    <div className="card">
                        <div className="top">
                            <img className="logo" src={d.img} />
                            <strong>{d.title}</strong>
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <div className="h3">
                                <h4>{d.degree}</h4>
                                <h4>{d.period}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="animations" ref={anime}></div>
        </div>
    )
}
