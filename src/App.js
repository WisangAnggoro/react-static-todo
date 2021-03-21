import './App.css';
import {useState} from 'react'
import {ToDoForm} from './ToDoForm'
import {ToDoList} from './ToDoList'

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");

  const handleChange = (e) => {
    setToDo(e);
  }
  const addToDo = () => {
    setToDoList([...toDoList, toDo])
    setToDo("");
  }

  const removeToDo = e => {
    setToDoList(toDoList.filter((f,index) => index!==e));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <ToDoForm
          handleChange={handleChange}
          addToDo={addToDo}
          toDo={toDo}
        />
        <ToDoList
          toDoList = {toDoList}
          removeToDo = {removeToDo}
        />  
      </header>
    </div>
  );
}

export default App;
