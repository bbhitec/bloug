import { useParams } from "react-router-dom"
import useFetch from "./useFetch"


const BlogPage = () => {
    const { id } = useParams(); // access router endpoint parameters
    const { isLoading, errorMessage, data: blog } = useFetch("https://my-json-server.typicode.com/bbhitec/bloug-json-server/blogs/" + id)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        // setBlogs(newBlogs)
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading Blog...</div>}
            {errorMessage && <div>{errorMessage}</div>}

            {blog &&
                <article>
                    <h2>{blog.title}</h2>
                    <p>by {blog.author}</p>
                    <p>{blog.body}</p>

                    {/* <Link to="/">Home</Link> */}


                    <button onClick={() => (null)}>Back</button>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>



                </article>
            }
        </div>
    )
}

export default BlogPage