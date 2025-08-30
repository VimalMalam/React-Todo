import './Todo.css';
import { useNavigate } from 'react-router-dom';
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { CgArrowTopRightR } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";

export const Card = ({ title, deleteHandler, handleComplete, id, complete, handleEdit }) => {
    const navigate = useNavigate();

    const handleShow = (id) => {
        navigate(`/todo/${id}`)
    }

    return (
        <>
            <div className='result-div'>
                <div className='box-sizing-div' style={{ backgroundColor: '#FFF2AA' }}>
                    <p className={`${complete ? "task-complete output-title" : 'output-title'}`}>{title}</p>
                    <button className='check-btn' onClick={() => handleComplete(id)}><CgArrowTopRightR /></button>
                    <button className='update-btn' onClick={handleEdit}><FaRegEdit /></button>
                    <button className='delete-btn' onClick={deleteHandler}><AiTwotoneDelete /></button>
                    <button className='show-btn' onClick={() => handleShow(id)}><FaArrowRight /></button>
                </div>
            </div>
        </>
    );
}