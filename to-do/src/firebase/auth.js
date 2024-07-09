import { auth } from "./FireBaseConsole";
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

//creating new user with email and password

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    //popup is open and selecting google account needed to log in
    const result = await signInWithPopup(auth, provider);
    //result.user save to firestore
    return result
};

//signing out functionality
export const doSignOut = () => {
    return auth.signOut();
};

// //passwword change functionality takes in password
// //returns updated password of current authenticated user and new password
// export const doPasswordChange = (password) => {
//     return updatePassword(auth.currentUser, password);
// };

// //email verification functionality 
// export const doSendEmailVerification = () => {
//     return sendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/home`,
//     });
// };