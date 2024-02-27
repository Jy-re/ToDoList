import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleEditTodo, toggleComplete  } from '../feautres/todosSlice' 

export const Item = ({ todo }) => {
  
  const dispatch = useDispatch()

    const handleEditClick = () => {
      dispatch(toggleEditTodo(todo.id));
    };

  const handleToggleComplete = () => {
    dispatch(toggleComplete(todo.id));
  };
  

  return (
    <div className='todoItem'>
        <div className='todoText' >
            <p onClick={handleToggleComplete} className={`${todo.completed ? 'complete' : ""} task-text`}>{todo.task}</p>
        </div>
        <div className='todoOpts'>
            <button onClick={handleEditClick} >Edit</button>
            <button onClick={() => {dispatch(deleteTodo(todo.id))}} >Delete</button>
        </div>
    </div>
  )
}
