import Technology from "./Technology";
import {useState} from "react";

const Technologies = () => {
    const [technologies, setTechnologies] = useState([
        {
            id: 1,
            name: "C",
            description: "Whatever, let's test it for now",
            skill: 30,
            imgUrl: "c.png"
        },
        {
            id: 2,
            name: "C++",
            description: "Whatever, let's test it for now",
            skill: 40,
            imgUrl: "cpp.png"
        },
        {
            id: 3,
            name: "C#",
            description: "Whatever, let's test it for now",
            skill: 20,
            imgUrl: "csh.png"
        },
    ]);
    
    return (
        <>
            <h1>Technologies I worked with</h1>
            <h3>With listing all of these technologies I just want to say that I have a basic understanding of all of them,
                and that I'm open to working with any and getting more skilled at them when needed.</h3>

            {technologies.map((technology) => (
                <Technology key={technology.id} data={technology}/>
            ))}
        </>
    );
}

export default Technologies;