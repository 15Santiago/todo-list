import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function TodoForm ({
    submitEvent, 
    title, 
    titleButton, 
    textToEdit
    }){

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const navigate = useNavigate();

    const onWrite = (event) => {
        setNewTodoValue (event.target.value);
    };

    const onCancel = () =>{
        navigate('/');
    };

    const onSubmit = (event) =>{
        event.preventDefault();
        submitEvent(newTodoValue);
        navigate('/');
    };
    
    return (
        <form onSubmit={onSubmit}>
            <label>{title}</label>
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
                >{titleButton}</button>
            </div>
        </form>
    );
};

export { TodoForm };