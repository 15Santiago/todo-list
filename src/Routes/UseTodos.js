import React from 'react';
import { useLocalStorage } from './UseLocalStorage';

function UseTodos () {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V2', []);
    const [searchValue, setSearchValue] = React.useState('');
    
    const completedTodos = todos.filter(todo => !!todo.complete).length;
    const totalTodos = todos.length;
    
    let searchedTodos = [];
    
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
    };
    
    const addTodo = (text) => {
        const id = newTodoId(todos);
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text: text,
            id
        });
        saveTodos(newTodos);
    };

    const completeTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].complete = true;
        saveTodos(newTodos);
    };
    
    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const onEdit = (id, newText) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
    };

    return (
        {
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            searchedTodos,
            setSearchValue,
            addTodo,
            completeTodo,
            deleteTodo,
            onEdit,
        }
    );
};

function newTodoId (listTodos) {
    if (listTodos.length === 0) {
        return 1;
    };

    const idList = listTodos.map(todo => todo.id);
    const maxId = Math.max(...idList);
    return maxId + 1;
};

export { UseTodos };