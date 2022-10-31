import React from 'react';
import './style.css';

function TodoForm ({addTodo, setOpenModal}) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onWrite = (event) => {
        setNewTodoValue (event.target.value);
    };

    const onCancel = () =>{
        setOpenModal(false);
    };

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onWrite}
                placeholder='Estudiar'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    className='TodoForm-button TodoForm-button--add'
                    type='submit'
                >Añadir</button>
            </div>
        </form>
    );
};

export { TodoForm };