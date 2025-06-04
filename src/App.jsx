import Header from "./components/Header"
import Tabs from "./components/Tabs"
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import { useEffect, useState } from "react"

function App() {
  // const todos = [
  //   {input: 'Hello! Add your first todo.', complete: true},
  //   {input: 'Get the groceries.', complete: false},
  //   {input: 'Learn how to web design', complete: false},
  //   {input: 'Say hi to gran gran.', complete: true},
  // ]

  const [todos, setTodos] = useState([{input: 'Hello! Add your first todo.', complete: true }]);
  const [selectedTab, setSelectedTab] = useState('Open');

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false }]
    console.log(newTodoList)
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleEditTodo(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return (valIndex !== index)
    })
    setTodos(newTodoList);
    handleSaveData(newTodoList)
  }

  function handleSaveData(crntTodos) {
    localStorage.setItem('chronicle', JSON.stringify({ todos: crntTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('chronicle')) { return }
    let db = JSON.parse(localStorage.getItem('chronicle'))
    setTodos(db.todos)
  }, [])

  return (
    <div className="text-4xl font-outfit">
      
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList todos={todos}
        selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo} />

    </div>
  )
}

export default App
