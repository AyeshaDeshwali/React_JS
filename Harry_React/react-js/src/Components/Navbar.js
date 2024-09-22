import React from "react";

import PropTypes from "prop-types";
function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
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
                <a className="nav-link active" aria-current="page" href="#">
                  {props.myabout}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
            </div>
            <div className="d-flex ">
              <div
                className="bg-success "
                style={{
                  height: "25px",
                  width: "25px",
                  cursor: "pointer",
                  margin: "2px",
                }}
              ></div>
              <div
                className="bg-danger"
                style={{
                  height: "25px",
                  width: "25px",
                  cursor: "pointer",
                  margin: "2px",
                }}
              ></div>
              <div
                className="bg-light"
                style={{
                  height: "25px",
                  width: "25px",
                  cursor: "pointer",
                  border: "1px solid #ccc",
                  margin: "2px",
                }}
              ></div>
              <div
                className="bg-dark"
                style={{
                  height: "25px",
                  width: "25px",
                  cursor: "pointer",
                  margin: "2px",
                  border: "1px solid #ccc",
                }}
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string,
  myabout: PropTypes.string.isRequired,
};
Navbar.defaultProps = { title: "set title here", myabout: "about text here " };
