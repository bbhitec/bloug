import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
    const { isLoading, errorMessage, data: blogs } = useFetch("http://localhost:3000/blogs")

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

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