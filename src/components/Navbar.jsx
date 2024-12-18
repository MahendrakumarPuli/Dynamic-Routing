import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'>Advanced Routing</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/products'>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
      
    
  )
}

export default Navbar