import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../firebase/FireBaseConsole";


const SignIn = () => {

//create state variables for setting email and password
const [email, setEmail ] = useState("");
const  [password, setPassword] = useState("");
//created signIn function that takes in an event for the handleSubmit attribute on form
    const signIn = (event) => {
        //added to prevent reload when form submitted
        //so that email and password won't be lost on state update
        event.preventDefault();
        //imported SignInWithEmailAndPassword from auth
        //imported the auth const exported from FireBaseConsole.js
        //passing in auth data for firebase along with captured email and passwrod states
        //for use to sign into with fireBase authentication
        signInWithEmailAndPassword( auth, email, password )
        //added .then since signInWIthEmailAndPassword returns a promise
        //logs userCredential to the console
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            //logs any errors to the console just in case
            console.log(error);
        })

    }

    return ( 
        //form and input field created for capturing email info entered
        //then set that email to the email state variable
        <div className="sign-in-container">
            {/* //added onSubmit set to signIn function */}
            <form onSubmit={signIn}>
                <h1>Log into your account</h1>

                <input type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(event) => setEmail(event.target.value)}    
                ></input>
                {/* //created another input field to capture password data */}
                <input
                type="password"
                placeholder="Enter your password..."
                value={password}
                onChange={(event) => setPassword(event.target.value)}  
                ></input>
            {/* //Created a submit button for submitting the form information */}
            <button type="submit">Log In</button>
            </form>


        </div>
     );
}
 
export default SignIn;