import React from "react";

const Iteam = (props) => {
  let { imgUrl, title, description, rate, price } = props;

  return (
    <>
      <div className="my-4 mx-md-4 mx-2">
        <div className="card" style={{ width: "100%" }}>
          <span
            className="badge rounded-pill text-bg-warning"
            style={{
              position: "absolute",
              zIndex: "100",
              right: "-3%",
              top: "-2%",
            }}
          >
           Rate : {rate}
          </span>
          <img src={imgUrl} className="card-img-top py-2 px-2" alt="pictur" style={{height:'200px', objectFit:'contain', width:'auto'}} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <h4 className="card-text green-font">
             $ {price}
            </h4>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline-warning top-margin-5px"
              style={{width:'100%'}}
            >
              Add Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Iteam;
