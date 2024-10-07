import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  //this is array for articales store in after update state
  array = [];

  //constructor function for define state
  constructor() {
    super();
    this.state = {
      art: this.array,
    };
  }

  //componentDidMount function for update state
  async componentDidMount() {
    let url = "https://mocki.io/v1/e9f7909e-80d6-414b-97b4-0f6d9b234d41?";
    let data = await fetch(url);
    let responce = await data.json();
    this.setState({
      art: responce.articles,
    });
  }

  //======================================= render element in sidebar component ================================================
  render(props) {
    return (
      <>
        <div
          className="mx-md-4 my-4"
          style={{ border: "2px solid", borderRadius: "8px" }}
        >
          {this.state.art.map((el) => {
            return (
              <div
                key={el.urlToImage}
                className="card my-2 my-md-4 mx-2 mx-lg-4"
                style={{ width: "90%" }}
              >
                <img
                  src={el.urlToImage?el.urlToImage:'https://i.ytimg.com/vi/0Bjm0CFyL20/maxresdefault_live.jpg'}
                  className="card-img-top"
                  alt="addimage"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {el.title
                      ? el.title.slice(0, 20)
                      : el.description.slice(0, 20)}
                  </h5>
                  <p className="card-text">
                    {el.description
                      ? el.description.slice(0, 40)
                      : el.title.slice(0, 40)}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {el.author ? el.author : "Unknown"}
                  </li>
                  <li className="list-group-item">
                    {el.publishedAt ? el.publishedAt : "Unknown"}
                  </li>
                </ul>
                <div className="card-body">
                  <Link to="/" className="card-link">
                    {el.url ? el.url : "Nothing"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Sidebar;
