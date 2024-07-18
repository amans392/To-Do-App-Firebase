import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/FireBaseConsole";

const CreateAccount = () => {
    
    //states for email and password setting created
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //functionf or creating an account
    const createAccount = (event) => {
        //stops page from re-rendering so that input values can be captured

        event.preventDefault();
        //calling create user account function imported from firebase auth
        //passing in authentication parameters along with captured email and password
        createUserWithEmailAndPassword(auth, email, password)
        .then(
            console.log("Your account has been created")
        )

        .catch((error) => {
            console.log(error)
            alert(error)
        })

    }

    return (
        //form with inputs created for capturing email and password information
        <div className="create-account-container">
            <form onSubmit={createAccount}>  
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                onChange={(event) => setEmail(event.target.value)}

                ></input>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></input>
            <button>Sign Up</button>
            </form>         
        </div>
       
     );
}
 
export default CreateAccount;