import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  //define variables
  const pagesize = 12;
  const apikey = process.env.REACT_APP_NEWSAPP_API;

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
                apikey={apikey}
                setProgress={setProgress}
                key="business"
                pageSize={pagesize}
                category={"business"}
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <Main
                apikey={apikey}
                mode={mode}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pagesize}
                category={"entertainment"}
              />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <Main
                apikey={apikey}
                mode={mode}
                setProgress={setProgress}
                key="sports"
                pageSize={pagesize}
                category={"sports"}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <Main
                apikey={apikey}
                mode={mode}
                setProgress={setProgress}
                key="technology"
                pageSize={pagesize}
                category={"technology"}
              />
            }
          />
          <Route
            exact
            path="/General"
            element={
              <Main
                apikey={apikey}
                mode={mode}
                setProgress={setProgress}
                key="general"
                pageSize={pagesize}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <Main
                apikey={apikey}
                mode={mode}
                setProgress={setProgress}
                key="health"
                pageSize={pagesize}
                category={"health"}
              />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <Main
                apikey={apikey}
                mode={mode}
                setProgress={setProgress}
                key="science"
                pageSize={pagesize}
                category={"science"}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <Main
                apikey={apikey}
                mode={mode}
                setProgress={setProgress}
                kye="general"
                pageSize={pagesize}
                category={"general"}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
