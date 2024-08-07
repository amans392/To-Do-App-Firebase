const ToDo = ({tasks, handleTasks, value, handleValue}) => {

//captures input field data values
const handleClick = (event) => {
    event.preventDefault();
    //use of spread ... operator to connect current student to new students
    // handleTasks( currentTasks => [...currentTasks, value]);
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
  //logs tasks added by user to console
  // console.log(userTasks);
  
  
  
  // ///created click event function for add button that sets the alert to the input
  //   const click = () => {
  //     // console.log(value)
  //     // const updatedTasks = tasks.slice();
  //     // updatedTasks.push(value)
  //     // handleTasks(updatedTasks)
  
  //   }
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
    reducedTasks.splice(index);
    //set list of arrays in tasks state variable to the spliced task list
    handleTasks(reducedTasks)
  
    // const newTasks = tasks.filter((li) => li.id !== id);
    // handleTasks(newTasks)
  
  }


    return ( 

        <div>
            <form>
    <div className="todoapp stack-large">
      <h1>ToDoList</h1>
 
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


  <br></br>


  <h1 className="label-wrapper">
    List of Tasks
  </h1>
  <ul>
    {
  //callback function that creates a new array of tasks calling on each of the elements in the array
  //returns an the task and associates it with it's index
      tasks.map((task, index) => {
        return(
          //key listed as the indoex of the task
          //set key equal to {task} parameter instead of index for a unique key
          //id set equal to index to pass in to handeDelete for delete button functionality
          <li key={task} id={index}> {task}
          <button 
          onClick={() => handleDelete(index)}>
            Delete
          </button></li>       
        )        
      })
    }
  </ul>

    </div>
</form>
        </div>

     );
}
 
export default ToDo;