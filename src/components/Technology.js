import { useState} from "react";

const Technology = ( { data } ) => {

    let img = {
        default: "img"
    };

    try {
        img = require(`../img/logos/${data.imgUrl}`);
    } catch (e) {
        console.log(e);
    }

    const [skillBarStyle, setSkillBarStyle] = useState({});

    return (
        <div className="tech-descr" onMouseEnter={() => {
            setSkillBarStyle({
                color: "black",
                paddingRight: "5px",
                width: `${data.skill}%`
            });
        }} onMouseLeave={() => {
            setSkillBarStyle({
                color: "transparent",
                paddingRight: "0",
                width: "0"
            });
        }}>
            <img className="div-sep" src={img.default} alt={data.imgUrl} />
                <div className="tech-descr-content">
                    <h4 className="div-sep">{data.description}</h4>
                    <h4 className="div-sep">Skill level:
                        {data.skill < 40 ? " LOW" : data.skill < 80 ? " MEDIUM" : " HIGH"}</h4>
                    <div className="progress-bar-container">
                        <div style={skillBarStyle} className="progress-bar">{data.skill}%</div>
                    </div>
                </div>
        </div>
    );
}

export default Technology;