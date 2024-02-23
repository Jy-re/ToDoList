import React, { useState, useEffect } from 'react';
import { ToDoListForm } from './ToDoListForm';
import { Item } from './Item';
import { EditItem } from './EditItem';

export const List = () => {
    // Load todos from localStorage on component mount
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    // Save todos to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = todo => {
        setTodos([...todos, {
            task: todo,
            completed: false, 
            isEditing: false,
            index: todos.length 
        }]);
    };


    // if  i matches our todo index then mark as complete,
    const markItemComplete = index => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: !todo.completed} : todo));
    };

    const editItem = index => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, isEditing: !todo.isEditing} : todo));
    };

    const editTask = (newTask, index) => {
        setTodos(todos.map((todo, i) => i === index ? { ...todo, task: newTask, isEditing: false } : todo));
    };

    const deleteItem = index => {
        setTodos(todos.filter((todo, i) => i !== index));
    };
    
    return (
      <div>
        <h1>TODO LIST</h1>
        <p>To mark as complete, click on your todo text</p>
          <ToDoListForm addTodo={addTodo} />
          {todos.map((todo, index) => (
              todo.isEditing ? (
                  <EditItem key={index} editTask={editTask} task={todo}/>
              ) :
              (
                  <Item task={todo} key={index} markComplete={() => markItemComplete(index)} deleteItem={() => deleteItem(index)} editItem={() => editItem(index)}/>
              )
          ))}
      </div>
    );
};
