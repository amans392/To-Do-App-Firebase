
import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState("");
  //this state below see's the array as a string since there's string items in it.
  //Had to take the value state variable and create a separate varaible for updatedTasks set equal to tasks.slice() to create a separate array and push the value's into the copied array:
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  const [tasks, setTasks] = useState([]);

  
//captures input field data values
const handleSubmit = (event) => {
  event.preventDefault();
  //use of spread ... operator to connect current student to new students
  // setTasks( currentTasks => [...currentTasks, value]);

    const updatedTasks = tasks.slice();
    updatedTasks.push(value);
    setTasks(updatedTasks);
    setValue("");
}

// ///created click event function for add button that sets the alert to the input
//   const click = () => {
//     // console.log(value)
//     // const updatedTasks = tasks.slice();
//     // updatedTasks.push(value)
//     // setTasks(updatedTasks)

//   }
//event that passes event object into change function
  const change = event => {
    setValue(event.target.value)
  }
//function for adding tasks ... spread the tasks array
//array chnaged to tasks state variable


  return (

 <form onSubmit={handleSubmit}>
    <div className="todoapp stack-large">
      <h1>ToDoList</h1>
 
  <input
  onChange= {change}
  type="text"
  id="new-todo-input"
  className="input-field"
  placeholder="Type something here..."
  value={value}
  >
  </input>
  <button type='add' 
  >Add</button>


  <br></br>


  <h1 className="label-wrapper">
    List of Tasks
  </h1>
  <ul>
    {

      tasks.map((task, index) => {
        return(
          <li key={index}>{task}</li>
        )
        
      })
    }
  </ul>

    </div>
</form>
  );
}

export default App;
