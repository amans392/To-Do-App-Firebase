import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/FireBaseConsole";
import WriteUserData from "../FireStore/WriteUserData";
import { store } from "../../firebase/FireBaseConsole";
import { doc, setDoc } from "firebase/firestore";

//useEffect imported for listening capabilities

const AuthDetails = (tasks, setTasks) => {
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

    


    const userProfile = () => {
        const user = authUser
        if (user !== null) {
            user.providerData.forEach((profile) => {
              console.log("Sign-in provider: " + profile.providerId);
              console.log("  Provider-specific UID: " + profile.uid);
              console.log("  Name: " + profile.displayName);
              console.log("  Email: " + profile.email);
              console.log("  Photo URL: " + profile.photoURL);
              console.log(user.email)
              console.log(user.uid) 
            }, []);
          }
    }



 
  async function writeUserTasks(event) {
    const user = authUser
    const userTasks = doc(store, "users/" + user.uid)
    if (user !== null) {
        const docData = {
            name: authUser.email,
           description: {tasks}
         };
      
         try {
            event.preventDefault()
          await setDoc(userTasks, docData);
          console.log("User tasks have been written to the database")
         } catch (error) {
          console.log(`I got an error! ${error}`)
         }
        } else {
            console.log("Feature unavailable, you are not signed in")
        }
    }
   
    
    userProfile()
    





    return ( 
    //checks authUser state to see if user is signed in or not
    //then displays that name in a paragraph tag
    //button added with onClick that runs sign out function then provides "Signed Out" paragraph tag

    <div>
        <form onSubmit={writeUserTasks}>
        {authUser ? <><p> {`Signed In as ${authUser.email}`}</p> 
        
        <button onClick={userSignOut}>Sign Out</button>
        <button className="save_btn">Save Data</button></>: 
        <p> Signed Out
         </p> }
        
         </form>
    </div> 

);
}
 
export default AuthDetails;