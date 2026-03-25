import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <section id="resume" className="resume">
      <div className="row resumeparts">
        <div className="three columns header-col">
          <h1><span>EXPERIENCE</span></h1>
        </div>
        <div className="nine columns main-col">
          <div>
            <h3>Weavik Inc., Waterloo, ON</h3>
            <p className="info">Software Developer
              <span>&bull;</span>
              <em className="date">May 2021 - Present</em>
            </p>

            <ul>
              <li>As a full-stack developer, I worked on mobile &amp; web frontends (React, React Native, and VueJS) and backend (NestJS &amp; TypeORM), depending on project needs.</li>
              <li>Worked with three clients: a provincial government client on a digital wallet mobile app, a private client for property management mobile &amp; web apps, and a private client for a crypto mobile app. Highlights include:
                <ul>
                  <li><strong>Property management (web &amp; mobile apps):</strong>
                    <ul>
                      <li>Built end-to-end OTP verification and SMS notifications flows using Twilio.</li>
                      <li>Built app notifications and analytics using OneSignal.</li>
                      <li>Worked across both frontend (web &amp; mobile app) and backends (endpoints, cron jobs) to build features based on specifications.</li>
                    </ul>
                  </li>
                  <li><strong>Govt-client’s digital wallet (mobile app):</strong>
                    <ul>
                      <li>Built features for a provincial govt’s digital-wallet mobile app in React Native and Redux (for global state management).</li>
                      <li>Presented demos to provincial government client as needed.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Collaborated with PMs and designers to understand and refine project requirements, UI flows, and edge cases.</li>
            </ul>
            <p className="newline"></p>
          </div>
          <div>
            <h3>Tata Consultancy Services, Mumbai</h3>
            <p className="info">Asst. System Engineer
              <span>&bull;</span>
              <em className="date">Sep 2016 - Sep 2017</em>
            </p>
            <ul>
              <li> Part of the Cloud Applications, Microservices, and APIs (CMA) team.</li>
              <li> Built API’s in APIGEE Edge to support mobile apps for Sales Representatives.</li>
              <li> Edge was used as backend to load data from the Data Warehousing Application setup.</li>
              <li> Utilized Apigee BaaS as a local data store for Medical Rep level Data sets for Sales Metrics.</li>
              <li> BaaS was used to send out notifications to the Mobile App.</li>
              <li> Periodic synch of data between Apigee & client system was done.</li>
            </ul>
            <p className="newline"></p>
          </div>
          <div>
            <h3>Tata Consultancy Services, Mumbai</h3>
            <p className="info">System Engineer
              <span>&bull;</span>
              <em className="date">Sep 2017 - Jun 2019</em>
            </p>
            <ul>
              <li> Participated in design and  development of APIs.</li>
              <li> Design Security standards to meet Security and compliance requirement using OAUTH, OAUTH2.0 and custom security.</li>
              <li> Integrated Customer’s Webhooks.</li>
              <li> Integrated Developer Portal with Azure AD for SSO.</li>
              <li> Installed and integrated multiple monitoring , Auditing tools with API management server and API services such as Azure Insights etc.</li>
              <li> Defining Automation test strategy using Postman.</li>
              <li> Major work on conversion of SOAP services to RESTful API's in APIGEE.</li>
            </ul>
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
            <li>VueJS</li>
            <li>NestJS</li>
            <li>TypeORM</li>
            <li>Typescript and Javascript</li>
            <li>HTML and CSS</li>
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
      
      <div id="education" className="row resumeparts">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
              <h3>University of Mumbai, Mumbai, India</h3>
              <p className="info">B.E. in Information Technology 
                <span>&bull;</span>
                <em className="date">May 2016</em>
              </p>
              <p style={{'marginBottom': 0}}> Project : <b>Access Control Mechanism Using Eye Veins Identification. </b></p>
              <ul>
                <li>The team had developed a MatLab software application for eye vein identification.</li>
                <li>It was used for access control and authorization as the accuracy of eye vein identification is more as compared to other biometric methods.</li>
              </ul>
        </div>
      </div>
   </section>
    );
  }
}

export default Resume;
