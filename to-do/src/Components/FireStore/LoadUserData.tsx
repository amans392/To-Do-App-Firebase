
import { doc, getDoc } from "firebase/firestore";
import { store } from "../../firebase/FireBaseConsole.tsx";
import React from 'react';
const LoadUserData = ({activeUser, data, handleData, tasks, handleTasks}) => {

    async function loadUserData(event) {
        
        if (activeUser) {
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

            //logs client task data property to the console
            handleData(docData.description.tasks);
            console.log("Current Data is:", docData.description.tasks)
            
          } else {
            console.log("No data found");
          }}
          
        };

        // const displayTasks = (data) => {
        //   handleTasks(data)
        //   console.log(data)
        // }
        // displayTasks("tasks are", data)

    return (       
      <div className="load_btn">
                <button onClick={loadUserData} >Load</button>
      </div>  
        
     );
}
 
export default LoadUserData;