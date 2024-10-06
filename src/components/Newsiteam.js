import React, { Component } from "react";

export class Newsiteam extends Component {
  render(props) {
    // prpos set in class component using this.prpos

    let { imgUrl, title, description, newsUrl,newsSource,author,time } = this.props;

    return (
      <>
        <div className="my-4 mx-4">
        
          <div className="card" style={{ width: "18rem" }}>
          <span className="badge rounded-pill text-bg-warning" style={{position:"absolute", zIndex:'100', right:'-3%', top:'-2%' }}>{newsSource}</span>
            <img src={imgUrl} className="card-img-top" alt="pictur" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text text-body-secondary">By {author} on {time}</p>
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
  }
}

export default Newsiteam;
