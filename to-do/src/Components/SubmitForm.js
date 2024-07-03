const SubmitForm = (input, setInput) => {


//captures input field data values

    return ( 
        <form>
  <h2 className="label-wrapper">
    What needs to be done
  </h2>
  <input
  type="text"
  id="new-todo-input"
  className="input-field"
  placeholder="Enter Task Here..."
  value={input}
  //uses handleChange function with e.target.value to capture input values
  onChange={(e) => setInput(e.target.value)}
  >
  </input>
  <button type='submit' 
  >Add Task</button>
</form>
     );
}
export default SubmitForm;