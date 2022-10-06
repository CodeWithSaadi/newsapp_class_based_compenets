// import PropTypes from 'prop-types' 
import React, { Component } from 'react'                 // "rcep" import react functional component with propTupe


import { Link } from "react-router-dom";


export class Navbar extends Component {
    // static propTypes = {}



    render() {
        let { handleChange } = this.props;
        return (
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Shinkiari NEWS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">


                            <li className="nav-item "> <Link className="nav-link  fs-5 px-4 " to="/">General</Link></li>

                            <li className="nav-item"><Link className="nav-link fs-5 px-4 " to="/business">Business</Link> </li>

                            <li className="nav-item"><Link className="nav-link fs-5 px-4 " to="/entertainment">Entertainment</Link></li>

                            <li className="nav-item"><Link className="nav-link fs-5 px-4 " to="/health">Health</Link></li>

                            <li className="nav-item"> <Link className="nav-link fs-5 px-4 " to="/Science">Science</Link></li>

                            <li className="nav-item"> <Link className="nav-link fs-5 px-4 " to="/Technology">Technology</Link></li>

                            <li className="nav-item"> <Link className="nav-link fs-5 px-4 " to="/sports">Sports </Link></li>

                            <li className="nav-item"> <Link className="nav-link fs-5 px-4 " to="/cricket">Cricket </Link></li>


                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" onChange={handleChange} aria-label="Search" />            {/* Searching in class based component -- onChange function is declared in App.js and props here*/}
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar