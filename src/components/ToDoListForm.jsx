import React, { useState } from 'react'

export const ToDoListForm = ({addTodo}) => {

  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value)

    setValue("")
  }

  return (
    <div className='formContainer'>
      <form className='addTodoForm' onSubmit={handleSubmit}>
        <input 
          type='text' 
          className='inputTodo' 
          value={value}
          placeholder='Add your Todo List for Today!'
          onChange={(e) => setValue(e.target.value)} />
        <button type='submit'>Add To Do</button>
      </form>      
    </div>
  )
}
