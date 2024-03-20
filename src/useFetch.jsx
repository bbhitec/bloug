import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null) // blog list to be populated frmm the backend
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                // in case we get a faulty response that doesn't throw an error,
                // we throw it manually (bad path, for example)
                if (!res.ok) {
                    throw Error("Couldn't fetch data")
                }
                return res.json();
            })
            .then(data => {
                setData(data)
                setErrorMessage(null)
                setIsLoading(false)
            })
            .catch(err => {
                setErrorMessage(err.message)
                setIsLoading(false)
            })
    }, [url]) // reload upon endpoint change

    return { isLoading, errorMessage, data }
}

export default useFetch