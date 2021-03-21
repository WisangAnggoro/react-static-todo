import {FaCross, FaEdit} from 'react-icons/fa'

export function ToDoList(props) {
  return (
    <ul>
      {
        props.toDoList.map((e,index) => 
          <li>
            <b>{index+1}</b> - {e}  
            <FaEdit />
            <FaCross 
              onClick={(f) => {
                f.preventDefault()
                props.removeToDo(index)
              }}
            />    
          </li>
        )
      }
    </ul>
  );
}