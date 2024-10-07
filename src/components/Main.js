import React, { useState, useEffect } from "react";
import Newsiteam from "./Newsiteam";
import Spinner from "./Spinner";
import Sidebar from "./Sidebar";
import InfiniteScroll from "react-infinite-scroll-component";

const Main = (props) => {
  //This is Empty array which is use in state inilization
  const article = [];

  //Define state using default values
  const [Articles, setArticles] = useState(article);
  const [TotalResults, setTotalResults] = useState(0);
  const [Loding, setLoding] = useState(true);
  const [Page, setPage] = useState(1);

  // ================================ fetching data using Api from newsapi ================================================

  // const apiUrl =`https://newsapi.org/v2/top-headlines?q=all&apiKey=${props.apikey}`;

  const apiUrl = " https://mocki.io/v1/e9f7909e-80d6-414b-97b4-0f6d9b234d41?";

  const update = async () => {
    props.setProgress(0);
    let Url = `${apiUrl}&page=1&pageSize=${props.pageSize}&category=${props.category}`;
    setLoding(true);
    let data = await fetch(Url);
    let datajson = await data.json();
    setArticles(datajson.articles);
    setLoding(false);
    setTotalResults(datajson.totalResults);
    props.setProgress(100);
  };

  //useEffect function which is update state
  useEffect(() => {
    update();
    // eslint-disable-next-line
  },[]);

  console.log("datajson");
  //fetchMoreData for relode more data in InfiniteScroll
  const fetchMoreData = async () => {
    let Url = `${apiUrl}&page=${Page-1}&pageSize=${props.pageSize}&category=${props.category}`;
    setPage(Page + 1);
    let data = await fetch(Url);
    let datajson = await data.json();
    setArticles(Articles.concat(datajson.articles));
    setTotalResults(datajson.totalResults);
    console.log("hye"+datajson);
  };

  // ================================ return Html in main component ====================================================
  return (
    <>
      <h2 className="mx-4" style={{marginTop:'80px'}}>Top & populer News</h2>

      <div className="d-flex">
        <div style={{ width: "70vw" }}>
          <InfiniteScroll
            dataLength={Articles.length}
            next={fetchMoreData}
            hasMore={Articles.length !== TotalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {Loding && <Spinner />}

                {Articles.map((element) => {
                  return (
                    <>
                      {!Loding && (
                        <div className="col-lg-4" key={element.url}>
                          <Newsiteam
                            imgUrl={
                              element.urlToImage?element.urlToImage:"https://i.ytimg.com/vi/0Bjm0CFyL20/maxresdefault_live.jpg"
                            }
                            title={
                              element.title
                                ? element.title.slice(0, 40)
                                : element.description.slice(0, 40)
                            }
                            description={
                              element.description
                                ? element.description.slice(0, 80)
                                : element.title.slice(0, 80)
                            }
                            newsUrl={element.url}
                            newsSource={
                              element.author ? element.author : "SD news"
                            }
                            author={element.author ? element.author : "Unknown"}
                            time={element.publishedAt}
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

        <div className="sidebar" style={{ width: "28vw", Height: "100vh" }}>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Main;
