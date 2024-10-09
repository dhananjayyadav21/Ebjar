import React, { useEffect, useState } from "react";
import Newsiteam from "./Newsiteam";
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

  // const apiUrl =`https://newsapi.org/v2/top-headlines?q=all&apiKey=${props.apikey}`;

  const apiUrl = " https://mocki.io/v1/e9f7909e-80d6-414b-97b4-0f6d9b234d41?";

  const update = async () => {
    props.setProgress(0);
    let Url = `${apiUrl}&page=${Page}&pageSize=${props.pageSize}&category=${props.category}`;
    setLoding(true);
    let data = await fetch(Url);
    let datajson = await data.json();
    setArticles(datajson.articles);
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
      let Url = `${apiUrl}&page=${Page - 1}&pageSize=${
        props.pageSize
      }&category=${props.category}`;
      setPage(Page + 1);
      let data = await fetch(Url);
      let datajson = await data.json();
      setArticles(Articles.concat(datajson.articles));
    }, 1500);
  };

  const capitlize = (str)=>{
    return str.toUpperCase();
  }

  // ================================ component render in index html ====================================================

  return (
    <>
      <div className="container-fluid" style={props.mode} id="main">
        <hr/>
        <h2 className=" mx-4 text-center"><b>TOP & LATEST NEWS - {capitlize(props.category)}</b></h2>
        <hr/>

        <div className="row my-4">
          <div
            className="col-9"
            id="scrollableDiv"
            style={{ height: "80vh", overflow: "auto" }}
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
                  {Articles.map((element, i) => {
                    return (
                      <>
                        {!Loding && (
                          <div className="col-lg-4" key={i}>
                            <Newsiteam
                              imgUrl={
                                element.urlToImage
                                  ? element.urlToImage
                                  : "https://i.ytimg.com/vi/0Bjm0CFyL20/maxresdefault_live.jpg"
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
                              author={
                                element.author ? element.author : "Unknown"
                              }
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

          <div className="sidebar col-3 sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
