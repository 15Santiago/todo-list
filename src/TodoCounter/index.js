import React from 'react';
import './style.css';

function TodoCounter ({ total, completed }) {
    return (
        <h2 className='TodoCounter'>Has completado {completed} de {total} Todos</h2>
    );
};

export { TodoCounter };