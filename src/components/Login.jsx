import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModeContext } from '../context/mode-context';
import './Todo.css';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [emailError, setEmailError] = useState("")
    const [passError, setPassError] = useState("")

    const navigate = useNavigate()
    const { isDarkMode } = useContext(ModeContext)

    // const [loginData, setLoginData] = useState({
    //     email: '',
    //     pass: ''
    // })

    // const inputChangeHandler = (event) => {
    //     const { value, name } = event.target
    //     setLoginData({ ...loginData, [name]: value })
    // }

    const emailChangeHandler = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);

        if (e.target.value !== "") {
            setEmailError("");
        }
    }

    const passChangeHandler = (e) => {
        console.log(e.target.value);
        setPass(e.target.value);

        if (e.target.value !== "") {
            setPassError("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email == "") {
            setEmailError("Email must not be empty")
        }
        if (pass == "") {
            setPassError("Password is required")
            return
        }

        const data = {
            email, pass
        }

        localStorage.setItem("loginData", JSON.stringify(data));
        navigate('/')

        // setEmail("");
        // setPass("");
    }


    return (
        <><div className='bg-color'>
            <div className="login-container">
                <div className={`${isDarkMode ? 'login-box' : "login-box-light"}`}>
                    <h2 className={`${isDarkMode ? 'login-box-heading' : "login-box-heading-light"}`}>LOGIN</h2>
                    <p className={`${isDarkMode ? 'login-box-p' : "login-box-p-light"}`}>Welcome back !!</p>
                    <form onSubmit={handleSubmit}>
                        <label className={`${isDarkMode ? 'login-box-label' : "login-box-label-light"}`}>Email Address:</label>
                        <input className='login-box-input' type="email" placeholder="john@doe.com" onChange={emailChangeHandler} value={email} name='email' />
                        {emailError && <p className="error">{emailError}</p>}
                        <label className={`${isDarkMode ? 'login-box-label' : "login-box-label-light"}`}>Password:</label>
                        <input className='login-box-input' type="password" placeholder="Your Password" onChange={passChangeHandler} value={pass} name='pass' />
                        {passError && <p className="error">{passError}</p>}
                        <button className='login-box-button' type='submit'>Login</button>
                    </form>
                    <p className='login-box-p'>Don't have an account? <a className={`${isDarkMode ? 'login-a' : "login-a-light"}`} href="/register">Sign up</a></p>
                </div>
            </div>
        </div>
        </>
    );
}