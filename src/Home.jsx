import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
    const { isLoading, errorMessage, data: blogs } = useFetch("https://my-json-server.typicode.com/bbhitec/bloug-json-server/blogs")

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    return (
        <div className="home">

            {/* using logical check for a conditional rendering */}
            {isLoading && <div>Loading Blogs...</div>}
            {errorMessage && <div>{errorMessage}</div>}

            {/* also, use this logical check to protect the inner .map from async blogs list */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}

        </div>
    )
}

export default Home