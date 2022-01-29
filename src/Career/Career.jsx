import "./Career.scss"


export default function Career() {
    const data = [
        {
            id: 1,
            title: "Chungbuk University",
            img: "https://via.placeholder.com/150",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum numquam, in nemo soluta doloribus deserunt sint cupiditate consequatur, ipsam, provident adipisci quas esse laudantium ad. Beatae voluptas quae voluptatum.",
            period: "2015.03 ~ 2022.02",
            degree: "도시공학 & 소프트웨어학과 복수전공 학사 수료 "
        },
        {
            id: 2,
            title: "42 Seoul",
            img: "https://via.placeholder.com/150",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cum numquam, in nemo soluta doloribus deserunt sint cupiditate consequatur, ipsam, provident adipisci quas esse laudantium ad. Beatae voluptas quae voluptatum.",
            period: "2020.09 ~ 2021.09",
            degree: "2기 Cadet 활동",
        },
    ]

    return (
        <div className="career" id="career">
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
        </div>
    )
}
