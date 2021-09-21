const Project = ( { data } ) => {

    let img = {
        default: "img"
    };

    try {
        img = require(`../img/project-logos/${data.imgUrl}`);
    } catch (e) {
        console.log(e);
    }

    return (
        <div className="project-descr">
            <div className="project-descr-inner">
                <h2>{data.name}</h2>
                <hr />
                <img src={img.default} alt={data.imgUrl} />
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