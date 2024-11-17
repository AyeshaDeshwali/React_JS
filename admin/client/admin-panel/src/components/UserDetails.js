import React, { useState, useEffect } from "react";
import { addUser } from "../crud/addUser";
import { deleteUser } from "../crud/deleteUser";
import { updateUser } from "../crud/updateUser";
import UserForm from "./UserForm";

const UserDetails = () => {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10; // Number of records per page

  // Fetch the user data on component mount
  useEffect(() => {
    fetch("http://localhost:5002/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = userData.filter((user) =>
      user.name.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page after search
  };

  // Pagination Logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle Next Page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle Previous Page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle adding a user
  const handleAddUser = async (user) => {
    try {
      const newUser = await addUser(user); // Call the addUser API
      setUserData([newUser, ...userData]); // Add the new user at the top
      setFilteredData([newUser, ...filteredData]); // Update filtered data
      setIsFormOpen(false); // Close the form
    } catch (error) {
      if (error.message) {
        alert(error.message); // Show the error message from the server
      } else {
        console.error("Add user failed", error);
      }
    }
  };

  // Handle updating a user
  const handleUpdateUser = async (user) => {
    try {
      const updatedUser = await updateUser(user._id, user); // Call the updateUser API
      setUserData(
        userData.map((u) => (u._id === updatedUser._id ? updatedUser : u))
      );
      setFilteredData(
        filteredData.map((u) => (u._id === updatedUser._id ? updatedUser : u))
      );
    } catch (error) {
      console.error("Update user failed", error);
    }
  };

  // Handle deleting a user
  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) {
      return;
    }

    try {
      await deleteUser(userId); // Call the deleteUser API
      setUserData(userData.filter((user) => user._id !== userId));
      setFilteredData(filteredData.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Delete user failed", error);
    }
  };

  return (
    <section className="users">
      <h2 style={{ textAlign: "center" }}>User List</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          marginBottom: "20px",
          width: "200px",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <button
        className="addbutton"
        onClick={() => {
          setFormType("add");
          setIsFormOpen(true);
        }}
        style={{
          marginLeft: "10px",
          width: "100px",
          height: "40px",
          backgroundColor: "#4CAF50",
          border: "none",
          borderRadius: "5px",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Add User
      </button>

      {isFormOpen && (
        <div className="modal-overlay">
          <UserForm
            type={formType}
            user={currentUser}
            onSave={(user) => {
              formType === "add" ? handleAddUser(user) : handleUpdateUser(user);
              setIsFormOpen(false);
            }}
            onCancel={() => setIsFormOpen(false)}
          />
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Password</th>
            <th>Admin</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.length > 0 ? (
            currentRecords.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.password}</td>
                <td>{user.isAdmin ? "Yes" : "No"}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user._id)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                  <button
                    onClick={() => {
                      setFormType("edit");
                      setCurrentUser(user);
                      setIsFormOpen(true);
                    }}
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Buttons */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{
            margin: "0 5px",
            padding: "10px",
            backgroundColor: currentPage === 1 ? "#d3d3d3" : "#4CAF50",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            color: currentPage === 1 ? "black" : "white",
          }}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            style={{
              margin: "0 5px",
              padding: "10px",
              backgroundColor:
                currentPage === index + 1 ? "#4CAF50" : "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
              color: currentPage === index + 1 ? "white" : "black",
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{
            margin: "0 5px",
            padding: "10px",
            backgroundColor: currentPage === totalPages ? "#d3d3d3" : "#4CAF50",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            color: currentPage === totalPages ? "black" : "white",
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default UserDetails;
