import React from 'react'
import TodoCard from './TodoCard';

const TodoList = (props) => {
    const {todos, selectedTab} = props;
    const filterTodosList = selectedTab === 'All' ? todos : selectedTab === 'Open' ? todos.filter(val => !val.complete) : todos.filter(val => val.complete)


  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return (
            <TodoCard key={todoIndex} todoIndex={todos.findIndex(val => val.index == todo.index)} {...props} todo={todo} />
        )
      })}
    </>
  )
}

export default TodoList
