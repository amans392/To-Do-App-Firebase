import { store } from "../../firebase/FireBaseConsole"
import { doc, setDoc } from "firebase/firestore"
import AuthDetails from "../GetAuth/AuthDetails"

//passed in tasks state and activeUser function from App.js
const SaveUserData = ({tasks, activeUser}) => {

//saving user data to FireStore Database
  async function SaveUserData(event) {
    //saved data to users collection under their accounts specific UID
    const userTasks = doc(store, "users/" + activeUser.uid)
    //checks if there's an active user then stores their email, created tasks, and user ID to their storage
    if (activeUser) {
        const docData = {
            name: activeUser.email,
           description: {tasks},
           token: activeUser.uid
         };
      
         try {

            //prevents page from rendering so that created tasks can be saved
            event.preventDefault()
            //waits on user tasks and docData below being collected before writing data to the database
          await setDoc(userTasks, docData );
          console.log("User tasks have been written to the database")
          console.log(docData)
         } catch (error) {
          console.log(`I got an error! ${error}`)
         }
        } else {
            console.log("Feature unavailable, you are not signed in")
        }
    };

    return (
        //creates a save button that runs the SaveUserData function defined above
            <button onClick={SaveUserData}>Save</button>
     );
}
 
export default SaveUserData;