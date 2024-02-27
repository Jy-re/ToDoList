import React from 'react';
import { ToDoListForm } from './ToDoListForm';
import { Item } from './Item';
import { useSelector } from 'react-redux';
import { EditItem } from './EditItem';

export const List = () => {
    const todos = useSelector((state) => state.todos.todos);

    return (
        <div>
            <h1>TODO LIST</h1>
            <p>To mark as complete, click on your todo text</p>
            <ToDoListForm />
            {todos.map((todo) => (
              todo.isEditing ? (
                <EditItem id={todo.id} todo={todo} />
              ) :
              (
                <Item key={todo.id} todo={todo} />
              )
                
            ))}
        </div>
    );
};
