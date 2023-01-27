import './App.css';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import { useDispatch } from 'react-redux';
// 'useDispatch' se usa para despachar un action, y por ende ejecutar un reducer que modificara el estado. 

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
