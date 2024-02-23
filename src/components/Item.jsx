import React from 'react'

export const Item = ({task, markComplete, deleteItem, editItem}) => {
  return (
    <div className='todoItem'>
        <div className='todoText' >
            <p onClick={() => markComplete(task.task)} className={`${task.completed ? 'complete' : ""} task-text`}>{task.task}</p>
        </div>
        <div className='todoOpts'>
            <button onClick={() => editItem(task.task)}>Edit</button>
            <button onClick={() => deleteItem(task.task)}>Delete</button>
        </div>
    </div>
  )
}
