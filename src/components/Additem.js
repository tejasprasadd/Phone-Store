import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: "",
    };
  }
  render() {
    return (
      <form
        className="row align-items-center mt-1"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.productName, this.state.productPrice);
        }}
      >
        {/* Model Input */}
        <div className="mb-2 col-4">
          <label htmlFor="inputName" className="form-label">
            Model:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              this.setState({
                productName: e.currentTarget.value,
              });
            }}
            value={this.state.productName}
          />
        </div>

        {/* Price Input */}
        <div className="mb-2 col-4 ">
          <label htmlFor="inputPrice" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            aria-placeholder="₹"
            name="productPrice"
            onChange={(e) => {
              this.setState({
                productPrice: Number(e.currentTarget.value),
              });
            }}
            value={this.state.productPrice}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4 col-4 ">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
        <h4 className="m-auto">Number of items: {this.props.length}</h4>
      </form>
    );
  }
}

export default AddItem;
