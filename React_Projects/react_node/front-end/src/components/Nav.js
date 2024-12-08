import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/019/166/318/small_2x/lion-head-lion-logo-symbol-gaming-logo-elegant-element-for-brand-abstract-symbols-vector.jpg"
        alt="Logo"
        className="logo"
      />
      <ul className="nav-ul">
        {auth ? (
          <>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
            <li>
              <Link to="/update">Update</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link onClick={logout} to="/signup">
                Logout({JSON.parse(auth)?.name || "User"})
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Nav;
