const addSubCategory = async (formData) => {
  try {
    const response = await fetch("http://localhost:5003/api/sub_category/add", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error("Failed to add subcategory");
    return await response.json();
  } catch (error) {
    console.error("Error adding subcategory:", error);
    throw error;
  }
};

export default addSubCategory;
