import Blog from "./Blog";
import { useState, useEffect} from "react";
import NetworkError from "./NetworkError";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [networkError, setNetworkError] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/blog/all')
            .then(response => {
                if (!response.ok)
                    throw new Error("An error occurred while fetching the data");
                return response.json();
            })
            .then(data => setBlogs(JSON.parse(data)))
            .catch(err => {
                setNetworkError(true);
            });

    }, []);

    return (
        <>
            <h1>Blog</h1>
            { networkError ? <NetworkError contactInfo="ajdinrs.becirovic@gmail.com" /> :
                blogs.map((blog) => (
                    <Blog key={blog.id} data={blog}/>
                ))}
        </>
    );
}

export default Blogs;