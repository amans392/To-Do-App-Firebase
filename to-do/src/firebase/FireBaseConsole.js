// Import the functions you need from the SDKs you need
//working on FireStore:
//Firebase Authentication video: https://youtu.be/rbuSx1yEgV8?t=692
//firebase fundamentals completed: https://www.youtube.com/watch?v=BjtxPj6jRM8&t=149s
//cloud firestore documentation: https://firebase.google.com/docs/firestore/quickstart
//to deploy app: https://console.firebase.google.com/project/auth-app-886d1/overview
import { initializeApp } from "firebase/app";
//imported getAuth from Firebase for authentication feature
import { getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword
 } from 'firebase/auth';

//imports from Firestore
import { getFirestore, 
  // doc, 
  // setDoc, 
  // addDoc, 
  // getDoc, 
  // collection, 
  // onSnapshot, 
  // query, 
  // where, 
  // orderBy, 
  // limit, 
  // getDocs 
} from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const fireBaseConfig = {

  apiKey: process.env.REACT_APP_FIREABASE_APIKEY,

  authDomain: process.env.REACT_APP_FIREABASE_AUTHDOMAIN,

  projectId: process.env.REACT_APP_FIREABASE_PROJECTID,

  storageBucket: process.env.REACT_APP_FIREABASE_STORAGEBUCKET,

  messagingSenderId: process.env.REACT_APP_FIREABASE_MESSAGINGSENDERID,

  appId: process.env.REACT_APP_FIREABASE_APPID,

  measurementId: process.env.REACT_APP_FIREABASE_MEASUREMENTID,

  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL
};


// Initialize Firebase
const app = initializeApp(fireBaseConfig);

//exporting  imported getAuth function as auth conts variable with app initialization configuration
export const auth = getAuth(app);
//connect app to firebase emulator suite for personal testing instances of firebase
//perfect for development and testing

//set emulator to port 9099 as shown below
// connectAuthEmulator(auth, "https://localhost:9099");
//email and password authentication being tested
// const loginEmailPassword = aysnc () => {

// }



//exported getfireStore as store const variable using app variable stored initialization configuration for firebase
export const store = getFirestore(app);



//imported setDoc command will write the document if it doesn't exist and completely replace a document that exists at this location
//passed in const specialofTheDay and DocData variable as object with key value pairs as shown above
//updateDoc command will only update fields that you specify while keeping old data in place
//but will throw error if document doens't exist
//you can use setDoc command with {merge: true} after the two passed in variables as third argument
//will only replace the specified fields
//writing to a document is an async call that returns a promise
//so you could put setDoc in an async await call
/*adding 
.then(() = > {
console.log("This value has been written to the database")
}) 
*/

/* with error checking
.catch(error) => {
  console.log(`I got an error! ${error}`)};

 Like example below: 
*/

