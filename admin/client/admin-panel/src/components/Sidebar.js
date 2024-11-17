import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img
          src="https://cdn.vectorstock.com/i/500p/50/89/user-profile-or-my-account-avatar-login-icon-vector-31775089.jpg"
          alt="Logo"
          style={{ width: "70px", height: "70px", borderRadius: "50%" }}
        />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
