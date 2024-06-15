import React, { Component } from "react";
import { Link } from "react-router-dom";

// import PropTypes from 'prop-types';

export class Navbar extends Component {
  render() {
    let { tooglebtn ,mode} = this.props;
    return (
      <nav className={`navbar navbar-expand-lg navbar-${mode==='dark'?'dark':'info'} bg-${mode==='dark'?'dark':'info'} `} >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/political">
                  Political
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/education">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/genarel">
                  Genarel
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/foreign">
                  Foreign
                </Link>
              </li>

            </ul>
            <div className="form-check form-switch">
              <input
                className={`form-check-input`}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={tooglebtn}
              />
              <label className={`"form-check-label text-${mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">
                {mode==='dark'?'Enable-Lightmode':'Enable-Darkmode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
