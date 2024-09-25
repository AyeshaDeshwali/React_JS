import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.myabout}
                </Link>
              </li>
            </ul>
            <div className="d-flex me-  2">
              <div
                className="bg-primary"
                onClick={() => props.toggleMode("primary")}
                style={{
                  height: "30px",
                  width: "30px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
              ></div>
              <div
                className="bg-danger"
                onClick={() => props.toggleMode("danger")}
                style={{
                  height: "30px",
                  width: "30px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
              ></div>
              <div
                className="bg-success"
                onClick={() => props.toggleMode("success")}
                style={{
                  height: "30px",
                  width: "30px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
              ></div>
              <div
                className="bg-warning"
                onClick={() => props.toggleMode("warning")}
                style={{
                  height: "30px",
                  width: "30px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
              ></div>
              <div
                className="bg-dark"
                onClick={() => props.toggleMode("dark")}
                style={{
                  height: "30px",
                  width: "30px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  border: "1px solid white",
                  marginRight: "10px",
                  color: "white",
                }}
              ></div>
              <div
                className="bg-light"
                onClick={() => props.toggleMode("light")}
                style={{
                  height: "30px",
                  width: "30px",
                  cursor: "pointer",
                  border: "1px solid black",
                  borderRadius: "5px",
                  marginRight: "10px",
                  color: "black",
                }}
              ></div>
            </div>

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={() => {
                  props.toggleMode();
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  myabout: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  myabout: "About Us",
};

export default Navbar;
