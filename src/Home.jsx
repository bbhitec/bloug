import { useEffect, useState } from "react"
import BlogList from "./BlogList"

const Home = () => {
    // blog list to be populated frmm the backend
    const [blogs, setBlogs] = useState(null)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        fetch("http://localhost:3000/blogs")
        .then(res => {
            return res.json();
        })
        .then(data => {
            // console.log(data)
            setBlogs(data)
        })
    }, [])

    return (
        <div className="home">
            {/* use this logical check to protect the inner .map from async blogs list */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
        </div>
    )
}

export default Home