import React, { Component } from "react";
// import PropTypes from 'prop-types';

export class Navbar extends Component {
  render() {
    let { tooglebtn ,mode} = this.props;
    return (
      <nav className={`navbar navbar-expand-lg navbar-${mode==='dark'?'dark':'info'} bg-${mode==='dark'?'dark':'info'} `} >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsMonkey
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Top News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">
                  Politics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">
                  Entertainment
                </a>
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
