// import React from "react";

// import { store } from "../../firebase/FireBaseConsole";
// import { 
//   doc, 
//   setDoc, 
//   addDoc, 
//   getDoc, 
//   collection, 
//   onSnapshot, 
//   query, 
//   where, 
//   orderBy, 
//   limit, 
//   getDocs,
//  } from "firebase/firestore";



// const WriteUserData = (tasks) => {

//   // const specialOfTheDay = doc(store, "dailySpecial/2021-09-14");
//   const userTasks = doc(store, "taskList/2024-07-17")
 
//   async function writeUserTasks() {
//    const docData = {
//       name: 'guest',
//      description: {tasks}
//    };

//    try {
//     await setDoc(userTasks, docData);
//     console.log("User tasks have been written to the database")
//    } catch (error) {
//     console.log(`I got an error! ${error}`)
//    }
//   }
 
  // async function writeDailySpecial() {
  //   const docData = {
  //     description: "'A delicious vanilla Latte'",
  //     price: 3.99,
  //     milk: "Whole",
  //     vegan: false,
  //   };
  
  // try {
  //   await setDoc(specialOfTheDay, docData, { merge: true });
  // console.log("This value has been written to the database");
  // } catch (error) {
  //   console.log(`I got an error! ${error}`)
  // }
  // }
  
  //or  a .then callback
  
  
  //addDoc shown below is a call
  //used for creating a new documnet with a randomly generated ID
  // without specifying the document ID like above "dailySpecial/2021-09-14" 
  //uses a collection reference instead of document reference
  
  // const ordersCollection = collection(store, 'orders')
  // async function addNewDocument() {
  //   const newDoc = await addDoc(ordersCollection, {
  //     customer: "Arthur",
  //     drink: "Latte",
  //     total_cost: (100 + Math.floor(Math.random() * 400)) / 100,
  //   });
  //   console.log(`Your doc was created at ${newDoc.path}`);
  // }
  
  //use getDoc to read a single document
  //passing in the getDoc reference for document to read
  //example below is specialOfTheDay
  
  // async function readASingleDocument() {
  //   const mySnapshot = await getDoc(specialOfTheDay);
  //   //if statement used
  //   //checks if document exists using the .exists() method
  //   //and if it does, extract information
  //   if (mySnapshot.exists()) {
  //     //store dcData in a variable using .data() method
  //     const docData = mySnapshot.data();
  //     //then print out a stringified version to the console
  //     console.log(`My data is ${JSON.stringify(docData)}`)
  //   }
  // }
  
  //use onSnapShot
  //to listen to a document in realtime if it changes
  //pass in reference of document to listen to like below specialOfTheDay,
  //as well as the listener itself as shown below:
  //dailySpeicalUnsubscribe return variable
  //set equal to onSnapShot
  //Then stored in let variable below
  //as shown below stored in a let variable
  //called to unsubscribe from that listener
  
  // let dailySpecialUnsubscribe;
  
  // function listenToADocument() {
  //   dailySpecialUnsubscribe = onSnapshot(specialOfTheDay, docSnapshot => {
  //     //check if document exists
  //     if (docSnapshot.exists()) {
  //       const docData = docSnapshot.data();
  //       //prints strigified docData to console
  //       console.log(`In realtime, docData is ${JSON.stringify(docData)}`)
  //     }
  // //the listener fires when you first setup your listener
  // //then anything when document changes
  // //disable listener when you no longer need it
  //   });
  // }
  
  // function cancelMyListenerAtTheAppropriateTim() {
  //   dailySpecialUnsubscribe();
  // }
  
  //creating a query to grab multiple documents at once
  //call query then pass in a list of contraints for that query
  //pass in a collection reference in firestore inside the query
  //example below is the 'orders' collection
  //a where clause
  
  //put listener function in let variable
  
  // let unsubscribeCustomerOrders;
  // async function queryForDocuments() {
  //   const customerOrdersQuery = query(
  //     collection(store, "orders"),
  //     //grabs all orders where drink type equals latte
  //     where("drink", "==", "Latte"),
  //     // orderBy("price"),
  //     //limit to make sure you're not adding mroe data than client wants
  //     //saves data usage and money
  //     limit(10),
  //   );
  //   //once query built above, 
    //getDocs similar to getDoc call is used to retrieve
    //passing in newly created query
  
    // const querySnapshot = await getDocs(customerOrdersQuery)
  
    //querySnapshot will return an array of snapshots that were returned by the query
   //.docs calls for all of them, whereas .forEach() to get them one at a time
  //use onSnapShot pass in query intead of document reference
  //then in listener callback, 
  
  //canceling the listener
  //   unsubscribeCustomerOrders = onSnapshot(
  //     customerOrdersQuery,
  //     (querySnapshot) => {
  //     console.log(JSON.stringify(querySnapshot.docs.map((e) => e.data())));
  //     }
  //     );
  // }
  
  //   querySnapshot.forEach((snap) => {
  //     console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data())}`);
  //   });
  // })
  
  //created handleclick function to run writeUserTasks to database when saveData button is clicked
  //  const handleClick = (event) => {
  //   //prevents page from refreshing
  //     event.preventDefault()
  //     writeUserTasks()
 
    
    
   
  
  //firestore can let you know in realtime if document has changed
  //using a snapshot listener
  

//    }
//    console.log("Hello Firestore!");
//   // writeDailySpecial();
//  //  addNewDocument();
//  //  readASingleDocument();
//  //  listenToADocument();
//  //  queryForDocuments();
  
//   return ( <div className="save_button"> 
//     <form onSubmit={handleClick}>
//     <button>SaveData</button>
//     </form>
    
//   </div> );
// }
 
// export default WriteUserData;
