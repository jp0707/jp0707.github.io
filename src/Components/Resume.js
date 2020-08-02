import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <section id="resume">

      <div className="row resumeparts">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>St. Francis Institute of Technology</h3>
              <p className="info">B.E. in Information Technology 
                <span>&bull;</span>
                <em className="date">May 2016</em>
              </p>
              <p>Project : <b>Access Control Mechanism Using Eye Veins Identification. </b>
              <br/>In this project, the team had developed a MatLab software application for eye vein identification. 
              <br/>The blood vessel structure of the sclera is unique to each person, and it can be remotely obtained non-intrusively in the visible wavelengths. Verification of these blood vessels employs digital templates and the templates are then encoded with mathematical algorithms. Therefore, it is well suited for human identification.
              <br/>It is used for access control and authorization as the accuracy of eye vein identification is more as compared to other biometric methods as stability of the patterns do not change with age, allergies, or redness.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row resumeparts">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          <div>
            <h3>API development for Leading Retail Company in Japan:</h3>
            <p>-Build API’s in Edge to support mobile apps for Sales Representatives.
            <br/>-Apigee Edge was used as a App Backend to provide data from the Date Warehousing Application setup.
            <br/>-Utilized Apigee BaaS as a local data store for Medical Rep level Data sets for Sales Metrics.
            <br/>-Apigee BaaS is used to send out notifications to the Mobile App.
            <br/>-Periodic synch of data between Apigee & client system.
            </p>
          </div>
          <div>
            <h3>API development for Leading Facility Provider in UK:</h3>
            <p>-Participated in design and  development of APIs.
            <br/>-Design Security standards to meet Security and compliance requirement using OAUTH, OAUTH2.0 and custom security.
            <br/>-Integrated Customer’s Webhooks.
            <br/>-Integrated Developer Portal with Azure AD for SSO.
            <br/>-Installed and integrated multiple monitoring , Auditing tools with API management server and API services such as Azure Insights etc.
            <br/>-Defining Automation test strategy using Postman.
            <br/>-Major work on conversion of SOAP services to RESTful API's in APIGEE.
            </p>
          </div>
        </div>
      </div>

      <div className="row resumeparts">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <ul>
            <li>ReactJS and React Native</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>SQL</li>
            <li>JAVA</li>
            <li>API development</li>
          </ul> 
			  </div>
      </div>

      <div className="row resumeparts">
        <div className="three columns header-col">
          <h1><span>Tools</span></h1>
        </div>
        <div className="nine columns main-col">
          <ul>
            <li>LINUX</li>
            <li>GIT</li>
            <li>Bitbucket</li>
            <li>Jira</li>
            <li>APIGEE</li>
          </ul>
        </div>
      </div>

   </section>
    );
  }
}

export default Resume;
