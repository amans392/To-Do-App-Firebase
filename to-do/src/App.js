
import './App.css';
import { useState } from 'react';
import AuthDetails from './Components/GetAuth/AuthDetails';
import LogIn from './Components/GetAuth/auth/Login';
import CreateAccount from './Components/GetAuth/auth/CreateAccount';
import ToDo from './Components/ToDo';
import SaveUserData from './Components/FireStore/SaveUserData'
import LoadUserData from './Components/FireStore/LoadUserData';
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
  // useEffect(() => {
  // const q = query()
  // }, [])

  const handleTasks = (task) => {
    setTasks(task)
  }

  const handleValue = (v) => {
    setValue(v)
  }

  return (
    
    <div>



      {activeUser ? (
        <div className='save-load-btn'> 
                <AuthDetails tasks={tasks} setUser={setUser} activeUser={activeUser}></AuthDetails>
          <h1>Welcome back!</h1>
          <SaveUserData tasks={tasks} activeUser={activeUser}></SaveUserData>
          <LoadUserData activeUser={activeUser}></LoadUserData>
          <ToDo tasks={tasks} handleTasks={handleTasks} value={value} handleValue={handleValue}></ToDo>
        </div>
        
        
      ) : (
        <div className='login-account-creation'>
        <AuthDetails tasks={tasks} setUser={setUser} activeUser={activeUser}></AuthDetails>
        <LogIn></LogIn>
        <CreateAccount></CreateAccount>
        <ToDo tasks={tasks} handleTasks={handleTasks} value={value} handleValue={handleValue}></ToDo>
        </div>
      )}
    </div>

  )
}
export default App;
