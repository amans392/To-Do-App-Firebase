import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/FireBaseConsole";
//useEffect imported for listening capabilities

const AuthDetails = () => {
    //created states for authorised users
    const [authUser, setAuthUser] = useState(null);

    //created a listening variable with use of onAuthStateChanged from FireBase
    //created a listen variable that makes use of onAuthStateChanged observer function
    //takes in auth exported function anda user parameter
    //checks if a user is being authenticated and sets it as the user
    //if not, sets the user to null
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
            //ends the listener function in use from onAuthStateChanged
            return () => {
                listen();
            }
    //added empty depenency array so it only runs when component loads
    }, [])
    //created a sign out function
    const userSignOut = () => {
        //using the imported signOut function from FireBase
        //added .then since this returns a promise with an anonymouse function
        signOut(auth).then(() => {
            console.log("Sign Out Successful")
        }).catch(error => console.log(error))
    }

    return ( 
    //checks authUser state to see if user is signed in or not
    //then displays that name in a paragraph tag
    //button added with onClick that runs sign out function then provides "Signed Out" paragraph tag

    <div>
        {authUser ? <><p>{`Signed In as ${authUser.email}`}</p> <button onClick={userSignOut}>Sign Out</button></>: <p> Signed Out </p> }
    </div> 

);
}
 
export default AuthDetails;