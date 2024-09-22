import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
function App() {
  let [mode, setMode] = useState("dark");
  let [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light  mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="AYESHA" myabout="about us" /> */}
      {/* <Navbar /> */}

      <Navbar title="AYESHA" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below "
          mode={mode}
        />
      </div>

      {/* <About /> */}
    </>
  );
}

export default App;
