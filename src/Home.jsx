import { useEffect, useState } from "react"
import BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs] = useState(null) // blog list to be populated frmm the backend
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        fetch("http://localhost:3000/blogs")
            .then(res => {
                // in case we get a faulty response that doesn't throw an error,
                // we throw it manually (bad path, for example)
                if (!res.ok) {
                    throw Error("Couldn't fetch data")
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data)
                setErrorMessage(null)
                setIsLoading(false)
            })
            .catch(err => {
                setErrorMessage(err.message)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="home">
            {isLoading && <div>Loading Blogs...</div>}
            {errorMessage && <div>{errorMessage}</div>}
            {/* use this logical check to protect the inner .map from async blogs list */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}

        </div>
    )
}

export default Home