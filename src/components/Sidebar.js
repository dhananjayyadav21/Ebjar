import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  array = [{
    "source": {
        "id": "il-sole-24-ore",
        "name": "Il Sole 24 Ore"
    },
    "author": "Marco Masciaga",
    "title": "India, settimana nera in Borsa: le conseguenze di guerra e stimoli cinesi",
    "description": "L’allargarsi del conflitto e la fuga dei capitali stranieri verso Shanghai ha portato a una brusca correzione: peggiore settimana da giugno 2022",
    "url": "https://www.ilsole24ore.com/art/india-peggiore-settimana-borsa-due-anni-cosa-c-entrano-guerra-e-cina-AGng4mN",
    "urlToImage": "https://i2.res.24o.it/images2010/S24/Documenti/2024/10/05/Immagini/Ritagli/2024-10-03T035414Z_109164099_RC2448AMTEKV_RTRMADP_5_BROKERAGES-INDIA-STOCKS-U25338604266kPw-1440x752@IlSole24Ore-Web.JPG?r=1170x507",
    "publishedAt": "2024-10-05T07:36:39Z",
    "content": "Ascolta la versione audio dell'articolo\r\n2' di lettura\r\nDal nostro corrispondente\r\nNEW DELHI - I mercati azionari indiani hanno mandato in archivio ieri la settimana peggiore da oltre due anni a ques… [+2896 chars]"
},
{
    "source": {
        "id": "google-news-it",
        "name": "Google News (Italy)"
    },
    "author": "Virgilio Notizie",
    "title": "Operaio morto travolto da un treno, le testimonianze dei colleghi: \"Si è allontanato un attimo, poi il rumore\" - Virgilio Notizie",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQa3VKOXJyeWRpcGlSaF9aTkpvd0VZa0FpakRjemtwNTBQTDF2VWpvcmFocWtKTXd1SEVyQTFMaG9WLVRhendXQVNmOU5SV0hTSFRZOGozRmh4c2xZZks4c01OZjIxVTBGWUNpMzB2bG5ZOHkwLWxtX1VEY0hmZXVubjg1UnBlX0F1MmtYWldVSDM1dXJRaUhTTjhtWXBrbzlXUTY4MFRCXzBBSU44ZG9PS25oUmlwYkV1c0ZfZ29PS0xxRkVhQmNUQVI3R21DQXJFeVNvd0NKeC3SAd4BQVVfeXFMUGQ3TjhydmNIeVpVRUM3Yy03RkowaXFLaDRkalc1TlRlNGpzWVNWdW9xSThMRzMyUEdOV1BhanVfSTFUOEJXQkdOd1FWS2JvZEZNcjZPRjA5UFRVVHZ0LUV2YWc4dlQ3bTNtYngwdERfekRsOEpFeTZycG95UkFxeENEalNiUElGd0IzaGNVX01rNVRHZDVDNEZSUE1CR24tN2lJMThmaFRZMGplYXVrLWthQ3FiNnZvdzlYR29wdUhlVkpQOVpNNUFKQmhWeDNQNUpMaXlobkVKTWNyalhR?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-10-05T07:26:00+00:00",
    "content": null
},
{
    "source": {
        "id": "rte",
        "name": "RTE"
    },
    "author": "RTÉ News",
    "title": "UN says Lebanon peacekeepers 'remain in all positions'",
    "description": "Follow developments in the ongoing conflict in the Middle East as Israel said it had targeted the intelligence headquarters of Hezbollah in Beirut.",
    "url": "https://www.rte.ie/news/2024/1005/1473715-middle-east-blog/",
    "urlToImage": "https://img.rasset.ie/002115f6-1600.jpg",
    "publishedAt": "2024-10-05T07:17:06Z",
    "content": "© RTÉ 2024. RTÉ.ie is the website of Raidió Teilifís Éireann, Ireland's National Public Service Media. RTÉ is not responsible for the content of external internet sites.\r\nImages Courtesy of Getty Ima… [+3 chars]"
},];

  constructor() {
    super();
    this.state = {
      art: this.array,
    };
  }

  async componentDidMount(){
    let url ='https://mocki.io/v1/e9f7909e-80d6-414b-97b4-0f6d9b234d41?';

    let data = await fetch(url);
    let responce = await data.json();

    this.setState({
      art:responce.articles
    })

  }
  //render in sidebar component
  render(props) {
    return (
      <>
        <div className="mx-4 my-4" style={{ border: "2px solid", borderRadius:'8px' }}>
          {this.state.art.map((el)=>{
            return <div key={el.urlToImage} className="card my-4 mx-4" style={{ width: "22rem" }}>
              <img src={el.urlToImage} className="card-img-top" alt="addimage" />
              <div className="card-body">
                <h5 className="card-title">{el.title?el.title.slice(0,20):el.description.slice(0,20)}</h5>
                <p className="card-text">{el.description?el.description.slice(0,40):el.title.slice(0,40)}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{el.author?el.author:'Unknown'}</li>
                <li className="list-group-item">{el.publishedAt?el.publishedAt:'Unknown'}</li>
              </ul>
              <div className="card-body">
                <Link to="/" className="card-link">
                {el.url?el.url:'Nothing'}
                </Link>
              </div>
            </div>
          })}
        </div>
      </>
    );
  }
}

export default Sidebar;
