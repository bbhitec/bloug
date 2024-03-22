import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null) // blog list to be populated frmm the backend
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        // in order to not update a state on an unmounted component,
        // we cancel fetch on a re-route
        const abortContr = new AbortController()

        setTimeout(() => {
            fetch(url, { signal: abortContr.signal })
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
                    // do not update the state on an abort
                    if (err.name === "AbortError") {
                        console.log("Fetch aborted")
                    } else {
                        setErrorMessage(err.message)
                        setIsLoading(false)
                    }
                })
        }, 1000)
        return () => abortContr.abort()
    }, [url]) // reload upon endpoint change


    return { isLoading, errorMessage, data }
}

export default useFetch