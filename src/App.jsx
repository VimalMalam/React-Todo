import './App.css'
import { Navbar } from './components/Navbar'
import { Form } from './components/Form'
import { Card } from './components/Card'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { AllTodos } from './pages/AllTodos'
import { Todo } from './components/Todo'
import { Logout } from './components/Logout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './pages/RootLayout'
import { ProtectedRoute } from './pages/ProtectedRoute'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><RootLayout /></ProtectedRoute>,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/alltodos",
        element: <AllTodos />
      },
      {
        path: "/todo/:todoId",
        element: <Todo />
      },
      {
        path: "/logout",
        element: <Logout />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
])

function App() {

  return <RouterProvider router={routes} />

}

export default App
