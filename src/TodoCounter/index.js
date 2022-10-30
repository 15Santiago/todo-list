import React from 'react';
import { todoContext } from '../TodoContext';
import './style.css';

function TodoCounter () {
    const { totalTodos, completedTodos } = React.useContext(todoContext);
    return (
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} Todos</h2>
    );
};

export { TodoCounter };