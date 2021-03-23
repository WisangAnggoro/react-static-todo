export function ToDoForm(props) {
  return (
    <form className="bg-white shadow-md rounded px-8 py-8 pt-8"
      onSubmit = {(e) => {
        e.preventDefault();
        props.addToDo();
      }}
    >
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
      placeholder="Insert your plan today"
      value={props.toDo} 
      onChange={(e) => props.handleChange(e.target.value)} 
    />
    </form>
  );
}
