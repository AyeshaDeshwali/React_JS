import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <img
            src="https://i.pinimg.com/originals/fe/19/45/fe1945a5fa8e3116b818a2e2ade6d7d5.png"
            style={{ width: "70px", height: "50px" }}
          />
          <div>
            <a className="navbar-brand" href="#">
              Home
            </a>{" "}
            <a className="navbar-brand" href="#">
              About Us
            </a>{" "}
            <a className="navbar-brand" href="#">
              Blogs
            </a>{" "}
            <a className="navbar-brand" href="#">
              Contact US
            </a>
          </div>
          <div>
            <a className="navbar-brand" href="#">
              Contact US
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
