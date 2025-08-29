import './Todo.css';
import { useNavigate } from 'react-router-dom';
import { ModeContext } from '../context/mode-context';
import { useContext } from 'react';

export const Logout = ({ handleCancle }) => {
    const { isDarkMode } = useContext(ModeContext)

    const navigate = useNavigate();
    const handleOk = () => {
        localStorage.removeItem("loginData")
        navigate('/login')
    }

    return (
        <>
            <div className="logout-overlay">
                <div className={`${isDarkMode ? 'logout-modal' : "logout-modal-light"}`}>
                    <p>Are you sure you want to logout ?</p>
                    <div className="logout-buttons">
                        <button className="btn-cancel" onClick={handleCancle}>Cancel</button>
                        <button className="btn-logout" onClick={handleOk}>Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}