import React, { useState, useEffect } from "react";
import "../styles/UserForm.css";

const UserForm = ({ type, user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    isAdmin: false,
  });

  const [error, setError] = useState(""); // To hold the error message for email validation

  useEffect(() => {
    if (type === "edit" && user) {
      setFormData(user);
    }
  }, [type, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSave(formData); // Call parent function for add/update
      setError(""); // Clear any previous error
    } catch (err) {
      // Check if the error is a network issue or custom message
      const errorMessage =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An unexpected error occurred.";
      setError(errorMessage); // Display the message directly in the form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <label>Email</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
          setError(""); // Clear error when the user types a new email
        }}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}

      <label>Age</label>
      <input
        type="number"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      />

      <label>Password</label>
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <label>Admin</label>
      <input
        type="checkbox"
        checked={formData.isAdmin}
        onChange={(e) =>
          setFormData({ ...formData, isAdmin: e.target.checked })
        }
      />

      <button type="submit">
        {type === "add" ? "Add User" : "Update User"}
      </button>
      <button type="button" className="cancel-button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UserForm;
