
import './App.css';
import { useState } from 'react';
import SubmitForm from './Components/SubmitForm';

function App() {

  const [tasks, setNewTasks] = useState([])
  const [input, setInput] = useState("")
  

  return (
    <div className="todoapp stack-large">
      <h1>ToDoList</h1>
    <SubmitForm input={input} setInput={setInput}></SubmitForm>
    </div>
  );
}

export default App;
