import React from 'react'

export default function Footer() {
  let footerStyle = {
    position: "relative",
    top: "10vh",
    width: "100%",
    backgroundColor: "#0072ef",
}
  return (
    // <div className='container-fluid py-3' style={footerStyle}>
    //   <span>
    //   <p className="text-center" style={{color: 'white'}}>Copyright &copy; MyTodosList.com</p>
    //   </span>
    // </div>
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className="text-center">Copyright &copy; todoit.com</p>
    </footer>
  )
}
