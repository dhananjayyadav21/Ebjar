import React, { useEffect, useState } from "react";
import Iteam from "./Iteam";
import Spinner from "./Spinner";
import Sidebar from "./Sidebar";
import InfiniteScroll from "react-infinite-scroll-component";

const Main = (props) => {
  //This is Empty array which is use in state inilization
  const article = [];

  //Define state using default values
  const [Articles, setArticles] = useState(article);
  const [Loding, setLoding] = useState(true);
  const [Page, setPage] = useState(1);

  // ================================ fetching data using Api from newsapi ======================================================

  const apiUrl = `https://fakestoreapi.com/products/category/${props.category}`;

  const update = async () => {
    props.setProgress(0);
    let Url = `${apiUrl}`;
    setLoding(true);
    let data = await fetch(Url);
    let datajson = await data.json();
    setArticles(datajson);
    setLoding(false);
    props.setProgress(100);
  };

  useEffect(() => {
    update();
    // eslint-disable-next-line
  }, []);

  //fetchMoreData for relode more data in InfiniteScroll
  const fetchMoreData = () => {
    setTimeout(async () => {
      let Url = `${apiUrl}`;
      setPage(Page + 1);
      let data = await fetch(Url);
      let datajson = await data.json();
      setArticles(Articles.concat(datajson));
    }, 1500);
  };

  const capitlize = (str) => {
    return str.toUpperCase();
  };

  // ================================ component render in index html ====================================================

  return (
    <>
      <div className="container-fluid" style={props.mode} id="main">
        <div className="row my-4">
          <div
            className="col-9"
            id="scrollableDiv"
            style={{ height: "87vh", overflow: "auto" }}
          >
            <InfiniteScroll
              dataLength={Articles.length}
              next={fetchMoreData}
              hasMore={true}
              scrollableTarget="scrollableDiv"
              loader={<Spinner />}
            >
              <div className="container-fluid">
                <div className="row">
                  <hr />
                  <h4 className=" text-center"><b>TOP & LATEST PRODUCTS - {capitlize(props.category)}</b></h4>
                  <hr />
                  {Articles.map((element, i) => {
                    return (
                      <>
                        {!Loding && (
                          <div className="col-lg-4" key={i}>
                            <Iteam
                              imgUrl={
                                element.image
                                  ? element.image
                                  : "https://i.ytimg.com/vi/0Bjm0CFyL20/maxresdefault_live.jpg"
                              }
                              title={
                                element.title
                                  ? element.title.slice(0, 22)
                                  : element.description.slice(0, 22)
                              }
                              description={
                                element.description
                                  ? element.description.slice(0, 60)
                                  : element.title.slice(0, 60)
                              }
                              rate={
                                element.rating.rate
                                  ? element.rating.rate
                                  : "4.5"
                              }
                              price={element.price}
                            />
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </InfiniteScroll>
          </div>

          <div className="sidebar col-3 sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
