import { useContext, useEffect, useState, useRef } from 'react';
import { ModeContext } from '../context/mode-context';
import './Todo.css';

export const Form = ({ getData, editData, allData, setEditData }) => {
    const [title, setTitle] = useState("");
    const { isDarkMode } = useContext(ModeContext)

    const titleChangeHandler = (e) => {
        console.log(e.target.value);
        setTitle(e.target.value);
    }

    const inputElement = useRef();
    const focusInput = () => {
        inputElement.current.focus();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title == "") {
            alert("field is mandatory");
            return;
        }

        const data = {
            id: Math.random(),
            title: title
        }
        getData(data);

        setTitle("");
    }

    useEffect(() => {
        if (editData) {
            setTitle(editData.title)
        }
    }, [editData]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const index = allData.findIndex(item => item.id === editData.id)
        console.log(index);
        allData[index] = { id: editData.id, title: title }
        console.log(allData);
        localStorage.setItem("TodoData", JSON.stringify(allData))
        setEditData()

        setTitle("");
    }


    return (
        <>
            <div className='form-size'>
                <h1 className={`${isDarkMode ? 'heading-todo' : "heading-todo-light"}`}>My Todos</h1>
                <form className="todo-form" onSubmit={editData ? handleUpdate : handleSubmit}>
                    <input className={`${isDarkMode ? 'form-input' : "form-input-light"}`} ref={inputElement} type="text" placeholder="Enter your task..." onChange={titleChangeHandler} value={title} />
                    <button className='form-submit' onClick={focusInput} type="submit">{editData ? 'Update' : 'Add'}</button>
                </form>
            </div>
        </>
    )
}

