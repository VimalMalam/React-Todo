import React from "react";
import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchTodoData = async () => {
            setIsLoading(true)
            const response = await fetch(url)
            const data = await response.json()
            console.log({ data })
            setData(data)
            setIsLoading(false)
        }

        fetchTodoData();
    }, [url])

    return [data];
}