import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/taskSlice';


// Devuelve un objeto. Nos permite "dividir" el estado de MULTIPLES objetos. En un app mas compleja, vamos a tener multiples compomentes los cuales
// tendran su estado y por lo general querremos dividir el estado de multiples componentes para asi mantenerlo.
// Lo que hace configureStore, es agarrar los estados de todos los compomentes y agruparlos para que sean mas accecibles y ordenados.
const store = configureStore({
    // En el store, creamos los estados. por ej 'tasks' y le asignamos sus metodos/reducers.
    reducer: { tasks: tasksReducer }
});

export default store;