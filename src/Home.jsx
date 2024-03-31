import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = ({backendUrl: url} = props) => {
    const { isLoading, errorMessage, data: blogs } = useFetch(url)

    return (
        <div className="home">

            {/* using logical check for a conditional rendering */}
            {isLoading && <div>Loading Blogs... <br /> (May take a while on cold launch)</div>}
            {errorMessage && <div>{errorMessage}</div>}

            {/* also, use this logical check to protect the inner .map from async blogs list */}
            {blogs && <BlogList blogs={blogs} title=""/>}

        </div>
    )
}

export default Home