import React from 'react';
import './style.css';

function TodoSearch ({ searchValue, setSearchValue }) {
    
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
