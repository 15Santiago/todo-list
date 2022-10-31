import React from 'react';
import { UseTodos } from './UseTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { Modal } from '../Modal/index'
import { TodoForm } from '../TodoForm';

function App() {
  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
  } = UseTodos();

  return (
    <React.Fragment>
      <TodoHeader>
          <TodoCounter 
              totalTodos={totalTodos}
              completedTodos={completedTodos}
          />
          <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
          />
      </TodoHeader>
      <TodoList>
          {error && <p>Error al cargar</p>}
          {loading && <p>Estamos cargando</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}
      
          {searchedTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.complete}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
        />
      ))}
      </TodoList>

      {!!openModal && (
          <Modal>
              <TodoForm
                addTodo = {addTodo} 
                setOpenModal = {setOpenModal}
              />
          </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export  { App };
