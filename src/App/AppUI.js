import React from 'react';
import { todoContext } from '../TodoContext/index';
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { Modal } from '../Modal/index'
import { TodoForm } from '../TodoForm';

function AppUI () {
    const { 
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(todoContext);

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>

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
                    <TodoForm/>
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

        </React.Fragment>
    );
};

export { AppUI };