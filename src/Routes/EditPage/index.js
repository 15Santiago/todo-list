import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { UseTodos } from '../UseTodos';
import { TodoForm } from '../../UI/TodoForm';

function EditPage () {
    const params = useParams();
    const {
        loading,
        onEdit,
        getTodo,
    } = UseTodos();
    const location = useLocation();     
    const id = Number(params.id);

    let todoText;

    if (location.state?.todo) {
        todoText = location.state.todo.text;
    } else if (loading) {
        return <p>Cargando...</p>;
    } else {
        const todo = getTodo(id);
        todoText = todo.text;
    };

    return (
        <TodoForm 
            title='Edita tu TODO'
            titleButton='Confirmar'
            submitEvent={(newText) => onEdit(id, newText)}
            textToEdit={todoText}
        />
    );
};

export { EditPage };