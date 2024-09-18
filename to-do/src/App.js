import { useState } from 'react';
import AuthDetails from './Components/GetAuth/AuthDetails';
import CreateAccount from './Components/GetAuth/auth/CreateAccount';
import ToDo from './Components/ToDo.js';
import React from 'react';

function App() {

  //state for tasks created from to-do component
  const [tasks, setTasks] = useState([]);

  const [value, setValue] = useState("");

  const [data, setData] = useState([]);

  //states created for authenticated user from authDetails component
  const [activeUser, setActiveUser] = useState(null);

  //function created for setting activeUser when authenticated through AuthDetails.jsx component
  const setUser = (user) => {
    setActiveUser(user);
  };

  const handleTasks = (t) => {
    setTasks(t)
  };

  const handleValue = (v) => {
    setValue(v)
  };

  const handleData = (d) => {
    setData(d);
    setTasks(d)
    console.log("data handled:", d);
  };


  return (
    
    <div className="app-container">
      <h1>Firebase To-Do List App</h1>
      {activeUser ? (
        <div className='auth-container'>
          <AuthDetails tasks={tasks} setUser={setUser} activeUser={activeUser}></AuthDetails>
          <ToDo activeUser={activeUser} tasks={tasks} handleTasks={handleTasks} value={value} 
          handleValue={handleValue} data={data} handleData={handleData}></ToDo>
          
      </div>

      ) : (
        <div className='no-auth-container'>    
          <AuthDetails tasks={tasks} setUser={setUser} activeUser={activeUser}></AuthDetails>
          <CreateAccount></CreateAccount>
          <ToDo tasks={tasks} handleTasks={handleTasks} 
          value={value} handleValue={handleValue}></ToDo>
        </div>
      )}
    </div>

  )
}
export default App;
