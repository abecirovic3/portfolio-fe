import { useState, useEffect } from "react";
import APIRoute from "./APIRoute";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [networkError, setNetworkError] = useState(false);

    useEffect(() => {
        fetch(`${APIRoute}/skill/all`)
            .then(response => {
                if (!response.ok)
                    throw new Error("An error occurred while fetching the data");
                return response.json();
            })
            .then(data => setSkills(JSON.parse(data)))
            .catch(err => {
                setNetworkError(true);
            });

    }, []);
    return (
        <>
            <h1>Skills</h1>
            {networkError ?
            <div>
                <h3>Most of my time at collage I worked with C++ and Java, but I'm comfortable with many other technologies</h3>
                <h3>I am familiar with Git and Github</h3>
                <h3>I'm used to Linux and working with the terminal :)</h3>
                <h3>Besides my native language, I speak English and German.</h3>
                <h3>I am a team player, open minded and always open for a good laugh</h3>
                <h3>Bellow are listed all the technologies I worked with and the skill level I'd say I'm having based on the
                    number of projects and the time I've spent working with each of them</h3>
            </div> :
                <div>
                    { skills.map((skill) => ( <h3 key={skill.id}>{skill.description}</h3> ))}
                </div>
            }

            <hr />
        </>
    );
}

export default Skills;