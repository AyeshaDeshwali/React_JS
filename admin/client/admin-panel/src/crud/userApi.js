// src/crud/fetchUserDetails.js
export const fetchUserDetails = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:5002/api/users/view/${userId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
