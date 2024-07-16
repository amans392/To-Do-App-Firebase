// Import the functions you need from the SDKs you need
//working on FireStore:
//firebase fundamentals completed: https://www.youtube.com/watch?v=BjtxPj6jRM8&t=149s
//cloud firestore documentation: https://firebase.google.com/docs/firestore/quickstart
//to deploy app: https://console.firebase.google.com/project/auth-app-886d1/overview
import { initializeApp } from "firebase/app";
//imported getAuth from Firebase for authentication feature
import { getAuth } from 'firebase/auth';

//imports from Firestore
import { getFirestore, 
  doc, 
  setDoc, 
  addDoc, 
  getDoc, 
  collection, 
  onSnapshot, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs 
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


//exporting authentication variable
export const auth = getAuth(app);

const firestore = getFirestore();



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

const specialOfTheDay = doc(firestore, "dailySpecial/2021-09-14");
async function writeDailySpecial() {
  const docData = {
    description: "'A delicious vanilla Latte'",
    price: 3.99,
    milk: "Whole",
    vegan: false,
  };

try {
  await setDoc(specialOfTheDay, docData, { merge: true });
console.log("This value has been written to the database");
} catch (error) {
  console.log(`I got an error! ${error}`)
}
}

//or  a .then callback


//addDoc shown below is a call
//used for creating a new documnet with a randomly generated ID
// without specifying the document ID like above "dailySpecial/2021-09-14" 
//uses a collection reference instead of document reference

const ordersCollection = collection(firestore, 'orders')
async function addNewDocument() {
  const newDoc = await addDoc(ordersCollection, {
    customer: "Arthur",
    drink: "Latte",
    total_cost: (100 + Math.floor(Math.random() * 400)) / 100,
  });
  console.log(`Your doc was created at ${newDoc.path}`);
}

//use getDoc to read a single document
//passing in the getDoc reference for document to read
//example below is specialOfTheDay

async function readASingleDocument() {
  const mySnapshot = await getDoc(specialOfTheDay);
  //if statement used
  //checks if document exists using the .exists() method
  //and if it does, extract information
  if (mySnapshot.exists()) {
    //store dcData in a variable using .data() method
    const docData = mySnapshot.data();
    //then print out a stringified version to the console
    console.log(`My data is ${JSON.stringify(docData)}`)
  }
}

//use onSnapShot
//to listen to a document in realtime if it changes
//pass in reference of document to listen to like below specialOfTheDay,
//as well as the listener itself as shown below:
//dailySpeicalUnsubscribe return variable
//set equal to onSnapShot
//Then stored in let variable below
//as shown below stored in a let variable
//called to unsubscribe from that listener

let dailySpecialUnsubscribe;

function listenToADocument() {
  dailySpecialUnsubscribe = onSnapshot(specialOfTheDay, docSnapshot => {
    //check if document exists
    if (docSnapshot.exists()) {
      const docData = docSnapshot.data();
      //prints strigified docData to console
      console.log(`In realtime, docData is ${JSON.stringify(docData)}`)
    }
//the listener fires when you first setup your listener
//then anything when document changes
//disable listener when you no longer need it
  });
}

function cancelMyListenerAtTheAppropriateTim() {
  dailySpecialUnsubscribe();
}

//creating a query to grab multiple documents at once
//call query then pass in a list of contraints for that query
//pass in a collection reference in firestore inside the query
//example below is the 'orders' collection
//a where clause

//put listener function in let variable
let unsubscribeCustomerOrders;
async function queryForDocuments() {
  const customerOrdersQuery = query(
    collection(firestore, "orders"),
    //grabs all orders where drink type equals latte
    where("drink", "==", "Latte"),
    // orderBy("price"),
    //limit to make sure you're not adding mroe data than client wants
    //saves data usage and money
    limit(10),
  );
  //once query built above, 
  //getDocs similar to getDoc call is used to retrieve
  //passing in newly created query

  // const querySnapshot = await getDocs(customerOrdersQuery)

  //querySnapshot will return an array of snapshots that were returned by the query
 //.docs calls for all of them, whereas .forEach() to get them one at a time
//use onSnapShot pass in query intead of document reference
//then in listener callback, 

//canceling the listener
  unsubscribeCustomerOrders = onSnapshot(
    customerOrdersQuery,
    (querySnapshot) => {
    console.log(JSON.stringify(querySnapshot.docs.map((e) => e.data())));
    }
    );
}

//   querySnapshot.forEach((snap) => {
//     console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data())}`);
//   });
// })

 

//firestore can let you know in realtime if document has changed
//using a snapshot listener

console.log("Hello Firestore!");
writeDailySpecial();
addNewDocument();
readASingleDocument();
listenToADocument();
queryForDocuments();