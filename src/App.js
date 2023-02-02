import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import { useDispatch } from 'react-redux';
// 'useDispatch' se usa para despachar un action, y por ende ejecutar un reducer que modificara el estado. 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/create-task' element={<TaskForm />} />
          <Route path='/edit-task/:id' element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
