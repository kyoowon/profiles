import { useEffect, useState } from "react";
import "./Portfolio.scss";
import PortfolioList from "./PortfolioList/PortfolioList";
import { webPortfolio, mobliePortfolio } from "../data"


export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "moblie",
            title: "Moblie App",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(webPortfolio)
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "moblie":
                setData(mobliePortfolio);
                break;
            default:
                setData(webPortfolio);
                break;
        }
    }, [selected]);
    return (
        <div className="portfolio" id="portfolio">
            <h1>portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map((data) => (
                    <div className="item">
                        <img src={data.img} alt="" />
                        <h3>{data.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
