import React, { useState, useEffect } from "react";

const UserDetails = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <section className="users">
      <h2>User List</h2>
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
          {userData.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.password}</td>
              <td>{user.isAdmin ? "Yes" : "No"}</td>
              <td>{user.createdAt}</td>
              <td>
                <button className="add">
                  <i className="fa-solid fa-plus"></i>
                </button>
                <button className="delete">
                  <i className="fa-solid fa-trash-can"></i>
                </button>
                <button className="update">
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UserDetails;
