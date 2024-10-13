import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import About from "./components/About";

const App = (props) => {
  //define variables

  //define state
  const [Progress, setProgress] = useState(0);

  //==============================================[ Enable Dark/Light mode]=====================================================

  const [navmode, setNavmode] = useState("dark");
  //abhi light mode hai ise karna baki hai
  const [mode, setMode] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const changeMode = () => {
    if (navmode === "dark") {
      setMode({
        color: "black",
        backgroundColor: "white",
      });
      setNavmode("dark");
      document.body.style.backgroundColor = "white";
    } else {
      setMode({
        color: "black",
        backgroundColor: "white",
      });
      setNavmode("dark");
      document.body.style.backgroundColor = "white";
    }
  };

  //===================================== return component in index Html root ===============================================
  return (
    <div>
      <Router>
        <Navbar toggleMode={changeMode} navmode={navmode} />
        <LoadingBar color="red" progress={Progress} />

        <Routes>
          <Route
            exact
            path="/Business"
            element={
              <Main
                mode={mode}
                setProgress={setProgress}
                key="business"
                category={"business"}
              />
            }
          />
          <Route
            exact
            path="/electronics"
            element={
              <Main
                mode={mode}
                setProgress={setProgress}
                key="electronics"
                category={"electronics"}
              />
            }
          />
          <Route
            exact
            path="/jewelery"
            element={
              <Main
                mode={mode}
                setProgress={setProgress}
                key="jewelery"
                category={"jewelery"}
              />
            }
          />
          <Route
            exact
            path="/men's clothing"
            element={
              <Main
                mode={mode}
                setProgress={setProgress}
                key="men's clothing"
                category={"men's clothing"}
              />
            }
          />
          <Route
            exact
            path="/women's clothing"
            element={
              <Main
                mode={mode}
                setProgress={setProgress}
                key="women's clothing"
                category={"women's clothing"}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <Main
                mode={mode}
                setProgress={setProgress}
                key="men's clothing"
                category={"men's clothing"}
              />
            }
          />
          <Route
            exact
            path="/about"
            element={
              <About setProgress={setProgress}/>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
