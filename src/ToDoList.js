import {FaCross, FaEdit} from 'react-icons/fa'

export function ToDoList(props) {
  return (
    <ul>
      {
        props.toDoList.map((e,index) => 
          <li className="grid grid-cols-12 gap-1 shadow appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-white focus:shadow-outline bg-white mt-1">
            <div>
              <b>{index+1}</b> 
            </div>
            <div className="col-span-9">
              {e}
            </div>
            <div>
              <FaEdit />
            </div>
            <div>
              <FaCross 
                onClick={(f) => {
                  f.preventDefault()
                  props.removeToDo(index)
                }}
              />
            </div> 
          </li>
        )
      }
    </ul>
  );
}