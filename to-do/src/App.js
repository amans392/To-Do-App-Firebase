
import './App.css';
import { useState } from 'react';
import AuthDetails from './Components/GetAuth/AuthDetails';
import LogIn from './Components/GetAuth/auth/Login';
import CreateAccount from './Components/GetAuth/auth/CreateAccount';
import ToDo from './Components/ToDo';

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


const storeData = (data) => {
  setData(data)
};


  return (
<div>

<LogIn></LogIn>
<CreateAccount></CreateAccount>
<AuthDetails tasks={tasks} setUser={setUser} activeUser={activeUser}></AuthDetails>
<ToDo tasks={tasks} handleTasks={handleTasks} value={value} handleValue={handleValue}></ToDo>

<div className='save-button'>
    {/* <WriteUserData></WriteUserData> */}
    
    </div>
</div>
  )
}
export default App;
