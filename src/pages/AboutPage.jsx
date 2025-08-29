import React, { useContext } from 'react'
import { Navbar } from '../components/Navbar'
import { ModeContext } from '../context/mode-context'

export const AboutPage = () => {
    const { isDarkMode } = useContext(ModeContext)

    return (
        <>
            <div className={`${isDarkMode ? 'about-container' : "about-container-light"}`}>
                <div className='about-content'>
                    <div className={`${isDarkMode ? 'about-heading' : "about-heading-light"}`}>
                        <h1>About ToDo</h1>
                    </div>
                    <p className={`${isDarkMode ? 'about-text' : "about-text-light"}`}>
                        A to-do list is a list of items that <span className={`${isDarkMode ? 'about-sp' : "about-sp"}`}>need to be completed.</span> The items on the list can range from simple activities like replying to an email, to more complex tasks like creating project briefs.
                    </p>
                    <p className={`${isDarkMode ? 'about-text' : "about-text-light"}`}>
                        The items on a to-do list are usually <span className={`${isDarkMode ? 'about-sp' : "about-sp"}`}>action-oriented,</span> such as “Schedule a meet with the R&D team” or “Call back customer X.” Some lists include more abstract goals, such as “improve your time management skills” or “learn how to use a new software program.”
                    </p>
                </div>
            </div>
        </>
    )
}
