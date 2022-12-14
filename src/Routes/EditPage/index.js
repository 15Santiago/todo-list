import React from 'react';
import { useParams } from 'react-router-dom';
import { UseTodos } from '../UseTodos';
import { TodoForm } from '../../UI/TodoForm';

function EditPage () {
    const params = useParams();
    const id = Number(params.id);

    const {
        onEdit,
    } = UseTodos();

    return (
        <TodoForm 
            title='Edita tu TODO'
            titleButton='Confirmar'
            submitEvent={(newText) => onEdit(id, newText)}
        />
    );
};

export { EditPage };