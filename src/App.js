import React from 'react';
import './App.css';
import Home from './views/HomePage/Home.js'
import Result from './views/ResultPage/Result.js'
import 'typeface-roboto';
import {
  Route,
  withRouter
} from "react-router-dom";

const renderHome = () => {  
  return(
    <Home />
  )
}

const renderResult = () => {
  return(
    <Result />
  )
}

const App = () => {
  return (
      <div className="App">
        <div className="background-image"></div>
        <div className="content">
          <Route exact path="/" render={renderHome} />
          <Route exact path="/result" render={renderResult}/>
        </div>
      </div>
  );
}

export default withRouter(App);
