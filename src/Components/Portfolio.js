import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data) {
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <p> <b>Reddit App using ReactJS</b> / https://jp0707.github.io/reddit-react
                    <br/><a href="https://github.com/jp0707/reddit-react" title="Reddit">Code</a>
                    <br/>Created a Web version for the Reddit App New Feeds. The home page displays the list of subreddits to choose from, which further links to the subreddit page that displays all the posts of that sunreddit.
                    <br/>Functionalities implemented were voting, comment, share, infinite scrolling, stop infinite retrying on error, etc.
                  </p>
                  <div key="Reddit" className="columns portfolio-item">
                  
                  <div className="item-wrap">
                    <a href="https://jp0707.github.io/reddit-react">
                       <img alt="Reddit" src="images/profilepic.jpg" />
                       <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Reddit</h5>
                            <p>Reddit using ReactJS</p>
                          </div>
                        </div>
                      <div className="link-icon"><i className="fa fa-link"></i></div>
                    </a>
                  </div>
                </div>
            </div>
              <p><b>Hacker News App using React Native</b> / https://youtu.be/MU4chvrRHHQ

    <br/><a href="https://github.com/jp0707/hn">Code</a>

<br/>Developed an App for which displays a list of news, each news displays the article and comments in different tabs.
<br/>Functionalities implemented were infinite scrolling, pull to request, screen navigation, tab navigation, nested and collapsable comment view, decode html entities.
</p>
            <div key="Reddit" className="columns portfolio-item">
              <div className="item-wrap">
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/MU4chvrRHHQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  
                
              </div>
            </div>



          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
