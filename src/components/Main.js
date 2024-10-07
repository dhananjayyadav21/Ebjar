import React, { Component } from "react";
import Newsiteam from "./Newsiteam";
import Spinner from "./Spinner";
import Sidebar from "./Sidebar";
import InfiniteScroll from "react-infinite-scroll-component";

export class Main extends Component {
  //default articale array for state bcz some time api not work
  articles = [];

  //constructor using for define state in class component
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      page: 1,
      loding: false,
      totalResults: 0,
    };
  }

  // ================================ fetching data using Api from newsapi ================================================
  apiUrl =
    "https://newsapi.org/v2/top-headlines?q=all&apiKey=f93bde8b0bec4a6681faf429321d3b18";

  // apiUrl = " https://mocki.io/v1/e9f7909e-80d6-414b-97b4-0f6d9b234d41?";
  async update() {
    let Url = `${this.apiUrl}&page=1&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({ loding: true });
    let data = await fetch(Url);
    let datajson = await data.json();
    this.setState({
      articles: datajson.articles,
      totalResults: datajson.totalResults,
      loding: false,
    });
  }

  //componentDidMount function which is update state
  async componentDidMount() {
    this.update();
  }

  //function for relode more data in InfiniteScroll
  fetchMoreData = async () => {
    this.state({page: this.state.page + 1,});
    let Url = `${this.apiUrl}&page=1&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    let data = await fetch(Url);
    let datajson = await data.json();
    console.log(datajson);
    this.setState({
      articles: this.state.articles.concat(datajson.articles),
      totalResults: datajson.totalResults,
    });
  };

  // ================================ component render in index html ====================================================
  render(props) {
    return (
      <>
        <h2 className="mt-4 mx-4">Top & populer News</h2>

        <div className="d-flex">
          <div style={{ width: "70vw" }}>
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner />}
            >
              <div className="container">
                <div className="row">
                  {this.state.loding && <Spinner />}

                  {this.state.articles.map((element) => {
                    return (
                      <>
                        {!this.state.loding && (
                          <div className="col-lg-4" key={element.url}>
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

          <div className="sidebar" style={{ width: "28vw", Height: "100vh" }}>
            <Sidebar />
          </div>
        </div>
      </>
    );
  }
}

export default Main;
