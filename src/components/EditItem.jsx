import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../feautres/todosSlice';

export const EditItem = ({ id, todo }) => { 
    const dispatch = useDispatch();
    const [value, setValue] = useState(todo.task); 

    const handleEditSubmit = (e) => {
        e.preventDefault(); 
        dispatch(editTodo({ id: id, newTask: value }));
    };

    return (
        <div className='formContainer'>
            <form className='addTodoForm' onSubmit={handleEditSubmit}>
                <input
                    type='text'
                    className='inputTodo'
                    placeholder='Edit Task Name'
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type='submit'>Edit To Do</button>
            </form>
        </div>
    );
};
