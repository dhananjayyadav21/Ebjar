import React from "react";

const Newsiteam = (props) => {
  let { imgUrl, title, description, newsUrl, newsSource, author, time } = props;

  return (
    <>
      <div className="my-4 mx-md-4 mx-2" style={{width:'100%'}}>
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
            {newsSource}
          </span>
          <img src={imgUrl} className="card-img-top" alt="pictur" style={{height:'200px', objectFit:'cover', width:'auto'}} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text text-body-secondary">
              By {author} on {new Date(time).toGMTString()}
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-danger"
            >
              Read News
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsiteam;
