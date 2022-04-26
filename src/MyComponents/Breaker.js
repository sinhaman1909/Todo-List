import React from 'react'

export const Breaker = () => {
    let quoteStyle = {
        textAlign: "center",
        height:'10vh',
        backgroundColor: '#E5F2FF'
    };
    let textStyle = {
        padding:"5px",
        fontColor: "#000000"
    }
  return (
    <div className='container-fluid' style={quoteStyle}>
        <span className='container'>
        <h2 style={textStyle}>“Clutter is nothing more than postponed decisions.” </h2>
        </span>
    </div>
  )
}
