import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch"


const BlogPage = ({backendUrl: url} = props) => {
    const { id } = useParams(); // access router endpoint parameters
    const { isLoading, errorMessage, data: blog } = useFetch(url + id)
    const hist = useHistory()

    const handleDelete = (id) => {
        fetch(url + blog.id, {
            method: "DELETE"
        }).then(() => {
            hist.push("/")  // redirect from deleted page
        })
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