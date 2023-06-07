import { useState } from 'react';
import './app.css';
import Add from './components/Add';
import Task from './components/Task';

function App() {

  const [tasks, setTasks] = useState([
    {id:1, task:'to do 1', done:false },
    {id:2, task:'to do 2', done:false },
    {id:3, task:'to do 3', done:false },
    {id:4, task:'to do 4', done:false },
  ]);

  return (
    <div className="app">
      <Add tasks={tasks} setTasks={setTasks} />
      <Task tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
