import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleUpChange = (event) => {
    setText(event.target.value);
  };

  // Function to count words without counting extra spaces
  const countWords = () => {
    let words = text.split(/\s+/).filter((element) => element.length !== 0);
    return words.length;
  };

  const handleClearText = () => {
    setText("");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleText = (event) => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleBgColor = () => {
    if (bgColor === "white") {
      setBgColor("black");
      setTextColor("white");
    } else {
      setBgColor("white");
      setTextColor("black");
    }
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mt-3">
          <textarea
            className="form-control"
            id="myBox"
            rows={8}
            value={text}
            onChange={handleUpChange}
            style={{ backgroundColor: bgColor, color: textColor }} // Apply styles here
          ></textarea>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleClearText}>
          Clear Text
        </button>

        <button
          className="btn btn-primary mt-3 ms-3"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleText}>
          Copy Text
        </button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleBgColor}>
          Change Background & Text Color
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {countWords()} words and {text.length} characters
        </p>
        <p>{0.008 * countWords()} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;

