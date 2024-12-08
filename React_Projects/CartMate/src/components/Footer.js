import React from "react";

function Footer(props) {
  const reset = {
    color: "white",
    backgroundColor: "#d86951",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "50px 220px 50px 0px",
    width: "220px",
  };
  const amount = {
    color: "white",
    backgroundColor: "#ec799c",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
    margin: "50px 220px 50px 0px",
    width: "220px",
  };
  const pay = {
    color: "white",
    backgroundColor: "#78a967",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "50px 0px 50px 0px",
    width: "220px",
  };

  const mains = {
    display: "flex",
    marginLeft: "350px",
    marginTop: "70px",
  };

  return (
    <div style={mains}>
      <button
        style={reset}
        onClick={() => {
          props.resetQuantity();
        }}
      >
        Reset
      </button>
      <div style={amount}>Total Amount: {props.totalAmount}</div>
      <button style={pay}>Pay Now</button>
    </div>
  );
}

export default Footer;
