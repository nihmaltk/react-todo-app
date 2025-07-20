import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import './App.css';

function App() {

  // Initialize todos state with one default task
  const [todos, setTodos] = useState([
    {task: "Learn React" , complete: false}
  ])

  // Track the selected tab
  const [selectedTab, setSelectedTab] = useState('Open')

  // Function to add a new todo
  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, {task: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveTodo(newTodoList)
  }

  // Function to mark a todo as completed
  const handleCompleteTodo = (index) => {
    const newTodoList = [...todos]
    newTodoList[index] = {...todos[index], 'complete': true}
    setTodos(newTodoList)
    handleSaveTodo(newTodoList)
  }

   // Function to delete a todo based on its index
  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveTodo(newTodoList)
  }

  // Save todos to localStorage
  const handleSaveTodo = (crrTodo) =>{
    localStorage.setItem('todo-app', JSON.stringify(crrTodo))
  }

  // Load todos from localStorage on first load
  useEffect(()=> {
    if(!localStorage || !localStorage.getItem('todo-app')){
      return
    }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db)
  }, [])

  return (
    <div className="app-container">
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </div>
  )
}

export default App
