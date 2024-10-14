import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  //This is empty aaray for articales(Art)
  const array = [];

  //Define state which is Use array initially
  const [Art, setArt] = useState(array);

  //Update function use for update UseEfect
  const update = async () => {
    let url = "https://fakestoreapi.com/products/category/jewelery";
    let data = await fetch(url);
    let responce = await data.json();
    setArt(responce);
  };

  useEffect(() => {
    update();
  }, []);

  //======================================= render element in sidebar component ================================================

  return (
    <> 
    <div style={props.cardmode}>
      <div
        className=""
        id="scrollablesidebar"
        style={{ border: "2px solid", borderRadius: "8px" , height: "88vh", overflow: "auto",padding:10}}
      >
        {Art.map((el,i) => {
          return (
            <div
              key={i}
              className="card my-2 my-md-3 mx-2 mx-lg-3 sidebar-contaienre-width">
              <img
                src={
                  el.image
                    ? el.image
                    : "https://i.ytimg.com/vi/0Bjm0CFyL20/maxresdefault_live.jpg"
                }
                className="card-img-top px-2 py-2"
                alt="addimage"
                style={{height:'250px', objectFit:'contain'}}
              />
              <div className="card-body" style={props.cardmode}>
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
                <li className="list-group-item green-font" style={props.cardmode}>
                  <b> $ {el.price ? el.price : "Unknown"}</b>
                </li>
                <li className="list-group-item" style={props.cardmode}>
                <b> Rate : {el.rating.rate ? el.rating.rate : "Unknown"}</b>
                </li>
              </ul>
            
              <div className="card-body" style={props.cardmode}>
                <Link to="/" className="card-link red-font">
                   View Products
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Sidebar;
