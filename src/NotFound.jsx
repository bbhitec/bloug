import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

const NotFound = () => {
    const hist = useHistory()
    return (
        <div className="not-found">
            <h2>OOPS!</h2>
            <p>This page cannot be found</p>
            <button onClick={() => hist.push("/")}>Back Home</button>
        </div>
    )
}

export default NotFound