import React from 'react'

const TodoCard = (props) => {
    const { todo, handleDeleteTodo, handleEditTodo, todoIndex } = props;
    
    return (
        <div>
            <p>{todo.input}</p>
            <div>
                <button disabled={todo.complete}
                        onClick={() => {handleEditTodo(todoIndex)
                        }}>
                    <h6>Done</h6>
                </button>
                <button onClick={() => {handleDeleteTodo(todoIndex)}}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}

export default TodoCard
