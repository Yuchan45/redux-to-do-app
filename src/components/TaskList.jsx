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
        <div className='w-4/6 bg-red-200'>
            <header className='flex justify-between items-center p-4'>
                <h1>Tasks: {tasks.length}</h1>
                <Link to='/create-task' className='bg-indigo-600 px-2 py-1 rounded-md text-sm'>Create Task</Link>
            </header>

            <div className='grid grid-cols-3 gap-4 p-4 rounded-md'>
                {tasks.map((task) => {
                    return (
                        <div key={task.id} className='bg-neutral-800 p-4 rounded-md'>
                            <header className='flex justify-between'>
                                <h3>{ task.title }</h3>
                                <div className='flex gap-1'>
                                    <Link to={`/edit-task/${task.id}`} className='bg-zinc-600 px-2 py-1 text-xs rounded-md'>Edit</Link>
                                    <button onClick={() => handleDelete(task.id)} className='bg-red-500 px-2 py-1 text-xs rounded-md'>Delete</button>
                                </div>
                            </header>
                            <p>{ task.description }</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TaskList;
