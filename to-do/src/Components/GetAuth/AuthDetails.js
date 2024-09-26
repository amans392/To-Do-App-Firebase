import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/FireBaseConsole";
import { Navigate } from "react-router-dom";
//useEffect imported for listening capabilities


//passed in props for tasks, setUser function and activeUser state state for tasks
const AuthDetails = ({handleData, setUser, activeUser}) => {
    // const [activeUser, setactiveUser] = useState(null);

    //created a loading state for when data is being loaded
    const [isLoading, setIsLoading] = useState(true);

    //useEffect hook used to make use of listener for onAuthStateChanged imported method
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLoading(false)
                console.log("user Signed in...", user);
                // console.log(user.uid)
                return (user);
                
            } else {
                setUser(null)
                setIsLoading(false);
            }
        });

            //ends the listener function in use from onAuthStateChanged
            return () => {
                unsubscribe();
            }
    //added empty depenency array so it only runs when component loads
    }, [setUser]);

    //returns an h2 loading tag if state is loading
    if (isLoading) {
        return <h2>Loading...</h2>
    };
 
    //created a sign out function
    const userSignOut = () => {
        //using the imported signOut function from FireBase
        //added .then since this returns a promise then fires an anonymouse function
        signOut(auth).then(() => {
            console.log("Sign Out Successful")
            handleData([]);
        }).catch(error => console.log(error))
    };

    return ( 
    //checks activeUser state to see if user is signed in or not
    //then displays that name in a paragraph tag
    //button added onClick to run sign out function then provides "Signed Out"<p> tag
    <div className="auth-status">
        {activeUser ? <><p> {`Signed In as ${activeUser.email}`}</p> 
        <button onClick={userSignOut}>Sign Out</button>
        <p>Welcome back!</p>
        <Navigate to="/private"></Navigate>
        </> :

            <>
            </>

        
        
        }       
    </div> 

);
}
 
export default AuthDetails;