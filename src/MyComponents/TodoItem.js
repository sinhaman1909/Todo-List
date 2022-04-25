import React from 'react'

export default function Todo({todo, onDelete}) {
  let todoStyle = {
    
  }
  return (
    <div style={todoStyle}>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={() => {onDelete(todo)}}>Delete</button>
    </div>
  )
}
