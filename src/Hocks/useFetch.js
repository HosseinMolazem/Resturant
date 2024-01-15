import { useState, useEffect } from "react";
export const useFetch = (url, method = "GET") => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [option, setoption] = useState(null)

    const postData = (postData) => {
        setoption({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })

    }


    useEffect(() => {
        const fetchData = async(fetchOptin) => {

            setIsLoading(true)

            try {
                const response = await fetch(url, {...fetchOptin })
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const json = await response.json()

                setIsLoading(false)

                setData(json)
                setError(null)
            } catch (err) {
                setIsLoading(false)
                setError(err.message)
            }
        }


        if (method === "GET") {
            fetchData()
        }
        if (method === "POST") {
            fetchData(option)
        }


    }, [url, method, option])

    return { data, isLoading, error, postData }
}