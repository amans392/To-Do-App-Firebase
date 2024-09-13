//Add Bootstrap styling: https://getbootstrap.com/docs/5.3/components/buttons/
import LoadUserData from "./FireStore/LoadUserData.tsx";
import SaveUserData from "./FireStore/SaveUserData.tsx";
import React from 'react';

const ToDo = ({tasks, handleTasks, value, handleValue, activeUser, data, handleData }) => {

//captures input field data values
const handleClick = (event) => {
    event.preventDefault();
  //creates a copy of the array of tasks
      const updatedTasks = tasks.slice();
      //adds the value from the input field to the list of tasks
      updatedTasks.push(value);
      //set the updated tasks state variable to the updated Tasks list
      //then when cliecked, adds new tasks from input field
      handleTasks(updatedTasks);
      //clears the search bar value field
      handleValue("");
  }

  //event that passes event object into change function
    const change = event => {
      handleValue(event.target.value)
    }
  //function for adding tasks ... spread the tasks array
  //array chnaged to tasks state variable
  
  const handleDelete = (index) => {
  //created a variable with a copied list of the array task items using .slice
    const reducedTasks = tasks.slice();
    //used .splice() method to remove existing element tasks by index more info on method from mdn link below
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    console.log("Item deleted", index)
    reducedTasks.splice(index, 1);
    //set list of arrays in tasks state variable to the spliced task list
    handleTasks(reducedTasks)
    
    
    // const newTasks = tasks.filter((li) => li.id !== id);
    // handleTasks(newTasks)
  
  }


    return ( 

    <div>
      {activeUser ? (
        <div>
          <form>
            <div className="todoapp-wrapper">
              <h1>To Do App</h1>
 
                <input
                //use of onChange event equal to change function
                //change function defined above sets the value state to the event.target.value input field
                onChange= {change}
                type="text"
                id="new-todo-input"
                className="input-field"
                placeholder="Type something here..."
                value={value}
                >
                </input>
                <button onClick={handleClick}>Add</button>



              <h1 className="label-wrapper">
                List of Tasks
              </h1>
                <div className="save-load-container">
                  <SaveUserData tasks={tasks} 
                  activeUser={activeUser}></SaveUserData>
                  
                  <LoadUserData activeUser={activeUser} 
                  data={data}
                  handleData={handleData}
                  tasks={tasks}
                  handleTasks={handleTasks}>
                  </LoadUserData>
            </div>
              <ul>
                {
                //callback function that creates a new array of tasks calling on each of the elements in the array
                //returns an the task and associates it with it's index
                  tasks.map((task, index, key, id) => {
                    return(
                      //key listed as the indoex of the task
                      //set key equal to {task} parameter instead of index for a unique key
                      //id set equal to index to pass in to handeDelete for delete button functionality
                      <li key={task} id={index}>
                        {/* <input type="checkbox"></input> */}
                         {task}
                        <button
                        onClick={() => handleDelete(index)}>
                          Delete
                        </button>
                      </li>       
                          )}
                        )}
              </ul>
            </div>
          </form>
        </div>
      ) : (

        <div>
          <form>
            <div className="todoapp-wrapper">

              <h1>To Do List</h1>
        
              <input
              //use of onChange event equal to change function
              //change function defined above sets the value state to the event.target.value input field
              onChange= {change}
              type="text"
              id="new-todo-input"
              className="input-field"
              placeholder="Type tasks here..."
              value={value}
              >
              </input>
              <button onClick={handleClick}>Add</button>


              <h2 className="label-wrapper">
                List of Tasks
              </h2>

              <ul>
                {
                  //callback function that creates a new array of tasks calling on each of the elements in the array
                  //returns an the task and associates it with it's index
                  tasks.map((task, index) => {
                    return(
                      //key listed as the indoex of the task
                      //set key equal to {task} parameter instead of index for a unique key
                      //id set equal to index to pass in to handeDelete for delete button functionality
                      <li key={task}> 
                        {task}    
                        <button
                        onClick={() => handleDelete(index)}>
                          Delete
                        </button>            
                      </li>       
                    )        
                  })
                }

              </ul>
            </div>
          </form>
        </div>
        )}
      </div>
    )
}
 
export default ToDo;