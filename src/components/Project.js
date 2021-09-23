const Project = ( { data } ) => {

    let logo = {
        default: "img"
    };

    try {
        if (data.imgUrl.includes("http"))
            logo.default = data.imgUrl;
        else
            logo = require(`../img/project-logos/${data.imgUrl}`);
    } catch (e) {
        console.log(e);
    }

    return (
        <div className="project-descr">
            <div className="project-descr-inner">
                <h2>{data.name}</h2>
                <hr />
                <img src={logo.default} alt={"logo"} />
                <h3>{data.description}</h3>
                <hr />
                <h3>Technologies used</h3>
                <h4>{data.technologies}</h4>
                <hr />
                <a href={data.githubLink} target="_blank" rel="noreferrer">Check it out on GitHub</a>
            </div>
        </div>
    );
}

export default Project;