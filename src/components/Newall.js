import React, { Component } from "react";
import Newsiteam from "./Newsiteam";

export class Newall extends Component {
  //default articale bcz some time api not work
  articles = [
    {
      source: { id: null, name: "CBS Sports" },
      author: null,
      title:
        "Week 5 NFL betting guide: Best expert, model, AI, parlay, DFS and season-long fantasy picks revealed - CBS Sports",
      description:
        "SportsLine's team of Vegas experts and its proven model and AI PickBot get you ready for Week 5 NFL betting",
      url: "https://www.cbssports.com/nfl/news/week-5-nfl-betting-guide-best-expert-model-ai-parlay-dfs-and-season-long-fantasy-picks-revealed/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/01/01/221e9fff-67ee-404d-8fac-ebd9799d907c/thumbnail/1200x675/a217ccc224482069baba80f2ed3e3637/mike-evans-8-1400-us.jpg",
      publishedAt: "2024-10-03T13:13:45Z",
      content:
        "The Week 5 NFL schedule has arrived, with the only two unbeaten teams trying to keep their perfect starts alive. The Vikings face Aaron Rodgers and the Jets (+2.5, 40.5) in London on Sunday, while Ka… [+6046 chars]",
    },
    {
      source: { id: null, name: "Sports Illustrated" },
      author: "Will Laws",
      title: null,
      description:
        "Houston’s seven-year streak of reaching the American League Championship Series is over after former Astros manager A.J. Hinch guided Detroit to an era-ending upset in the wild-card round.",
      url: "https://www.si.com/mlb/houston-has-a-problem-aj-hinch-youthful-tigers-snap-astros-alcs-streak",
      urlToImage:
        "https://images2.minutemediacdn.com/image/upload/c_crop,w_3506,h_1972,x_0,y_175/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01j97qpgr7t7jppz9t54.jpg",
      publishedAt: "2024-10-02T23:33:33Z",
      content:
        "All dynasties are eventually dethroned. We may have witnessed the end of baseballs only true modern dynasty on Wednesday. \r\nAfter a prolonged run of American League excellence, the Houston Astros sev… [+4291 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Joel Khalili",
      title: "The World’s Biggest Bitcoin Mine Is Rattling This Texas Oil Town",
      description:
        "A cash-strapped city in rural Texas will soon be home to the world’s largest bitcoin mine. Local protesters are “raising hell.”",
      url: "https://www.wired.com/story/the-worlds-biggest-bitcoin-mine-is-rattling-this-texas-oil-town/",
      urlToImage:
        "https://media.wired.com/photos/66c5ecc5724cee849e3104da/191:100/w_1280,c_limit/WIRED_BTC_EC_B-Elena-Chudoba.jpg",
      publishedAt: "2024-09-11T10:00:00Z",
      content:
        "The previous October, Sawicky organized a weeklong protest alongside environmental activist group Greenpeace and brandished various anti-bitcoin signs at anyone who entered the Riot facility. Only a … [+3641 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Samantha Kelly",
      title: "PayPal to Allow Businesses Buy and Sell Crypto",
      description:
        'The change will bring bitcoin and other virtual coins to "millions" of merchants across the US.',
      url: "https://www.cnet.com/personal-finance/crypto/paypal-to-allow-businesses-buy-and-sell-crypto/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/2b2ba45973ffae7baacd4449b399bd35435e4fa0/hub/2022/04/22/d7acb748-e7bd-4553-ae44-2f893ccb87ba/paypal-logo-2022-659.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-09-26T15:12:00Z",
      content:
        "It's about to get easier for US merchants to use cryptocurrency for payments. PayPal is launching a new service to allow the businesses that use its platform to buy, hold and sell crypto. \r\nAlthough … [+1029 chars]",
    },
  ];

  //constructor for state
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      page: 1,
    };
  }

  //componentDidMount for fetching data from api using newsapi key
  async componentDidMount() {
    let Url =
      `https://newsapi.org/v2/everything?q=all&apiKey=a4ceefa53234470e984e1a7607629682&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(Url);
    let datajson = await data.json();
    console.log(datajson);
    this.setState({
      articles: datajson.articles,
      totalResults: datajson.totalResults,
    });
  }

  //function for previous  page 
  previousOnClick = async () => {
      let Url = `https://newsapi.org/v2/everything?q=all&apiKey=a4ceefa53234470e984e1a7607629682&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(Url);
      let datajson = await data.json();
      this.setState({
        articles: datajson.articles,
        page: this.state.page - 1,
      });
    
  };

    //function for next  page 
  nextOnClick = async () => {
    if (this.state.page + 1 < Math.ceil(this.state.totalResults / 20)) {
      let Url = `https://newsapi.org/v2/everything?q=all&apiKey=a4ceefa53234470e984e1a7607629682&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(Url);
      let datajson = await data.json();
      this.setState({
        articles: datajson.articles,
        page: this.state.page + 1,
      });
    }
  };

  //render the class components
  render() {
    return (
      <>
        <h2 className="mt-4 mx-4">Top & populer News</h2>
        <div className="" style={{ width: "70vw" }}>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
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
                  />
                </div>
              );
            })}
          </div>
          <div className=" d-flex justify-content-between my-4 mx-4">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.previousOnClick}
            >
              &larr; previous
            </button>
            <button
              disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))}
              type="button"
              className="btn btn-dark"
              onClick={this.nextOnClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Newall;
