import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Homecomponent from "./components/Homecomponent";
import EnterComponent from "./components/EnterComponent";
import Loading from "./components/Loading";

function App() {
  const [Start, setStart] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setStart(localStorage.getItem("Start"));
      setloading(true);
    }, 20);
  }, [loading]);

  return (
    <div
      className="App"
      onMouseMoveCapture={(e) => {
        let x = e.pageX;
        let y = e.pageY;
        document.getElementById("pointer").style.top = y + "px";
        document.getElementById("pointer").style.left = x + "px";
      }}
    >
      <div id="pointer"></div>
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              Start ? (
                <Homecomponent />
              ) : (
                <EnterComponent setStart={setStart} />
              )
            ) : (
              <Loading />
            )
          }
        />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
