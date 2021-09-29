import Project from "./Project";

const Projects = ({ projects }) => {
    return (
        <>
            <h1>Projects I worked on</h1>
            <h3>Below are some of the projects I worked on. Some are individual and some are
                team projects. Feel free to check them out over at my GitHub.</h3>
            { projects.map((project) => (
                    <Project key={project.id} data={project}/>
                ))}
        </>
    );
}

export default Projects;