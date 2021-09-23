import NetworkError from "./NetworkError";
import Project from "./Project";
import { useState, useEffect } from "react";
import APIRoute from "./APIRoute";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [networkError, setNetworkError] = useState(false);

    useEffect(() => {
        fetch(`${APIRoute}/project/all`)
            .then(response => {
                if (!response.ok)
                    throw new Error("An error occurred while fetching the data");
                return response.json();
            })
            .then(data => setProjects(JSON.parse(data)))
            .catch(err => {
                setNetworkError(true);
            });

    }, []);

    return (
        <>
            <h1>Projects I worked on</h1>
            <h3>Below are some of the projects I worked on. Some are individual and some are
                team projects. Feel free to check them out over at my GitHub.</h3>
            { networkError ? <NetworkError contactInfo="ajdinrs.becirovic@gmail.com" /> :
                projects.map((project) => (
                    <Project key={project.id} data={project}/>
                ))}
        </>
    );
}

export default Projects;