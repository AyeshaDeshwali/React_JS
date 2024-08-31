import React from "react";

class AddItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }

  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.AddItem(
            this.state.productName,
            Number(this.state.productPrice)
          );
        }}
      >
        <div className="mb-3 col-4 me-5">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="productName"
            placeholder="enter product name"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-4 ms-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: Number(e.currentTarget.value) });
            }}
            value={this.state.productPrice}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            marginLeft: "145px",
            marginTop: "27px",
            width: "220px",
            height: "50px",
          }}
        >
          Add
        </button>
      </form>
    );
  }
}

export default AddItemComponent;
