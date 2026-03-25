import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);

    ReactGA.initialize('UA-174226075-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Resume/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
