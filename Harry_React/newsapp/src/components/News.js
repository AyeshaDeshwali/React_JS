import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  // Define articles as a class property
  articles = [
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Lauren Forristal",
      title:
        "Bye-bye bots: Altera's game-playing AI agents get backing from Eric Schmidt | TechCrunch",
      description:
        "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI Research company Altera raised $9 million to build AI agents that can play video games alongside other players.",
      url: "https://techcrunch.com/2024/05/08/bye-bye-bots-alteras-game-playing-ai-agents-get-backing-from-eric-schmidt/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720",
      publishedAt: "2024-05-08T15:14:57Z",
      content:
        "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI agents. The company announced Wednesday that it … [+6416 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Alex Wilhelm and Theresa Loconsolo",
      title:
        "$450M for Noname, two billion-dollar rounds, and good news for crypto startups | TechCrunch",
      description:
        "This morning on Equity, not only do we have good news for crypto founders, we're also digging into Akamai spending $450 million for API security firm Noname, and billion dollar deals from Wiz and Wayve.",
      url: "https://techcrunch.com/2024/05/08/450m-for-noname-two-billion-dollar-rounds-and-good-news-for-crypto-startups/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-942480316.jpg?resize=1200,835",
      publishedAt: "2024-05-08T15:01:51Z",
      content:
        "Good news, crypto founders: Venture capital activity is picking up in your sector after falling to multi-year lows in late 2023. Put another way, venture folks appear more web3-bullish than before, e… [+1599 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Alex Wilhelm",
      title: "Watch: When did iPads get as expensive as MacBooks?",
      description:
        "Would you switch out your MacBook for an iPad with an M4 chip and OLED display? With the increase in price, Apple seems to be arguing these are comparable but we’re curious to see if consumers will make the change.",
      url: "https://techcrunch.com/2024/05/08/techcrunch-minute-when-did-ipads-get-as-expensive-as-macbooks/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/ipad-noplay.png?resize=1200,675",
      publishedAt: "2024-05-08T14:52:26Z",
      content:
        "Apple’s iPad event had a lot to like. New iPads with new chips and new sizes, a new Apple Pencil, and even some software updates. If you are a big fan of Apple hardware, well, it was probably a good … [+1385 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Rebecca Bellan",
      title:
        "Uber promises member exclusives as Uber One passes $1B run-rate | TechCrunch",
      description:
        "Uber plans to deliver more perks to Uber One members, like member-exclusive events, in a bid to gain more revenue through subscriptions.",
      url: "https://techcrunch.com/2024/05/08/uber-promises-member-exclusives-as-uber-one-passes-1b-run-rate/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1142304853-a.jpg?resize=1200,675",
      publishedAt: "2024-05-08T14:41:36Z",
      content:
        "Uber plans to deliver more perks to Uber One members, like member-exclusive events, in a bid to gain more revenue through subscriptions.",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Mike Butcher",
      title:
        "Checkfirst raises $1.5M pre-seed, applying AI to remote inspections and audits | TechCrunch",
      description:
        "Checkfirst enables businesses to schedule inspectors based on geographical location and qualifications, in addition to allowing for remote inspections.",
      url: "https://techcrunch.com/2024/05/08/checkfirst-raises-1-5m-pre-seed-applying-ai-to-remote-inspections-and-audits/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/Checkfirst-team.jpg?w=960",
      publishedAt: "2024-05-08T13:02:12Z",
      content:
        "We’ve all seen them. The inspector with a clipboard, walking around a building, ticking off the last time the fire extinguishers were checked, or if all the lights are working.",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Paul Sawers",
      title:
        "UK challenger bank Monzo nabs another $190M as US expansion beckons | TechCrunch",
      description:
        "Monzo has raised another $190 million, as the challenger bank looks to expand its presence internationally — particularly in the U.S.",
      url: "https://techcrunch.com/2024/05/08/uk-challenger-bank-monzo-nabs-another-190m-at-5-2b-valuation/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-1259121938-e1715164252704.jpg?resize=1200,676",
      publishedAt: "2024-05-08T12:34:05Z",
      content:
        "Monzo has raised another £150 million ($190 million), as the challenger bank looks to expand its presence internationally particularly in the U.S.",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Brian Heater",
      title: "iRobot names former Timex head Gary Cohen as CEO | TechCrunch",
      description:
        "iRobot Tuesday announced the successor to longtime CEO, Colin Angle. Gary Cohen, who previously held the chief executive role at Timex and Qualitor Automotive.",
      url: "https://techcrunch.com/2024/05/08/irobot-names-former-timex-head-gary-cohen-as-ceo/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/Screenshot-2024-05-08-at-7.19.50 AM.jpg?resize=1200,919",
      publishedAt: "2024-05-08T12:22:30Z",
      content:
        "iRobot Tuesday announced the successor to longtime CEO, Colin Angle. Gary Cohen, who previously held the chief executive role at Timex and Qualitor Automotive, will be heading up the company.",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Devin Coldewey",
      title:
        "Google Deepmind debuts huge AlphaFold update and free proteomics-as-a-service web app | TechCrunch",
      description:
        "Google Deepmind has taken the wraps off a new version AlphaFold, their transformative machine learning model that predicts the shape and behavior of proteins.",
      url: "https://techcrunch.com/2024/05/08/google-deepmind-debuts-huge-alphafold-update-and-free-proteomics-as-a-service-web-app/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/alphafold-3-deepmind.jpg?resize=1200,675",
      publishedAt: "2024-05-07T22:10:14Z",
      content:
        "Google Deepmind has taken the wraps off a new version AlphaFold, their transformative machine learning model that predicts the shape and behavior of proteins.",
    },
  ];

  render() {
    return (
      <div className="container">
        <h2 className="mt-4">NewsMonkey - Top Headlines</h2>

        <div className="row">
          <div className="col-md-4 news-container">
            {this.articles.map((article, index) => (
              <NewsItems
                key={index}
                title={article.title.slice(0, 50) + "....."}
                description={article.description.slice(0, 150) + "..."}
                urlToImage={article.urlToImage}
                url={article.url}
                author={article.author}
                publishedAt={article.publishedAt}
              />
            ))}
          </div>
          <div className="col-md-4 news-container">
            {this.articles.map((article, index) => (
              <NewsItems
                key={index}
                title={article.title.slice(0, 50) + "....."}
                description={article.description.slice(0, 150) + "..."}
                urlToImage={article.urlToImage}
                url={article.url}
                author={article.author}
                publishedAt={article.publishedAt}
              />
            ))}
          </div>
          <div className="col-md-4 news-container">
            {this.articles.map((article, index) => (
              <NewsItems
                key={index}
                title={article.title.slice(0, 50) + "....."}
                description={article.description.slice(0, 150) + "..."}
                urlToImage={article.urlToImage}
                author={article.author}
                publishedAt={article.publishedAt}
                newsurl={article.newsurl}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
