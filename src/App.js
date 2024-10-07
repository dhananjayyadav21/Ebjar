import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pagesize = 12;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/Business"
              element={
                <Main
                  key="business"
                  pageSize={this.pagesize} 
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <Main
                  key="entertainment"
                  pageSize={this.pagesize}
                  category={"entertainment"}
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <Main key="sports" pageSize={this.pagesize} category={"sports"} />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <Main
                  key="technology"
                  pageSize={this.pagesize}
                  category={"technology"}
                />
              }
            />
            <Route
              exact
              path="/General"
              element={
                <Main
                  key="general"
                  pageSize={this.pagesize} 
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={<Main key="health" pageSize={this.pagesize} category={"health"} />}
            />
            <Route
              exact
              path="/Science"
              element={
                <Main
                  key="science"
                  pageSize={this.pagesize} 
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/"
              element={<Main pageSize={this.pagesize} category={"general"} />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
