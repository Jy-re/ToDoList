import { createSlice } from "@reduxjs/toolkit";

const storedTodos = JSON.parse(localStorage.getItem('todos'));
const initialState = {
    todos: storedTodos ? storedTodos : [],
}; // para ma get nato ang saved todos from the local storage

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: state.todos.length, 
                task: action.payload,
                completed: false,
                isEditing: false,
            });
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        toggleComplete: (state, action) => {
            //so here, mag iterate siya sa each todo item and iya e set sa opposite value if ma trigger siya. so if completed is false, once matrigger ni na action is mahimo siya ug true
            const complete = state.todos.findIndex(todo => todo.id === action.payload);
            state.todos[complete].completed = !state.todos[complete].completed;
            localStorage.setItem('todos', JSON.stringify(state.todos));  //para ma store siya sa array nga naa sa local
        },
        toggleEditTodo: (state, action) => {
            //here naman, is if atong e set ug true ang atong isEditing later if ma trigger ang edit button
            const toggleEdit = state.todos.findIndex(todo => todo.id === action.payload);
            state.todos[toggleEdit].isEditing = !state.todos[toggleEdit].isEditing;
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        editTodo: (state, action) => {
            //dito naman, is nag himo ta ug new task name sa atong gusto ilisan nga task name. then after ana, is ma set dayon siya ug false ang status sa isEditing, para ma close na dayon ang edit form
            const editTask = state.todos.findIndex(todo => todo.id === action.payload.id);
            state.todos[editTask].task = action.payload.newTask;
            state.todos[editTask].isEditing = false;
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        deleteTodo: (state, action) => {
            //okay, so here is atong atong gi wala ang selected nga item sa bag-o nga array nga atong gibuhat through filter
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
    },
});

//export natin para magamit everywhere
export const {  addTodo, toggleComplete, toggleEditTodo, editTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;