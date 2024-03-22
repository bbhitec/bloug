import { Link } from "react-router-dom/cjs/react-router-dom"

const BlogList = ({ title, blogs, handleDelete }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>By: {blog.author}</p>
                        {/* <button onClick={() => handleDelete(blog.id)}>delete</button> */}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList