import Blog from "./Blog";

const Blogs = ({blogs}) => {
    return (
        <>
            <h1>Blog</h1>
            {blogs.map((blog) => (<Blog key={blog.id} data={blog}/>))}
        </>
    );
}

export default Blogs;