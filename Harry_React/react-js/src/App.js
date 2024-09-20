import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {
  return (
    <>
      <Navbar title="AYESHA" myabout="about us" />
      {/* <Navbar /> */}
      <div className="container">
        <TextForm heading="Enter the text to analyze below " />
      </div>
    </>
  );
}

export default App;
