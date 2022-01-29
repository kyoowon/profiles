import "./Skill.scss"
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { webPortfolio } from "../data"
import { useState } from "react";

export default function Skill() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [projectData, setProjectData] = useState(webPortfolio);

    const handleClick = (way) =>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
        : setCurrentSlide(currentSlide < projectData.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className="skill" id="skill">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {projectData.map(d => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <span><LanguageIcon /></span>
                                    <h2>{d.title}</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta obcaecati dolores error maxime ipsum laboriosam natus sequi numquam reprehenderit saepe, nulla alias dicta iusto laborum eos vel quasi ipsa!</p>
                                    <a href={d.link}><strong>project</strong></a>
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
        </div>
    )
}
