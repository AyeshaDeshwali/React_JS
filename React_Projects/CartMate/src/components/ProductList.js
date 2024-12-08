import React from "react";
import Product from "./Product";

function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => (
      <Product
        product={product}
        key={i}
        incrementQuantity={props.incrementQuantity}
        index={i}
        decrementQuantity={props.decrementQuantity}
        removeItem={props.removeItem}
      />
    ))
  ) : (
    <h1 className="text-center text-danger">No Product</h1>
  );
}

export default ProductList;
