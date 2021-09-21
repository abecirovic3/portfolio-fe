const Blog = ( { data } ) => {
    return (
        <div className="blog-descr">
            <div className="blog-descr-inner">
                <h2>{data.title}</h2>
                <hr />
                <div className="blog-content">
                    <h3>{data.content.substring(0, Math.floor(data.content.length * 0.75))}</h3>
                </div>

                <div className="blog-read-more">
                    <a href="fullBlog.html">Read more</a>
                </div>
            </div>
        </div>
    );
}

export default Blog;