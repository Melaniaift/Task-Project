import { useState } from "react"
import './App.css';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';

function App() {
  const [tasklist, setTasklist] = useState([])
  const [task, setTask] = useState({})

  return (
    <div className="App">
      <Header></Header>
      <AddTask task={task} setTask={setTask} tasklist={tasklist} setTasklist={setTasklist} />
      <ShowTask task={task} setTask={setTask} tasklist={tasklist} setTasklist={setTasklist} />
    </div>
  );
}

export default App;
