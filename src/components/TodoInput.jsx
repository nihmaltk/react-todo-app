import { useState } from "react"

// TodoInput allows users to enter a new task and add it to the list
export const TodoInput = ({handleAddTodo}) => {

  // Local state for input field
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="input-container">
      <input value = {inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder="Add Task" />
      <button onClick={()=>{
          if(!inputValue){return} 
          handleAddTodo(inputValue) // add task
          setInputValue('') // Clear input field after adding
          }
        }
        disabled={!inputValue.trim()} // disabled when input is empty 
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  )

}
