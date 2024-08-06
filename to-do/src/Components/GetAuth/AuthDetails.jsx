import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/FireBaseConsole";
import { store } from "../../firebase/FireBaseConsole";
import { doc, setDoc, getDoc, query, collection, where } from "firebase/firestore";
import SaveUserData from "../FireStore/SaveUserData";
import LogIn from "./auth/Login";
import CreateAccount from "./auth/CreateAccount";
//useEffect imported for listening capabilities

const AuthDetails = ({tasks, setUser, activeUser}) => {
    //created states for authorised users
    // const [activeUser, setactiveUser] = useState(null);

        //created a loading state for when data is being loaded
    const [loading, setIsLoading] = useState(true);

    //storing authenticated user data in variable currentUser
    const currentUser = {activeUser};
    console.log('details tasks', tasks)
    console.log('setUser', setUser)

    // setUser({currentUser});
    //created a listening variable with use of onAuthStateChanged from FireBase
    //created a listen variable that makes use of onAuthStateChanged observer function
    //takes in auth exported function anda user parameter
    //checks if a user is being authenticated and sets it as the user
    //if not, sets the user to null
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLoading(false)
                console.log("user Signed in...", user); 
                console.log(user.uid)
                return (user);
                

                
            } else {
                setUser(null)
                setIsLoading(false);
            }
        });

            //ends the listener function in use from onAuthStateChanged
            return () => {
                listen();
            }
    //added empty depenency array so it only runs when component loads
    }, []);

    if (loading) {
        return <h2>Loading...</h2>
    };

    //created a sign out function
    const userSignOut = () => {
        //using the imported signOut function from FireBase
        //added .then since this returns a promise with an anonymouse function
        signOut(auth).then(() => {
            console.log("Sign Out Successful")
        }).catch(error => console.log(error))
    };
    
    const signedInUser = ({updateUser}, activeUser) => {
        // if (activeUser !== null) {
        //     updateUser(activeUser);
        //     console.log("Signed in as...", activeUser);
        updateUser(activeUser);
        };
    

        
  
//logging out user logged in firebase data for usage in firestore storage details
    // const userProfile = () => {
    //     const user = activeUser
    //     if (user !== null) {
    //         user.providerData.forEach((profile) => {
    //           console.log("Sign-in provider: " + profile.providerId);
    //           console.log("  Provider-specific UID: " + profile.uid);
    //           console.log("  Name: " + profile.displayName);
    //           console.log("  Email: " + profile.email);
    //           console.log("  Photo URL: " + profile.photoURL);
    //           console.log(user.email)
    //           console.log(user.uid) 
    //         }, []);
    //       }
    // }



 //use of imported setDoc function writes the data to firestore under the users collection
 //with the document stored under their UID
 //the task data being the tasks created by the user

//   async function SaveUserData(event) {
//     const user = activeUser
//     const userTasks = doc(store, "users/" + user.uid)
//     if (user !== null) {
//         const docData = {
//             name: user.email,
//            description: {tasks},
//            token: user.uid
//          };
      
//          try {
//             event.preventDefault()
//           await setDoc(userTasks, docData );
//           console.log("User tasks have been written to the database")
//           console.log(docData)
//          } catch (error) {
//           console.log(`I got an error! ${error}`)
//          }
//         } else {
//             console.log("Feature unavailable, you are not signed in")
//         }
//     };
   
    //running userProfile function to log authenticated user data to the console
    // userProfile();
    
    //making use of the imported getDoc method
    //retreiving user data listed under authenticated user uid
    async function loadUserData(event) {
        
        if (activeUser !== null) {
            // console.log(userId)
        event.preventDefault();
        const userTasks = doc(store, "users", activeUser.uid )
        const mySnapshot = await getDoc(userTasks);
          //if statement used
          //checks if document exists using the .exists() method
          //and if it does, extract information
          if (mySnapshot.exists()) {
            //store docData in a variable using .data() method
            
            const docData = mySnapshot.data();
            //then print out a stringified version to the console

            const data = docData.description.tasks
            //logs client task data property to the console
            console.log("User Data Loaded...", data)
          } else {
            console.log("No data found");
          }}
          
        };

        

        // const activeUser = () =>{
        //     console.log("Currnt User is...", currentUser);
        // };

        // activeUser();
    
        
        console.log("User Currently signed in is...", activeUser)
        // useEffect(() => { 
        //     if (activeUser !== null) {
        //         const getTasks = [];
        //         const userTasks = doc(store, "users", activeUser.uid);
        //         const mySnapshot = getDoc(userTasks);
        //         console.log(mySnapshot)
        //     }



        // }) 

        


        // readASingleDocument();
        
    

    






    return ( 
    //checks activeUser state to see if user is signed in or not
    //then displays that name in a paragraph tag
    //button added with onClick that runs sign out function then provides "Signed Out" paragraph tag
    
    <div >
        <form>
        {activeUser ? <><p> {`Signed In as ${activeUser.email}`}</p> 
        
        <button onClick={userSignOut}>Sign Out</button>
        {/* <button onClick={SaveUserData} className="save_btn">Save</button> */}
        <SaveUserData tasks = {tasks} activeUser = {activeUser}></SaveUserData>
        <button onClick={loadUserData} className="load_btn">Load</button></>:
        
        <p> Signed Out</p> }
        
         </form>
    </div> 

);
}
 
export default AuthDetails;