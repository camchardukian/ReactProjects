/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Components/Home/Home';
import Inside from './Components/Inside/Inside';
import DraggedInside from './Components/DraggedInside/DraggedInside';
import LeftAlone from './Components/LeftAlone/LeftAlone';
import DoorSlam from './Components/DoorSlam/DoorSlam';
import Explore from './Components/Explore/Explore';
import Continue from './Components/Continue/Continue';
import Thriller from './Components/Thriller/Thriller';
import Death from './Components/Death/Death';
import Celebrate from './Components/Celebrate/Celebrate';
class App extends Component {
  render() {
  return (
    <Router>
      <Route path="/" exact strict component={Home}/>
      <Route path="/inside" exact strict component={Inside}/>
      <Route path="/dragged-inside" exact strict component={DraggedInside}/>
      <Route path="/left-alone" exact strict component={LeftAlone}/>
      <Route path="/escape-the-house" exact strict component={DoorSlam}/>
      <Route path="/explore" exact strict component={Explore}/>
      <Route path="/continue" exact strict component={Continue}/>
      <Route path="/thriller" exact strict component={Thriller}/>
      <Route path="/death" exact strict component={Death}/>
      <Route path="/celebrate" exact strict component={Celebrate}/>
    </Router>
  );
}
}

export default App;
