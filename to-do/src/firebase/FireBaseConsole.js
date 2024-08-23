// Import the functions you need from the SDKs you need
//working on FireStore:
//Firebase Authentication video: https://youtu.be/rbuSx1yEgV8?t=692
//firebase fundamentals completed: https://www.youtube.com/watch?v=BjtxPj6jRM8&t=149s
//cloud firestore documentation: https://firebase.google.com/docs/firestore/quickstart
//to deploy app: https://console.firebase.google.com/project/auth-app-886d1/overview
import { initializeApp } from "firebase/app";
//imported getAuth from Firebase for authentication feature
import { getAuth,
 } from 'firebase/auth';

//imports from Firestore
import { getFirestore, 

} from "firebase/firestore";

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

//exported getfireStore as store const variable using app variable stored initialization configuration for firebase
export const store = getFirestore(app);

