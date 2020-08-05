import React, { Component } from 'react';
class About extends Component {
  render() {
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Developer-Cloud Apps Engaged in Digital Cloud APIs Delivery and practices. 
            <br/>Three years of Experience in API Management tools such as APIGEE with knowledge in JavaScript, NodeJS, SOAP, and Restful Webservices. 
            <br/>Experience on multiple devOps tools and Agile methodologies like GitHub, Bitbucket, Jenkins, AGILE and Jira. 
            <br/>Have worked for Major Client of Retail and Telecom. Also includes Analysing and Development of solution to meet enterprise requirement.
            </p>
            <div className="row">
              <div className="columns download">
                <p><a href="/Jyoti_Patel_Resume.pdf" className="button"><i className="fa fa-download"></i>Resume</a></p>
              </div>
            
              <div className="columns download">
                <p><a href="https://www.linkedin.com/in/jyoti-patel-0x" className="button"><i className="fa fa-linkedin"></i>LinkedIn</a></p>
              </div>
              <div className="columns download">
                <p><a href="https://github.com/jp0707" className="button"><i className="fa fa-github"></i>GitHub</a></p>
              </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
