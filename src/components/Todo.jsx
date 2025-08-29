import { useParams } from 'react-router-dom';
import './Todo.css';

export const Todo = () => {

    const { todoId } = useParams() //todoId
    console.log(todoId);

    const localData = JSON.parse(localStorage.getItem("TodoData") || []);
    console.log(localData);

    const match = localData.find(item => JSON.stringify(item.id) === todoId);
    console.log(match);

    return (
        <>
            <h1 className='todo-show'>{match.title}</h1>
        </>
    )
}