import React from 'react';
import './style.css';

function CreateTodoButton (props) {
    const onClickButton = () => {
        props.onClick();
    };

    return (
        <button 
        className="CreateTodoButton"
        onClick={onClickButton}
        >+</button>
    );
};

export { CreateTodoButton };