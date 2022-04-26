import React from 'react'

export default function Todo({todo, onDelete}) {
  let buttonStyle = {
    borderRadius: "25px"
  }
  return (
    <>
      <div>
          <h4>{todo.title}</h4>
          <p>{todo.desc}</p>
          <span>
          <button className='btn btn-sm btn-danger' onClick={() => {onDelete(todo)}} style={buttonStyle}>Delete</button>
          </span>
      </div>
      <hr/>
    </>
  )
}
