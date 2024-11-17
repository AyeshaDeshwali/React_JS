// src/crud/updateUser.js
export const updateUser = async (userId, updatedData) => {
  try {
    const response = await fetch(
      `http://localhost:5002/api/users/update/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    return response.json();
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
