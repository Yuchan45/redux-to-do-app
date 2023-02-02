// Redux State Slice
// Todo esto se arma siguendo el tutorial de 'redux.org'.
// Reducers: addTask, removeTask, edittask, clearTasks, etc

// Todo se realizo siguiendo el template del tutorial de redux oficial.
import { createSlice } from '@reduxjs/toolkit'

let initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false
    }
];

// Aca 'inicializamos' el estado 'tasks' que creamos en el store.js, y tmb creamos sus reducers.
export const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        // Funciones para 'modificar' el estado.
        addTask: (state, action) => {
            // Dentro de action tengo el type y el payload(argumentos).
            //console.log(state, action);
            state.push(action.payload);
            console.log(state)

            return;
        },
        deleteTask: (state, action) => {
            //console.log(action);
            const id = action.payload;
            const taskFound = state.find(task => task.id === id);
            if (taskFound) {
                // Remove taks from state.
                const i = state.indexOf(taskFound);
                state.splice(i, 1);
            }
            return;
        }

    }
});


// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer