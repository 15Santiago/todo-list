import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseTodos } from '../UseTodos';
import { TodoHeader } from '../../UI/TodoHeader';
import { TodoCounter } from '../../UI/TodoCounter';
import { TodoSearch } from '../../UI/TodoSearch';
import { TodoList } from '../../UI/TodoList';
import { TodoItem } from '../../UI/TodoItem';
import { CreateTodoButton } from '../../UI/CreateTodoButton';

function HomePage() {
  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
  } = UseTodos();
  const navigate = useNavigate();

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
            key={todo.id} 
            text={todo.text} 
            completed={todo.complete}
            onEdit={() => navigate(`/edit/${todo.id}`)}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            />
          ))}
      </TodoList>

    <CreateTodoButton
      onClick={() => navigate('/new')}
    />

    </React.Fragment>
  );
}

export  { HomePage };
