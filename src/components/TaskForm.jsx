import { v4 as uuid } from 'uuid';

import React, { useState, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { useNavigate, useParams } from 'react-router-dom'; 
// useNavigate: To redirect urls.  useParams: To look for params in the url.
// Then, if there is a param, we are on the edit task form. Else, we are creating a task.

function TaskForm() {

    let flag = false;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const tasks = useSelector((state) => state.tasks);


    const [task, setTask] = useState({
        title: '',
        description: '',
    });

    useEffect(() => {
        // Toggles on load.
        // Si hay que editar, traemos el objeto a editar y lo cargamos en task.
        if (params.id) {
            flag = true;
            console.log(tasks)
            const foundTask = tasks.find(task => task.id === params.id);
            if (foundTask) {
                setTask({
                    ...foundTask
                });
            }
        }

    }, []);

    function handleChange(e) {
        // console.log(e.target.name, e.target.value);
        // console.log(">>>: ", ...[task]);
        if (e.target.name == "title") {
            setTask({
                ...task,
                title: e.target.value
            });
        } else {
            setTask({
                ...task,
                description: e.target.value
            });
        }
        return;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (params.id) {
            // Estamos editando.
            console.log("Editando!")
            dispatch(editTask({
                id: params.id,
                ...task,
                completed: false
            }));

        } else {
            // Estamos creando.
            dispatch(addTask({
                // Copio lo que tenia y le agrego una id
                id: uuid(),
                ...task,
                completed: false
            }));
        }

        navigate('/'); // Redirect to '/'.
        return;
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder='title' onChange={handleChange} value={ (task.title != '') ? `${task.title}` : "Title"} />
            <textarea name="description" cols="30" rows="10" placeholder='description' onChange={handleChange} value={ (task.title != '') ? `${task.description}` : "Description"} ></textarea>
            <button>Save</button>
        </form>
    )
}

export default TaskForm
