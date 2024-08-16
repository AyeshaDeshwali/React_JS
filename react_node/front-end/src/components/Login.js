import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:6002/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      // Log the response data to check its structure
      console.log("API Response Data:", data);

      if (data.auth && data.user) {
        localStorage.setItem("user", JSON.stringify(data.user)); // Store user details correctly
        localStorage.setItem("token", JSON.stringify(data.auth)); // Store JWT token
        navigate("/");
      } else {
        console.error("Error:", data.result);
        alert(data.result);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Login करते समय एक समस्या आई। कृपया बाद में पुनः प्रयास करें।");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="inputBox"
          type="text"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="inputBox"
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="appButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
