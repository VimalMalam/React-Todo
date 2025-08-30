import React, { useContext, useState } from 'react'
import { ModeContext } from '../context/mode-context'
import { useFetch } from '../hooks/UseFetch'

export const AllTodos = () => {
    const [isLoading] = useState(false)
    const { isDarkMode } = useContext(ModeContext)

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            <div className={`${isDarkMode ? 'alltodo-size' : "alltodo-size-light"}`}>
                <div className='alltodo-container'>
                    <div className={`${isDarkMode ? 'about-heading' : "about-heading-light"}`}>
                        <h1>List of ToDos</h1>
                    </div>
                    {isLoading ? <p className='loading'>Loading...</p> : <>
                        {data.map(item => (<div className={`${isDarkMode ? 'test' : "test-light"}`}>{item.title}<button className={item.completed === true ? 'complete' : 'pending'}>{item.completed === true ? 'completed' : 'pending'}</button></div>))}
                    </>}
                </div>
            </div>
        </>
    )
}