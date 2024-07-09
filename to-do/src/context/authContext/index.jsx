//auth context file creates auth context encapsulates children

//imported depenencies
import React, { useState, useEffect, useContext } from "react";
import { auth } from "../../firebase/FireBaseConsole";
import { onAuthStateChanged } from "firebase/auth";

//creates useAuth hook used in different components for authnetication state paraeeters
const AuthContext = React.createContext();

export function useAUth() {
    return useContext(AuthContext);
}


export function AuthProvider({ childeren }) {
    const [currentUser, setCurrentUser] = useState(null);
    //state to check if user is logged in
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    //try to load current auth state
    const [loading, setLoading] = useState(true);
 
    //list to changes of authentication states

    useEffect(() => {
        //unsubscribed used for cleanup
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe
//added dependency with empty array because it's only needed once
    }, []) 
    //when user is logged in, will provide users info as arguemnt
    async function initializeUser(user) {
        if (user) {
            //spread uses the array of users property and iterates through them
            //sets the current user to that user
            //receive valid user object
            setCurrentUser({ ...user});
            //sets the user logged in to true
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }
    
    const value = {
        currentUser, 
        userLoggedIn,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            (!loading && children)
        </AuthContext.Provider>
    )
}