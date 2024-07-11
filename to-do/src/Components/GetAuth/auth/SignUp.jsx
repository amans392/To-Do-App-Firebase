import React, {useState} from "react";
import { auth } from "../../../firebase/FireBaseConsole";
import { createUserWithEmailAndPassword } from "firebase/auth";

//created user account creation sign up component
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return ( 
    <div className="sign-up-container">
        {/* //created input fields for capture entered email and password info into respective state values */}
        <form
        onSubmit={signUp}>
            <h1>Create Account</h1>
            <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            ></input>

        <input
            type="password"
            placeholder="Enter your password..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}>
        </input>
        <button type="submit">Submit</button>
        </form>
        
    </div> );
}
 
export default SignUp;