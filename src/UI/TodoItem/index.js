import React from 'react';
import './style.css';

function TodoItem (props) {

    return (
        <li className='TodoItem'>
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            >√</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}</p>
            <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
            >X</span>
            <span
                className={`Icon Icon-edit ${props.edit && 'TodoItem-edit--active'}`}
                onClick={props.onEdit}
            >Edit</span>
        </li>
    );
};

export { TodoItem };