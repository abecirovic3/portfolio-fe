import Technology from "./Technology";
import { useState, useEffect} from "react";

const Technologies = () => {
    const [technologies, setTechnologies] = useState([]);
    const [networkError, setNetworkError] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/technology/all')
            .then(response => {
                if (!response.ok)
                    throw new Error("An error occurred while fetching the data");
                return response.json();
            })
            .then(data => setTechnologies(JSON.parse(data)))
            .catch(err => {
                setNetworkError(true);
            });

    }, []);

    return (
        <>
            <h1>Technologies I worked with</h1>
            <h3>With listing all of these technologies I just want to say that I have a basic understanding of all of them,
                and that I'm open to working with any and getting more skilled at them when needed.</h3>
            { networkError ? <h3>Network error occurred, couldn't load technologies :(</h3> :
            technologies.map((technology) => (
                <Technology key={technology.id} data={technology}/>
            ))}
        </>
    );
}

export default Technologies;