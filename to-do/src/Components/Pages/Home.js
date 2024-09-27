import ToDo from "../ToDo";
import CreateAccount from "../GetAuth/auth/CreateAccount";
import AuthDetails from "../GetAuth/AuthDetails";
import { useState } from "react";
import SignIn from "../GetAuth/auth/SignIn";
import { Navigate } from "react-router-dom";

//HOME page component created for routing purposes
//passed down props from app.js for use in autheDetails and ToDo components
const Home = ({tasks, handleTasks, setUser, activeUser, value, handleValue }) => {

  const [isToggled, setisToggled] = useState(false)
  //checks to see if user has signed up for an account

  //toggles rendering between signIn and CreateAccount components
  //defaults to createAccount compoenent
  const handleToggle = (event) => {
      event.preventDefault();
      setisToggled(!isToggled)
  };

  //checks if there's an authenticated user and redirects them to private page instead of home
  if (activeUser) {
    return <Navigate to="/private"></Navigate>
  };

  return (   
        <div>    
        <AuthDetails tasks={tasks} setUser={setUser} activeUser={activeUser}></AuthDetails>
    
        { isToggled && <SignIn handleToggle={handleToggle}> </SignIn>} 
        { !isToggled && <CreateAccount handleToggle={handleToggle} ></CreateAccount>}
         
        <ToDo tasks={tasks} handleTasks={handleTasks} 
        value={value} handleValue={handleValue}></ToDo>
      </div>
    
     );
}
 
export default Home;