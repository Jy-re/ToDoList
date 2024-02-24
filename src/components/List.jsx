import React, { useState, useEffect } from 'react';
import { ToDoListForm } from './ToDoListForm';
import { Item } from './Item';
import { EditItem } from './EditItem';

export const List = () => {
    // Gets the todos that was saved in the local storage
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    // Save todos to localStorage when todos change
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

    // If i matches an index from our array, it sets the isEditing to true
    const editItem = index => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, isEditing: !todo.isEditing} : todo));
    };

    // if our chosen i matches an index from our array it assigns a new task and exits the editing mode by setting the already true isEditing to false 
    const editTask = (newTask, index) => {
        setTodos(todos.map((todo, i) => i === index ? { ...todo, task: newTask, isEditing: false } : todo));
    };

    // the filter function creates a new array based on the condition so if our chosen i doesn't match the index of an item in our array, it excludes that item from the new array which then, deletes it
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
