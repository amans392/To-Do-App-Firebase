import { store } from "../../firebase/FireBaseConsole"
import AuthDetails from "../GetAuth/AuthDetails"
const SaveUserData = (tasks, authUser) => {

    const loginStatus = (authUser) => {
        if (authUser !== null) {
            console.log("Signed in user is...", authUser)
        } else {
            console.log("User is not logged in")
        }
        
    }

    const handleClick = (event) => {
        event.preventDefault()
        
        console.log("Save Button Clicked")
        console.log("Signed in user is...", authUser)
        console.log("Tasks are...", tasks)

    }

    loginStatus();

    return (
            <button onClick={handleClick}>Save</button>
     );
}
 
export default SaveUserData;