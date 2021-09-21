import ImageGallery from "./ImageGallery";
import { useState } from "react";

const Blog = ( { data } ) => {
    const [blogExpanded, setBlogExpanded] = useState(false);
    const [blogImages, setBlogImages] = useState([]);

    const toggleBlogContainer = () => {
        setBlogExpanded(!blogExpanded);
        fetchBlogImages();
    }

    const fetchBlogImages = () => {
        fetch(`http://localhost:5000/blog/images/all?blogId=${data.id}`)
            .then(response => {
                if (!response.ok)
                    throw new Error("An error occurred while fetching the data");
                return response.json();
            })
            .then(data => setBlogImages(JSON.parse(data)))
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="blog-descr">
            <div className="blog-descr-inner">
                <h2>{data.title}</h2>
                <hr />
                <div className={blogExpanded ? "blog-content-exp" : "blog-content"}>
                    <h3>{blogExpanded ? data.content
                        : data.content.substring(0, Math.floor(data.content.length * 0.75))}</h3>
                </div>

                {blogExpanded && <ImageGallery images={blogImages} />}

                <div className={blogExpanded ? "blog-read-more-exp" : "blog-read-more"}>
                    <p id="read-more" onClick={() => toggleBlogContainer()}>
                        {blogExpanded ? "Show less" : "Read more"}</p>
                </div>
            </div>
        </div>
    );
}

export default Blog;