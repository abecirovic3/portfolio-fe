import Technology from "./Technology";

const Technologies = ({ technologies }) => {
    return (
        <>
            <h1>Technologies I worked with</h1>
            <h3>With listing all of these technologies I just want to say that I have a basic understanding of all of them,
                and that I'm open to working with any and getting more skilled at them when needed.</h3>
            { technologies.map((technology) => (
                <Technology key={technology.id} data={technology}/>
                ))}

        </>
    );
}

export default Technologies;