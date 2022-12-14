import React from 'react';
import { UseTodos } from '../UseTodos'
import { TodoForm } from '../../UI/TodoForm';

function NewPage () {
    const {
        addTodo,
    } = UseTodos();

    return (
        <TodoForm 
            submitEvent = {(text) => addTodo(text)}
            title='Crea un nuevo TODO'
            titleButton='Crear' 
        />
    );
};

export { NewPage };