import { doc, getDoc } from "firebase/firestore";
import { store } from "../../firebase/FireBaseConsole";

const LoadUserData = ({activeUser}) => {

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

            const data = docData.description.tasks
            //logs client task data property to the console
            console.log("User Data Loaded...", data)
          } else {
            console.log("No data found");
          }}
          
        };

    return ( <button onClick={loadUserData} className="load_btn">Load</button> );
}
 
export default LoadUserData;