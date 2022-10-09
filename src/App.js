import React from 'react';
import { TodoCounter } from "./components/TodoCounter.js";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { TodoButtom } from "./components/TodoButtom";
// import './App.css';

function App() {

  const todos = [
    { text: 'Hacer ejercicio', complete: false},
    { text: 'Tomar cafe', complete: false},
    { text: 'Estudiar', complete: false}
  ];

  return (
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />
    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text}/>
      ))}
    </TodoList>
    <TodoButtom />
      <TodoButtom />
    </React.Fragment>
  );
}

export default App;
