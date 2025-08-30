import './Todo.css'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ModeContext } from '../context/mode-context';

export const Register = () => {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [pass, setPass] = useState("");
    // const [confirmpass, setConfirmpass] = useState("");

    const navigate = useNavigate()
    const { isDarkMode } = useContext(ModeContext)

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        pass: "",
        confirmpass: ""
    })

    const [formErrors, setFormErrors] = useState({
        username: "",
        email: "",
        pass: "",
        confirmpass: ""
    })

    const inputChangeHandler = (event) => {
        const { value, name } = event.target
        setFormData({ ...formData, [name]: value })
        console.log(formData[name])

        const errors = isFormValid()
        console.log(errors)
        setFormErrors(errors)
    }

    console.log({ formData });

    // const usernameChangeHandler = (e) => {
    //     console.log(e.target.value);
    //     setUsername(e.target.value);
    // }

    // const emailChangeHandler = (e) => {
    //     console.log(e.target.value);
    //     setEmail(e.target.value);
    // }

    // const passChangeHandler = (e) => {
    //     console.log(e.target.value);
    //     setPass(e.target.value);
    // }

    // const confirmpassChangeHandler = (e) => {
    //     console.log(e.target.value);
    //     setConfirmpass(e.target.value);
    // }

    const isFormValid = () => {
        const errors = {}
        if (formData.username === "") {
            errors.username = "Username is required"
        }
        if (formData.username !== "" && formData.username.length < 3) {
            errors.username = "Username should contain atleast 3 characters"
        }
        if (formData.email === "") {
            errors.email = "Email is required"
        }
        if (formData.pass === "") {
            errors.pass = "Password is required"
        }
        if (formData.pass.length < 6) {
            errors.pass = "Password must be 6 character long"
        }
        if (formData.confirmpass === "") {
            errors.confirmpass = "Confirm Password is required"
        }
        if (formData.pass !== formData.confirmpass) {
            errors.confirmpass = "Passwords must match"
        }

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = isFormValid()
        setFormErrors(errors)
        console.log({ errors })
        console.log(formData.pass !== formData.confirmpass, formData.pass.length, formData.confirmpass.length)

        const formValid = Object.values(errors).every(item => item === "")
        if (formValid) {
            localStorage.setItem("registerData", JSON.stringify(formData));
            localStorage.setItem("loginData", JSON.stringify(formData));
            navigate('/')

        }

        // setUsername("");
        // setEmail("");
        // setPass("");
        // setConfirmpass("");
    }

    return (
        <>
            <div className='bg-color'>
                <div className="login-container">
                    <div className={`${isDarkMode ? 'login-box' : "login-box-light"}`}>
                        <h2>Register</h2>
                        <p className={`${isDarkMode ? 'login-box-p' : "login-box-p-light"}`}>Let's create new account</p>
                        <form onSubmit={handleSubmit}>
                            <label className={`${isDarkMode ? 'login-box-label' : "login-box-label-light"}`}>Username:</label>
                            <input className='login-box-input' type="text" onChange={inputChangeHandler} value={formData.username} name='username' />
                            {formErrors.username && <p className="error">{formErrors.username}</p>}
                            <label className={`${isDarkMode ? 'login-box-label' : "login-box-label-light"}`}>Email Address:</label>
                            <input className='login-box-input' type="email" onChange={inputChangeHandler} value={formData.email} name="email" />
                            {formErrors.email && <p className="error">{formErrors.email}</p>}
                            <label className={`${isDarkMode ? 'login-box-label' : "login-box-label-light"}`}>Password:</label>
                            <input className='login-box-input' type="password" onChange={inputChangeHandler} value={formData.pass} name='pass' />
                            {formErrors.pass && <p className="error">{formErrors.pass}</p>}
                            <label className={`${isDarkMode ? 'login-box-label' : "login-box-label-light"}`}>Confirm Password:</label>
                            <input className='login-box-input' type="password" onChange={inputChangeHandler} value={formData.confirmpass} name='confirmpass' />
                            {formErrors.confirmpass && <p className="error">{formErrors.confirmpass}</p>}
                            <button className='login-box-button' type='submit'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}