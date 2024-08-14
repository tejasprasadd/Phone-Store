import React from "react";
import Product from "./Product"; // Ensure the path and filename are correct

const ProductList = ({
  productList,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}) => {
  return (
    <div className="row">
      {productList.length > 0 ? (
        productList.map((product, index) => (
          <Product
            key={index}
            product={product}
            incrementQuantity={() => incrementQuantity(index)}
            decrementQuantity={() => decrementQuantity(index)}
            removeItem={() => removeItem(index)}
          />
        ))
      ) : (
        <h1 className="text-center text-danger">No Products found</h1>
      )}
    </div>
  );
};

export default ProductList;
