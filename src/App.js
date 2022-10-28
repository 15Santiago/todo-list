import React from 'react';
import { TodoCounter } from './TodoCounter/index';
import { TodoSearch } from './TodoSearch/index';
import { TodoList } from './TodoList/index';
import { TodoItem } from './TodoItem/index';
import { CreateTodoButton } from './CreateTodoButton/index';
// import './App.css';

const todos = [
  {text: 'Estudiar ReactJS', complete: false},
  {text: 'Estudiar Ingles', complete: false},
  {text: 'Ver formula 1', complete: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        {todos.map(todo => (
          <TodoItem text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}

export default App;
