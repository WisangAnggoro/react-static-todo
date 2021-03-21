export function ToDoForm(props) {
  return (
    <form
      onSubmit = {(e) => {
        e.preventDefault();
        props.addToDo();
      }}
    >
    <input 
      value={props.toDo} 
      onChange={(e) => props.handleChange(e.target.value)} 
    />
    </form>
  );
}
