import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
    const loginData = localStorage.getItem("loginData")
    const registerData = localStorage.getItem("registerData")

    if (!registerData && !loginData) {
        return <Navigate to={"/register"} />
    } else if (registerData && !loginData) {
        return <Navigate to={"/login"} />
    } else {
        return children
    }
}
