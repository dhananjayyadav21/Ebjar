import React, { Component } from "react";
import loding from "./loding.gif";

export class Spinner extends Component {
  render() {
    return (
      <>
        <div className="text-center d-flex justify-content-center" style={{ width: "70vw", marginTop: "30vh", marginBottom:"30vh" }}>
          <img src={loding} alt="loding" />
        </div>
      </>
    );
  }
}

export default Spinner;
