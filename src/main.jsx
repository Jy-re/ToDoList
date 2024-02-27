import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit' 
import { Provider } from 'react-redux'
import todosSlice from './feautres/todosSlice.jsx'

export const store = configureStore({
  reducer: {
    todos: todosSlice
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
