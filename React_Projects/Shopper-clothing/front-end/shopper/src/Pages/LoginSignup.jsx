import React from "react";
import "./LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Enter Your Name..." />
          <input type="email" placeholder="Enter Your Email..." />
          <input type="password" placeholder="Enter Your Password..." />
        </div>
        <button>Continue</button>
        <div className="loginsignup-login">
          <p>
            {" "}
            Already have a account? <span>Login here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continue, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
