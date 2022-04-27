import React from 'react'
import background from "/Users/nc23625-aman/Desktop/ReactJS Projects/to-do/src/Bg2.jpg"
import background1 from "/Users/nc23625-aman/Desktop/ReactJS Projects/to-do/src/Bg4.jpg"
import { useNavigate } from 'react-router-dom';


export const Home = () => {
    let navigate = useNavigate();
    const onClick = () => {
        let path = "/ToDo";
        navigate(path);
    }
    let buttonStyle = {
        borderRadius: "25px",
        backgroundColor: "#0072EF",
        color: "#f2f2f2",
        marginTop: "100px",
        marginLeft: "880px"
    }
    let homeStyle1 = {
        backgroundImage: `url(${background})`,
        height:'100vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    let homeStyle2 = {
        backgroundImage: `url(${background1})`,
        height:'70vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
  return (
      <>
    <div className='container-fluid' style={homeStyle1}>
            <h1 style={{textAlign: "left", fontSize: '100px', paddingTop: "200px"}}>Free up your mental space</h1>
            <p style={{textAlign: "left", fontSize: '20px', paddingTop: "30px"}}>Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list <br/>(no matter where you are or what device you use).</p>
    </div>
    <div className='container-fluid' style={homeStyle2}>
        <h1 style={{textAlign: "center", fontSize: '100px', paddingTop: "200px"}}>Organize it all with Todoist</h1>
        <button type="submit" className="btn btn-lg" style={buttonStyle} onClick={onClick}>Get Started</button>
    </div>
    </>
  )
}
