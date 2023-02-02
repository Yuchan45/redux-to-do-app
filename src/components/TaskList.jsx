import React from 'react';
import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from 'react-router-dom';

function TaskList() {

    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks);
    console.log(tasks);

    function handleDelete(id) {

        console.log("id: >> ", id)
        dispatch(deleteTask(id));
        return;
    }

    return (
        <div>

            <header>
                <h1>Tasks: {tasks.length}</h1>
                <Link to='/create-task'>Create Task</Link>
            </header>

            {tasks.map((task) => {
                return (
                    <div key={task.id}>
                        <h3>{ task.title }</h3>
                        <p>{ task.description }</p>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                        <Link to={`/edit-task/${task.id}`}>Edit</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default TaskList;
