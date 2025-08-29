import { useContext, useState } from 'react';
import './Todo.css';
// import { data, useNavigate } from 'react-router-dom';
import { Logout } from './Logout';
import { Link } from 'react-router-dom';
import { VscColorMode } from "react-icons/vsc";
import { ModeContext } from '../context/mode-context';

export const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { isDarkMode, toggleMode } = useContext(ModeContext)

    const handleLogout = () => {
        setIsModalOpen(true)
    };



    return (
        <>
            {isModalOpen && <Logout handleCancle={() => setIsModalOpen(false)} />}
            <div className={`${isDarkMode ? 'nav-bar' : "nav-bar-light"}`}>
                <p><span className='logo-todo'>TODO</span></p>
                <ul className='list'>
                    <li><Link className={`${isDarkMode ? 'link' : "link-light"}`} to="/">Home</Link></li>
                    <li><Link className={`${isDarkMode ? 'link' : "link-light"}`} to="/about">About</Link></li>
                    <li><Link className={`${isDarkMode ? 'link' : "link-light"}`} to="/alltodos">All Todos</Link></li>
                </ul>
                <div>
                    <button className='mode-btn' onClick={toggleMode}><VscColorMode /></button>
                    <button className='logout-btn' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </>
    )
};