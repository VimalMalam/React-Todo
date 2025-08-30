import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ModeContext = createContext({
    isDarkMode: true,
    toggleMode: () => { }
})

export const ModeContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode)
    }
    return <ModeContext.Provider value={{ isDarkMode, toggleMode }}>{children}</ModeContext.Provider>
}