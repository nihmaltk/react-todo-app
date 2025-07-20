// TodoCard represents a single todo item in the list with action buttons.
export const TodoCard = ({todo, orgIndex, handleDeleteTodo, handleCompleteTodo}) => {

  return (
    <div className="card todo-item">
      <p>{todo.task}</p>
      <div className="todo-buttons">
        <button onClick={()=> handleCompleteTodo(orgIndex)} disabled={todo.complete} className="btn done-btn">Done</button> 

        <button onClick={()=> handleDeleteTodo(orgIndex)} className="btn delete-btn">Delete</button>
      </div>
    </div>
  )

}
