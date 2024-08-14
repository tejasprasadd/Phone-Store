import React from "react";
const Product = ({
  product,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}) => {
  const totalValue = product.quantity * product.price;

  return (
    <div className="product-card col-4 mb-3 ">
      <div className="card p-3 bg-dark text-white rounded">
        <h2>{product.name}</h2>
        <p>Price: ₹{product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Total Value: ₹{totalValue}</p>
        <div className="btn-group" role="group" aria-label="Quantity control">
          <button
            type="button"
            className="btn btn-danger"
            onClick={decrementQuantity}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={incrementQuantity}
          >
            +
          </button>

          <button type="button" className="btn btn-danger" onClick={removeItem}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
