import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../feautres/todosSlice';

export const ToDoListForm = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(value));
        setValue(''); 
    };

    return (
        <div className='formContainer'>
            <form className='addTodoForm' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='inputTodo'
                    placeholder='Add your Todo List for Today!'
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type='submit'>Add To Do</button>
            </form>
        </div>
    );
};
