import React from "react";

const AddProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [error, setError] = React.useState("");
  const addProduct = async () => {
    console.log(!name);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    console.log(name, price, category, company);
    const user = localStorage.getItem("user");
    if (!user) {
      console.error("User not found in localStorage");
      return;
    }
    const userId = JSON.parse(user)._id;
    try {
      let result = await fetch("http://localhost:6002/add-product", {
        method: "post",
        body: JSON.stringify({ name, price, category, company, userId }),
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });

      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }

      result = await result.json();
      console.log(result);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="product">
      <h1>Add Products</h1>
      <input
        type="text"
        placeholder="Enter product's name"
        className="inputBox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && (
        <span className="invalid-input">Enter valid name</span>
      )}
      <input
        type="text"
        placeholder="Enter product's price"
        className="inputBox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      {error && !price && (
        <span className="invalid-input">Enter valid price</span>
      )}
      <input
        type="text"
        placeholder="Enter product's category"
        className="inputBox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      {error && !category && (
        <span className="invalid-input">Enter valid category</span>
      )}
      <input
        type="text"
        placeholder="Enter product's company"
        className="inputBox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      {error && !company && (
        <span className="invalid-input">Enter valid company</span>
      )}
      <button onClick={addProduct} className="appButton">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
