import React, { useContext, useState } from "react";
import "./Navbar.css";
// import logo from "../Assets/logo.png";
// import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrVEFx_6sdUi685gZXEUzcypy6MBnZ_wHOTlmtGcWxo5Q-1-yeWYQysV9OAmB0DLah6E&usqp=CAU"
          alt=""
        /> */}
        <img
          src="https://t3.ftcdn.net/jpg/05/06/75/80/360_F_506758046_vb98YfQhYf6RmwPkgQQH80qPSIoNMYyW.jpg"
          alt=""
        />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          {" "}
          <Link to="mens" style={{ textDecoration: "none" }}>
            Men
          </Link>{" "}
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="womens" style={{ textDecoration: "none" }}>
            Women
          </Link>{" "}
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>{" "}
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none" }}>
          {" "}
          <button>Login</button>
        </Link>
        <Link to="cart" style={{ textDecoration: "none" }}>
          {" "}
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/001/504/962/small/shopping-cart-icon-free-vector.jpg"
            alt=""
          />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
