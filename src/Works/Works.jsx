import "./Works.scss"
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { featuredPortfolio } from "../data"
import starSkin from "../animations/star-skin.json";
import lottie from "lottie-web";
import { useRef, useState, useEffect } from "react";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [projectData, setProjectData] = useState(featuredPortfolio);
    const anime = useRef (null);
    useEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: starSkin,
        });
    }, []);
    const handleClick = (way) =>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
        : setCurrentSlide(currentSlide < projectData.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {projectData.map(d => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <span><LanguageIcon /></span>
                                    <h2>{d.title}</h2>
                                    <ul>
                                        {d.desc.map(description => (
                                            <li>{description}</li>
                                        ))}
                                    </ul>
                                    <div className="icon">
                                        <a href={d.github}><img src={`${process.env.PUBLIC_URL}/assets/githubicon.png`}/></a>
                                        <a href={d.notion}><img src={`${process.env.PUBLIC_URL}/assets/notionsicon.png`}/></a>
                                        <a href={d.link}><img src={`${process.env.PUBLIC_URL}/assets/pageicon.png`}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ArrowBackIosIcon className="arrowIcon left" fontSize="large" onClick={() =>handleClick("left")} />
            <ArrowForwardIosIcon className="arrowIcon right" fontSize="large" onClick={() =>handleClick("right")} />
            <div className="animations" ref={anime}></div>
        </div>
    )
}
