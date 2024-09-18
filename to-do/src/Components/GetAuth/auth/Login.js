import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/FireBaseConsole";
//imported useState to store email and password as state values
import { useState } from "react";
import React from 'react';

//passed in event from email and password onChange
const LogIn = () => {

 //set emulator to port 9099 as shown below

//state variables created for email and password setting in scope of login component
//for use between functions
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


//logIn function created to take in events from input fields
//then use auth, username, and password to authenticate

const logIn = (event) => {

    //email and password authentication being passed in from state values
    //to sign user in
    
    event.preventDefault();

     signInWithEmailAndPassword(auth, email, password)
    

    .then((userCredential) => {
        console.log(userCredential);
        //sets email and password fields to empty string
        setEmail("")
        setPassword("")
    })
    .catch((error) => {
        console.log(error)
        alert("incorrect username or password")
        
    })
};

return ( 
    <div className="login-container">
        <p> Login</p> 
        <form onSubmit={logIn}>       
            <input 
            placeholder="Email" 
            type="Email"
            value={email} 
            onChange={(event) => setEmail(event.target.value)}
            ></input>

            <input 
            placeholder="Password" 
            type="password"
             value={password} 
             onChange={(event) => setPassword(event.target.value)}
             ></input>

            <button>Login</button>
        </form>
    </div>

);
}

export default LogIn;


