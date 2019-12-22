import React, { useState } from 'react';
import './App.css';
import Home from './views/HomePage/Home.js'
import Result from './views/ResultPage/Result.js'
import axios from 'axios'
import 'typeface-roboto';
import {
  Route,
  withRouter,
  useHistory
} from "react-router-dom";


const App = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  let history = useHistory()

  const fetchSuggestion = (pos) => {
    let latitude = pos.coords.latitude
    let longitude = pos.coords.longitude
    axios.get(`https://wainnakel.com/api/v1/GenerateFS.php?uid=${latitude},${longitude}`)
    .then(res => {
      console.log('Response Data', res.data)
      setData(res.data)
      history.push('/result')
      setLoading(false)
    })
  }

  const suggest = () => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(fetchSuggestion); // get the latitude and longitude then pass it to the function fetchSuggestion()
  }


  const renderHome = () => {  
    return(
      <Home loading={loading} suggest={suggest} fetchSuggestion={fetchSuggestion}/>
    )
  }

  const renderResult = () => {
    return(
      <Result loading={loading} suggest={suggest} data={data} fetchSuggestion={fetchSuggestion}/>
    )
  }

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