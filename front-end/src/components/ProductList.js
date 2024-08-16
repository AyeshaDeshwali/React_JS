import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let result = await fetch(`http://localhost:6002/product/`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      if (!result.ok) {
        throw new Error("Failed to fetch products");
      }
      result = await result.json();
      setProducts(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      let result = await fetch(`http://localhost:6002/products/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      if (result.ok) {
        alert("Record is deleted");
        getProducts(); // Refresh the product list after deletion
      } else {
        throw new Error("Failed to delete record");
      }
    } catch (error) {
      alert(error.message);
    }
    console.log(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("products", products);

  const searchHandle = async (event) => {
    console.log(event.target.value);
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:6002/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };
  return (
    <div className="product-list">
      <h2>Product List</h2>

      <input
        type="text"
        placeholder="search product"
        className="search-product"
        onChange={searchHandle}
      />
      <ul className="product-header">
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {products.length > 0 ? (
        products.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>${item.price}</li>
            <li>{item.category}</li>
            <li>
              <button onClick={() => deleteProduct(item._id)}>Delete</button>
              <Link to={`/update/${item._id}`}>Update</Link>
            </li>
          </ul>
        ))
      ) : (
        <h1>No Result Found</h1>
      )}
    </div>
  );
};

export default ProductList;
