import { useState} from "react";

const Technology = ( { data } ) => {

    let logo = {
        default: "img"
    };

    try {
        if (data.imgUrl.includes("http"))
            logo.default = data.imgUrl;
        else
            logo = require(`../img/logos/${data.imgUrl}`);
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
            <img className="div-sep" src={logo.default} alt={"logo"} />
                <div className="tech-descr-content">
                    <h3 id="tech-descr-text" className="div-sep">{data.description}</h3>
                    <h4 id="tech-descr-text" className="div-sep">Skill level:
                        {data.skill < 40 ? " LOW" : data.skill < 80 ? " MEDIUM" : " HIGH"}</h4>
                    <div className="skill-bar-container">
                        <div style={skillBarStyle} className="skill-bar">{data.skill}%</div>
                    </div>
                </div>
        </div>
    );
}

export default Technology;