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
            <p>
              I am a Full Stack Software Developer based in Kitchener, Ontario, with over 5 years of experience building scalable web and mobile applications. My expertise lies in the React ecosystem (React, React Native) and robust backend architectures using NestJS and TypeORM.
              <br/><br/>Most recently, I’ve focused on developing complex property management systems and contributing to high-impact open-source projects like Mattermost, where I’ve help with UI redesigns and improved performance. I enjoy bridging the gap between elegant frontend design and efficient database management.
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
