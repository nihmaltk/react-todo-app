// Header component displays the number of open tasks
export const Header = ({todos}) => {

  // Get the number of open (incomplete) todos
  const openTodosLength = todos.filter(todo => !todo.complete).length
  
  // Use plural or singular based on the count
  const taskOrTasks = todos.length !== 1 ? "tasks": "task"

  // Format the display count (show "No" instead of 0)
  const displayCount = openTodosLength === 0 ? "no" : openTodosLength

  return (
    <header className="header">
      <h1 className="header-title">You have {displayCount} open {taskOrTasks}.</h1>
    </header>
  )
}
