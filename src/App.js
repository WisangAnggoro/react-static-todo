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
    <div className="App h-screen w-full flex justify-center items-center bg-green-100">
      <div class="relative w-full max-w-2xl">
        <div className="absolute inset-0 bg-black shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative w-full max-w-2xl bg-green-700 rounded-3xl p-6">
          <header>
            <h1 className="text-xl text-center text-white block font-bold p-3">Your Lovely Todo List ❤️</h1>
          </header>
          <body>
          <ToDoForm
              className="relative"
              handleChange={handleChange}
              addToDo={addToDo}
              toDo={toDo}
            />
            <ToDoList
              toDoList = {toDoList}
              removeToDo = {removeToDo}
            />  
          </body>
        </div>
      </div>
    </div>
  );
}

export default App;
