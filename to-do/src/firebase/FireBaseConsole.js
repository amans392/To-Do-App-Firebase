// Import the functions you need from the SDKs you need
//working on FireStore:
//https://youtu.be/drF8HbnW87w?t=1633
//cloud firestore documentation: https://firebase.google.com/docs/firestore/quickstart
//to deploy app: https://console.firebase.google.com/project/auth-app-886d1/overview
import { initializeApp } from "firebase/app";
//imported getAuth from Firebase for authentication feature
import { getAuth } from 'firebase/auth';
//imported getDatbase from Firebase for realtime Database usage feature
import { getDatabase, ref } from "firebase/database";




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


//exporting authentication variable
export const auth = getAuth(app);

//initializes Realtime Database and get a reference to the service
//exporting database variable
export const database = getDatabase(app);