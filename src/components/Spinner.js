import React from "react";
import loding from "./loding.gif";

const Spinner = () => {
  return (
    <>
      <div
        className="text-center d-flex justify-content-center"
        style={{ width: "70vw", marginTop: "30px", marginBottom: "30px" }}
      >
        <img src={loding} alt="loding" />
      </div>
    </>
  );
};

export default Spinner;
