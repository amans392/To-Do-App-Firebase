import AuthDetails from "../GetAuth/AuthDetails";
import ToDo from "../ToDo";

//Private page created for Navigating authenticated users to
//passed down props from app.js for use in AuthDetails and ToDo components
const Private = ({tasks, setUser, activeUser, value, handleValue, data, handleData, handleTasks}) => {
    return ( 

        <div>
        <AuthDetails tasks={tasks} setUser={setUser} activeUser={activeUser} handleData={handleData}></AuthDetails>
        <ToDo activeUser={activeUser} tasks={tasks} handleTasks={handleTasks} value={value} 
            handleValue={handleValue} data={data} handleData={handleData}></ToDo>
            
        
    </div>

     );
}
 
export default Private;