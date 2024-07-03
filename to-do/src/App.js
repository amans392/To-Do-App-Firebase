
import './App.css';

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>ToDoList</h1>
<form>
  <h2 className="label-wrapper">
    What needs to be done
  </h2>
  <input
  type="text"
  id="new-todo-input"
  className="input-field"
  placeholder="Type something here..."
  >
  </input>
</form>

    </div>
  );
}

export default App;
