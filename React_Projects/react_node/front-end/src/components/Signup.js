import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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
      const response = await fetch("http://localhost:6002/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }), // Include username
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Signup failed: ${errorMessage}`);
      }

      const data = await response.json();
      console.log("Response Data:", data);

      if (data.auth) {
        localStorage.setItem("user", JSON.stringify(data.result)); // Store user details correctly
        localStorage.setItem("token", JSON.stringify(data.auth));
        console.log("Signup successful, JWT token:", data.auth);
        navigate("/");
      } else {
        throw new Error("Token not found in response");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="register">Register</h1>
      <div className="setinputs">
        <input
          className="inputBox"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="inputBox"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          className="inputBox"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button className="appButton" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default Signup;
