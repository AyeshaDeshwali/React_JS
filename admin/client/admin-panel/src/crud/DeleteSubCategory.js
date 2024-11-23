const deleteSubCategory = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:5003/api/sub_category/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) throw new Error("Failed to delete subcategory");
    return await response.json();
  } catch (error) {
    console.error("Error deleting subcategory:", error);
    throw error;
  }
};

export default deleteSubCategory;
