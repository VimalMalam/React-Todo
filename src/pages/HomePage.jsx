import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Form } from '../components/Form'
import { Card } from '../components/Card'
import { ModeContext } from '../context/mode-context'
import '../components/Todo.css';

export const HomePage = () => {
    const [allData, setAllData] = useState(JSON.parse(localStorage.getItem("TodoData")) || [])
    const [editData, setEditData] = useState()
    const { isDarkMode } = useContext(ModeContext)

    const getData = (todoData) => {
        console.log(todoData);
        setAllData([...allData, todoData])

    }
    // console.log("Form Submitted");
    const deleteHandler = (id) => {
        console.log(id + " Is Deleted");
        const deletedata = allData.filter((item) => id !== item.id);
        console.log(deletedata);
        setAllData(deletedata);
    }

    const handleComplete = (id) => {
        console.log(id);
        const updatedData = allData.map(item => {
            if (item.id === id) {
                return { ...item, complete: !item.complete }
            }
            else {
                return item
            }
        })

        console.log({ updatedData });
        setAllData(updatedData);
    }

    useEffect(() => {
        localStorage.setItem("TodoData", JSON.stringify(allData))
    }, [allData])

    const handleEdit = (id) => {
        const filterData = allData.find(item => item.id === id)
        console.log(filterData);
        setEditData(filterData);
    }
    return (
        <>
            <div className={`${isDarkMode ? 'app' : "app-light"}`}>
                <div className={`${isDarkMode ? 'main' : "main-light"}`}>
                    <Form getData={getData} editData={editData} allData={allData} setEditData={setEditData} />
                    <div className='result-flex-div'>
                        {allData.length > 0 ? allData.map(item => <Card title={item.title} complete={item.complete} deleteHandler={() => deleteHandler(item.id)} handleComplete={handleComplete} id={item.id} handleEdit={() => handleEdit(item.id)} />) : <p className='empty-p'>! No notes created yet.</p>}
                    </div>
                </div>
            </div>
        </>
    )
}
