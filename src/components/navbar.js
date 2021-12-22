import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-dark'>
        <nav className="container navbar navbar-dark bg-dark navbar-expand-lg p-2">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/">SuperHero App</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search">Search</a>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-danger" href="#">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    )
}

export default Navbar
