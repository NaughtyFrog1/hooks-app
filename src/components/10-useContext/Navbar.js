import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavbarLink = ({ to, name }) => {
  return (
    <li className="nav-item">
      <NavLink
        activeClassName="active"
        className="nav-link"
        exact
        to={to}
      >
        {name}
      </NavLink>
    </li>
  )
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          useContextApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <NavbarLink to="/" name="Home" />
            <NavbarLink to="/about" name="About" />
            <NavbarLink to="/login" name="Login" />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

/*
  <Link> y <NavLink> son los que permiten cargar la página como una SPA. Si en su lugar usáramos <a>, entonces la página se recargaría al hacer click sobre un link 
*/
