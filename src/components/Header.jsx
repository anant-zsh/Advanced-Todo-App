import React from 'react'
import TodoList from './TodoList';

const Header = (props) => {
    const {todos} = props;
    const todosLength = todos.filter(val => !val.complete).length;
    const isTaskPlural = todosLength !== 1;

  return (
    <nav>
        <h1>Not your ordinary Todo App!</h1>
        <h1>You have {todosLength} open {isTaskPlural ? 'tasks' : 'task'}.</h1>
    </nav>
  )
}

export default Header
