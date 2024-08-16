import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(params);
    getProductDetails();
  }, []);
  let getProductDetails = async () => {
    try {
      let result = await fetch(
        `http://localhost:6002/get-products/${params.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }

      result = await result.json();
      console.log(result);

      // Set the fetched data to state if needed
      setName(result.name);
      setPrice(result.price);
      setCategory(result.category);
      setCompany(result.company);
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    }
  };

  const updateProduct = async () => {
    console.log(name, price, category, company);

    try {
      let updateResult = await fetch(
        `http://localhost:6002/update-products/${params.id}`,
        {
          method: "PUT",
          body: JSON.stringify({ name, price, category, company }),
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      if (!updateResult.ok) {
        throw new Error(`HTTP error! status: ${updateResult.status}`);
      }
      updateResult = await updateResult.json();
      if (updateResult) {
        navigate("/");
      } else {
        console.log("Failed to update product");
      }
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  return (
    <div className="product">
      <h1>Update Products</h1>
      <input
        type="text"
        placeholder="Enter product's name"
        className="inputBox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter product's price"
        className="inputBox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product's category"
        className="inputBox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />

      {/* <input
        type="text"
        placeholder="Enter product's company"
        className="inputBox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      /> */}

      <button onClick={updateProduct} className="appButton">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
