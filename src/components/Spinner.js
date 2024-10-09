import React from "react";
import loding from "./loding.gif";

const Spinner = () => {
  return (
    <>
      <div
        className="text-center d-flex justify-content-center" id="spiner"
        style={{ width: "70vw", marginTop: "30px", marginBottom: "50px" }}
      >
        <img src={loding} alt="loding" />
      </div>
    </>
  );
};

export default Spinner;
