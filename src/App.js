import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pagesize = 12;
  apikey =process.env.REACT_APP_NEWSAPP_API;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({
      progress:progress,
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="red" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/Business"
              element={
                <Main
                apikey={this.apikey}
                  setProgress={this.setProgress}
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
                  apikey={this.apikey} 
                  setProgress={this.setProgress}
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
                <Main 
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pagesize}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <Main 
                  apikey={this.apikey}
                  setProgress={this.setProgress}
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
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pagesize}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <Main
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pagesize}
                  category={"health"}
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <Main 
                  apikey={this.apikey}
                  key="science"
                  pageSize={this.pagesize}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <Main 
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  pageSize={this.pagesize}
                  category={"general"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
