import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = (event) => {
    console.log("clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleUpChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mt-3">
          <textarea
            name=""
            className="form-control"
            id="mybox"
            rows={8}
            value={text}
            onChange={handleUpChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
      </div>
    </>
  );
}

export default TextForm;
