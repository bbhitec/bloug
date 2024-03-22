import { useState } from "react"
import { useHistory } from "react-router-dom"


const Create = ({backendUrl: url} = props) => {
    const [title, setTitle] = useState("Your Blog Title")
    const [body, setBody] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rerum assumenda eius similique eos? Ad obcaecati doloremque perferendis pariatur culpa!")
    const [author, setAuthor] = useState("Ingrid Delaney")
    const [isPosting, setIsPosting] = useState(false)
    const hist = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()  // prevent refresh on click

        const newBlog = { title, body, author } // prepare the blog to submit
        setIsPosting(true)  // loading/posting state feedback

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newBlog)
        }).then( () => {
            setIsPosting(false)
            console.log("new blog added")
            hist.push("/")  // return to home page on successful add
        })
    }

    return (
        <div className="create">
            <h2> Write a New Bloug </h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Content:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Ingrid Delaney">Ingrid Delaney</option>
                    <option value="Finley Hubbard">Finley Hubbard</option>
                </select>

                { !isPosting && <button>Add Bloug</button> }
                { isPosting && <button>Adding Bloug...</button> }

            </form>
        </div>
    )
}

export default Create