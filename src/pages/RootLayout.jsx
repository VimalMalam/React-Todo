import React, { useContext } from 'react'
import '../components/Todo.css'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { ModeContext } from '../context/mode-context'

export const RootLayout = () => {
    const { isDarkMode } = useContext(ModeContext)

    return (
        <>
            <Navbar />
            <Outlet />
            {/* content */}
            {/* <footer className={`${isDarkMode ? 'footer' : "footer-light"}`}>Footer</footer> */}
        </>
    )
}
