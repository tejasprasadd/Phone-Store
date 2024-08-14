import React from "react";

export default function Footer(props) {
  // Destructuring props to extract totalAmount and resetData
  // This is the correct way to access properties passed from the parent component
  const { totalAmount, resetData } = props;

  return (
    <div className="row fixed-bottom text-center fs-5">
      {/* Button to trigger resetData function */}
      <button className="btn btn-warning col-2" onClick={resetData}>
        Reset
      </button>
      <div className="col-8 text-bg-success text-white">
        {/* Display total amount with the rupee symbol */}
        Total: ₹{totalAmount}
      </div>
      <button className="btn btn-primary col-2">Pay Now</button>
    </div>
  );
}
