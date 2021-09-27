import Blog from "./Blog";
import NetworkError from "./NetworkError";

const Blogs = ({ blogs }) => {
    return (
        <>
            <h1>Blog</h1>
            { blogs.length === 0 ? <NetworkError contactInfo="ajdinrs.becirovic@gmail.com" /> :
                blogs.map((blog) => (
                    <Blog key={blog.id} data={blog} />
                ))}
        </>
    );
}

export default Blogs;