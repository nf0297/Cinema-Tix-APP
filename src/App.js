import React, {Component} from 'react';
import './App.css';

import Homepage from './Page/Homepage';
import Moviepage from './Page/Moviepage';
import Upcomingpage from './Page/Upcomingpage';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Navmenu from './Component/Navmenu';
import Cinemapage from './Page/Cinemapage';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <Router>
        <Route exact path="/" component={Homepage}/>
        <Route path="/Header" component={Header}/>
        <Route path="/Footer" component={Footer}/>
        <Route path="/Nav" component={Navmenu}/>
        <Route path="/movie/:id/data" component={Moviepage}/>
        <Route path="/upcoming/:id/data" component={Upcomingpage}/>
        <Route path="/movie/cinema" component={Cinemapage}/>
      </Router>  
    )
  }
}

export default App;
