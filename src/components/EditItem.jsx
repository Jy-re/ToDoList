import React, { useState } from 'react'

export const EditItem = ({ editTask, task }) => {

  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();

    editTask(value, task.index)

    setValue("")
    console.log(value)
  }

  return (
    <div className='formContainer'>
      <form className='editTodoForm' onSubmit={handleSubmit}>
        <input 
          type='text' 
          className='inputTodoEdit' 
          value={value}
          placeholder='Update Task Name'
          onChange={(e) => setValue(e.target.value)} />
        <button type='submit'>Edit To Do</button>
      </form>      
    </div>
  )
}
