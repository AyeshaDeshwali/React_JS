const editSubCategory = async (id, formData) => {
  try {
    const response = await fetch(
      `http://localhost:5003/api/sub_category/update/${id}`,
      {
        method: "PUT",
        body: formData,
      }
    );
    if (!response.ok) throw new Error("Failed to edit subcategory");
    return await response.json();
  } catch (error) {
    console.error("Error editing subcategory:", error);
    throw error;
  }
};

export default editSubCategory;
