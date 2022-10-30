import React from 'react';
import { todoContext } from '../TodoContext';
import './style.css';

function TodoSearch () {

    const { searchValue, setSearchValue } = React.useContext(todoContext);
    
    const onChangeValueSearch = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input 
        className='TodoSearch' 
        placeholder='Cebolla'
        value={searchValue}
        onChange={onChangeValueSearch}
        />
    );
};

export { TodoSearch };
