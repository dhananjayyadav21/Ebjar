import React, { Component } from "react";

export class Newsiteam extends Component {
  render(props) {
    let { imgUrl,title, description, newsUrl} = this.props;
    return (
      <>
        <div className="my-4 mx-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-warning">
                Read News
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Newsiteam;
