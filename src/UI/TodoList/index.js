import React from 'react';
import './style.css';

function TodoList (props) {
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
};

export { TodoList };