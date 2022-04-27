import React from 'react'

export const Breaker = () => {
    let quoteStyle = {
        textAlign: "center",
        height:'15vh',
        backgroundColor: '#fff2e6',
        color: "black"
    };
    let textStyle = {
        padding:"5px",
        fontColor: "#000000"
    }
  return (
    
    <div className='container-fluid' style={quoteStyle}>
        <div className='container-fluid' style={{height: "5px", backgroundColor: "#E5E9EC"}} />
        <span className='container'>
        <h2 style={textStyle}>“Clutter is nothing more than postponed decisions.” </h2>
        </span>
    </div>
  )
}
