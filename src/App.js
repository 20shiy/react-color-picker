import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SketchPicker } from "react-color";

function App() {
  const [color, setColor] = useState("#fff");

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: color }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SketchPicker color={color} onChangeComplete={handleColorChange} />
      </header>
    </div>
  );
}

export default App;
