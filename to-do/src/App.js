//working on authentication and routing: https://www.youtube.com/watch?v=PngrpszT3aY
//current-time: https://youtu.be/PngrpszT3aY?t=699

import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './Components/ProtectedRoute.js';
import Home from './Components/Pages/Home.js';
import Private from './Components/Pages/Private.js';


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
    setTasks(t);
  };

  const handleValue = (v) => {
    setValue(v);
  };

  const handleData = (d) => {
    setData(d);
    setTasks(d);
  };

  return (
    
    <div className="app-container">
      <h1>Firebase To-Do List App</h1>

      <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Home
                tasks={tasks} handleTasks={handleTasks} setUser={setUser}
                activeUser={activeUser} value={value} handleValue={handleValue}
              />}>
            </Route>

          <Route
              path="/home" element={<Home
              tasks={tasks} handleTasks={handleTasks} setUser={setUser}
              activeUser={activeUser} value={value} handleValue={handleValue}
              />}>
          </Route>

          <Route path="/private" 
                element={<ProtectedRoute activeUser={activeUser}>
                  <Private tasks={tasks} setUser={setUser} activeUser={activeUser} value={value} 
                  handleValue={handleValue} data={data} 
                  handleData={handleData} handleTasks={handleTasks}
                  /> </ProtectedRoute>}
          ></Route>  
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
