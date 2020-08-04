import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
              <h3>Reddit App using ReactJS</h3>
              <p><a href="https://reddit-react.jyoti.dev/">Check it live here</a>
                <br/><a href="https://github.com/jp0707/reddit-react" title="Reddit">Code</a>
                <br/>Created a Web version for the Reddit App New Feeds. The home page displays the list of subreddits to choose from, which further links to the subreddit page that displays all the posts of that sunreddit.
                <br/>Functionalities implemented were voting, comment, share, infinite scrolling, stop infinite retrying on error, etc.
              </p>
              <h3>Hacker News App using React Native</h3>
              <p><a href="https://youtu.be/woYhWfJ4cBo">Check it live here</a>
                <br/><a href="https://github.com/jp0707/hn">Code</a>
                <br/>Developed an App for which displays a list of news, each news displays the article and comments in different tabs.
                <br/>Functionalities implemented were infinite scrolling, pull to request, screen navigation, tab navigation, nested and collapsable comment view, decode html entities.
                <br/><br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/woYhWfJ4cBo" title="hn" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </p>
              <h3>Resume Website</h3>
              <p><a href="https://jyoti.dev">Check it live here</a>
                <br/><a href="https://github.com/jp0707/jp0707.github.io">Code</a>
                <br/>Developed my Resume Website using ReactJS.
              </p>
          </div>
      </div>
    </section>
    );
  }
}

export default Portfolio;
