import React, { useState } from 'react'

const TodoInput = (props) => {
  const { handleAddTodo } = props;
  const [inputValue, setInputValue] = useState('');
  

  return (
    <div>
      <input value={inputValue}
        onChange={(e) => { setInputValue(e.target.value) }}
        placeholder='Add Task' />
      <button onClick={() => {
        if(!inputValue){return};
        handleAddTodo(inputValue);
        setInputValue('');
      }}>
        +
      </button>
    </div>
  )
}

export default TodoInput
