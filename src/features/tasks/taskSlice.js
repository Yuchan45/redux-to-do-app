// Redux State Slice
// Todo esto se arma siguendo el tutorial de 'redux.org'.
// Reducers: addTask, removeTask, edittask, clearTasks, etc

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
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

    }
});

export default taskSlice.reducer