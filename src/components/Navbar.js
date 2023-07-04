import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">{props.title}</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">{props.abt}</a>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <div className="form-check form-switch mx-5">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${props.textColor}`} htmlFor="flexSwitchCheckDefault">{props.toggleText}</label>
          </div>
        </div>
      </nav>
    </>
  )
}


Navbar.propTypes = {

  title: PropTypes.string,
  abt: PropTypes.string

}

Navbar.defaultProps = {

  title: 'Set title',
  abt: 'set About'

}
