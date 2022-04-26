import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from "/Users/nc23625-aman/Desktop/ReactJS Projects/to-do/src/todo2.png"

export default function Header(props) {
    let headerStyle = {
        position: "sticky"
    }
    let styleBar = {
        backgroundColor: "#1a75ff",
        height: "1vh"
    }
    return (
        <>
        <div className='container-fluid' style={styleBar}></div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={headerStyle}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"></Link>
                <img src={logo} alt="" width="65" height="60"></img>{props.title}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <span class="navbar-text">
                    “For every minute spent organizing, an hour is earned.”
                    </span>
                    {props.searchBar ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : ""}
                </div>
            </div>
        </nav>
        </>
    )
}

Header.defaultProps = {
    title: "Title",
    searchBar: false
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool
}