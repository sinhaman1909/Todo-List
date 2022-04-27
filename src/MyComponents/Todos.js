import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  let todosStyle = {
    minHeight: "70vh",
    margin: "40px auto",
    backgroundColor: "#f2f2f2",
    borderRadius: "30px"
  }
  return (
    <div className="container" style={todosStyle}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length===0 ? "No todos to display" : 
      props.todos.map((todo) => {
        return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} onComplete={props.onComplete}/> 
        )
      })}
    </div>
  )
}
