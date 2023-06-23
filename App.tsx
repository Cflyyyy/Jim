import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import picture1 from "./assets/DSC05424.jpg";

function App() {
  const [count, setCount] = useState(0);

  function ImageFrame() {
    return (
      <>
        <div style={{ border: "white solid 2px", width: "220px" }}>
          <a href="https://youtube.com">
            <img className="picture" src={picture1} alt="Vite logo" />
            <h3>this is a picture</h3>
          </a>
        </div>
      </>
    );
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ImageFrame />
      <ImageFrame />

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
