import { TodoCard } from "./TodoCard";

// TodoList filters todos based on selected tab and renders each item using TodoCard
export const TodoList = ({selectedTab, todos, handleDeleteTodo, handleCompleteTodo}) => {

  // Filter todos based on selectedTab value (All, Completed, or Open)
  const filterTodosList = 
  selectedTab === 'All' ? todos: 
  selectedTab === 'Completed' ? todos.filter(val => val.complete):
  todos.filter(val => !val.complete)

  return (
    <>
      {filterTodosList.map((todo, todoIndex)=>{
        const OrgIndex = todos.findIndex((val) => val.task === todo.task)
        return (
          <TodoCard 
          key={todoIndex}
          orgIndex={OrgIndex} 
          handleDeleteTodo = {handleDeleteTodo} 
          handleCompleteTodo = {handleCompleteTodo} 
          todo={todo} />
        )
      })} 
    </>
  )

}
