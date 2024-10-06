import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Newall from "./components/Newall";
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
                <Newall
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
                <Newall
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
                <Newall key="sports" pageSize={this.pagesize} category={"sports"} />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <Newall
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
                <Newall
                  key="general"
                  pageSize={this.pagesize} 
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={<Newall key="health" pageSize={this.pagesize} category={"health"} />}
            />
            <Route
              exact
              path="/Science"
              element={
                <Newall
                  key="science"
                  pageSize={this.pagesize} 
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/"
              element={<Newall pageSize={this.pagesize} category={"general"} />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
