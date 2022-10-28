import React from 'react';
import './style.css';

function CreateTodoButton (props) {
    const onClickButton = () => {
        
    };

    return (
        <button 
        className="CreateTodoButton"
        onClick={onClickButton}
        >+</button>
    );
};

export { CreateTodoButton };