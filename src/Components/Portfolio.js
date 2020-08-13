import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" className="resume">
        <div className="row resumeparts">
          <div className="three columns header-col">
            <h1><span>Projects</span></h1>
          </div>
          <div className="nine columns main-col">
            <div>
              <h3>Reddit App using ReactJS</h3>
                <ul>
                  <li><a href="https://reddit-react.jyoti.dev/">Check it live here</a></li>
                  <li><a href="https://github.com/jp0707/reddit-react" title="Reddit">Code</a></li>
                  <li>Created a Web version for the Reddit App News Feeds. The home page displays the list of subreddits to choose from, which further links to the subreddit page that displays all the posts of that subreddit.</li>
                  <li>Implemented 
                  <a href="https://github.com/jp0707/reddit-react/blob/839463f25d2f5dd20c283a1bb54bee7cd435f666/src/Feed.js#L51:L71"> infinite scrolling</a>,
                  <a href="https://github.com/jp0707/reddit-react/blob/9c9618278c4cdde1997d892e3a82a44e16bfae47/src/ShareButton.js#L17:L31"> native sharing</a>, 
                  <a href="https://github.com/jp0707/reddit-react/blob/9c9618278c4cdde1997d892e3a82a44e16bfae47/src/App.js#L14:L25"> screen navigation</a>, 
                  <a href="https://github.com/jp0707/reddit-react/blob/839463f25d2f5dd20c283a1bb54bee7cd435f666/src/VoteButtons.js#L26:L64"> voting</a> etc.</li>
                </ul>
                <h3>Hacker News App using React Native</h3>
                <ul>
                  <li><a href="https://youtu.be/woYhWfJ4cBo">See this Video</a></li>
                  <li><a href="https://github.com/jp0707/hn">Code</a></li>
                  <li>Developed an App that displays a list of news, each news displays the article and comments in different tabs.</li>
                  <li>Implemented 
                  <a href="https://github.com/jp0707/hn/blob/396e122e477325e0e70a51d139ebcc77cefd0c1f/src/Feed.js#L70:L79"> infinite scrolling</a>, 
                  <a href="https://github.com/jp0707/hn/blob/396e122e477325e0e70a51d139ebcc77cefd0c1f/src/Feed.js#L59:L68"> pull to refresh</a>, 
                  <a href="https://github.com/jp0707/hn/blob/57571206ece0f9bacb6700afe317e893b0992a2e/src/ArticleTab.js#L8:L17"> in-app browser</a>, 
                  <a href="https://github.com/jp0707/hn/blob/40940b1e237dcab1212760d8217dfd1efb6ae1c9/App.js#L18:L29"> screen navigation</a>, 
                  <a href="https://github.com/jp0707/hn/blob/40940b1e237dcab1212760d8217dfd1efb6ae1c9/src/StoryScreen.js#L14:L17"> tab navigation</a>, 
                  <a href="https://github.com/jp0707/hn/blob/57571206ece0f9bacb6700afe317e893b0992a2e/src/Comments.js#L19:L32"> nested and collapsable comment view</a>.</li>
                  <div className="video-responsive">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/woYhWfJ4cBo" title="hn" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </ul>
                <h3>Resume Website</h3>
                <ul>
                  <li><a href="https://github.com/jp0707/jp0707.github.io">Code</a></li>
                  <li>Developed this resume website using ReactJS.</li>
                </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
