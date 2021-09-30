import Technology from "./Technology";

const Technologies = ({technologies}) => {
    return (
        <>
            <h1>Technologies I worked with</h1>
            <h3>Below are listed all the technologies I’ve worked with and the skill level I'd say I'm having based
                on the number of projects and the time I've spent working with each of them.
                By listing all of these technologies I just want to say that I have a basic understanding
                of all of them, and that I'm open to working with any and getting more skilled at them
                when needed.</h3>
            {technologies.map((technology) => (
                <Technology key={technology.id} data={technology}/>
            ))}
        </>
    );
}

export default Technologies;