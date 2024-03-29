import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value,setValue]=useState("");
    const handleSubmit=(e)=>
    {
        e.preventDefault();//stops reload

        addTodo(value);
        setValue("");
    }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" value={value}  className="todo-input" placeholder='Things to do today :)'
        onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>
            Add Task
        </button>
    </form>
  )
}
