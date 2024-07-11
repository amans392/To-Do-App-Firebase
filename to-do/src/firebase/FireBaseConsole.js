// Import the functions you need from the SDKs you need
//current-time: https://youtu.be/WpIDez53SK4?t=762
//to deploy app: https://console.firebase.google.com/project/auth-app-886d1/overview
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

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

  measurementId: process.env.REACT_APP_FIREABASE_MEASUREMENTID

};


// Initialize Firebase

const app = initializeApp(fireBaseConfig);


export const auth = getAuth(app);

