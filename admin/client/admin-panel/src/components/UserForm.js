import React, { useState, useEffect } from "react";
import "../styles/UserForm.css";

const UserForm = ({ type, user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    isAdmin: false,
    image: null,
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
    },
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
      if (!formData.email) {
        alert("Email is required");
        return;
      }
      if (!formData.password || formData.password.trim() === "") {
        alert("Password is required");
        return;
      }
      if (!formData.phoneNumber) {
        alert("Phone number is required");
        return;
      }

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

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] }); // Correctly set the image file
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Row 1: Name and Email */}
      <div className="form-row">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              setError(""); // Clear error when typing
            }}
            placeholder="Enter email"
          />
          {error && <span style={{ color: "red" }}>{error}</span>}
        </div>
      </div>

      {/* Row 2: Phone Number and Age */}
      <div className="form-row">
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            id="phone"
            name="phoneNumber"
            value={formData.phoneNumber || ""} // Default to empty string if undefined
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            placeholder="Enter phone number"
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            placeholder="Enter age"
          />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="age">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Enter password..."
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth">dateOfBirth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
            placeholder="Enter date of birth..."
          />
        </div>
      </div>

      <div className="address-section">
        <div className="form-row">
          <div>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.address?.street || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, street: e.target.value },
                })
              }
              placeholder="Enter street"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.address?.city || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, city: e.target.value },
                })
              }
              placeholder="Enter city"
            />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.address?.state || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, state: e.target.value },
                })
              }
              placeholder="Enter state"
            />
          </div>
          <div>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.address?.postalCode || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, postalCode: e.target.value },
                })
              }
              placeholder="Enter postal code"
            />
          </div>
        </div>
      </div>

      {/* Image Upload and Admin Checkbox */}
      <div className="form-row">
        <div>
          <label>Image</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label>Admin</label>
          <input
            type="checkbox"
            checked={formData.isAdmin}
            onChange={(e) =>
              setFormData({ ...formData, isAdmin: e.target.checked })
            }
          />
        </div>
      </div>

      {/* Address Inputs */}

      {/* Submit and Cancel Buttons */}
      <div className="form-row">
        <button type="submit">
          {type === "add" ? "Add User" : "Update User"}
        </button>
        <button type="button" className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserForm;
