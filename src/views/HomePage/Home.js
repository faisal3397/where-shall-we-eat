import React from 'react';
import './Home.css';
import { useHistory } from "react-router-dom";
import { Button, Typography, makeStyles } from '@material-ui/core';
import logo from '../../asset/logo3.png'

const useStyles = makeStyles({
  btn: {
    backgroundColor: '#03B3E4',
    color: 'white',
    width: '50%'
  } 
})

const fetchSuggestion = (pos) => {
  let latitude = pos.coords.latitude
  let longitude = pos.coords.longitude
  let uid = `${latitude},${longitude}`
  console.log(uid);
}

const Home = () => {
  const classes = useStyles()
  let history = useHistory()

  const suggest = () => {
    navigator.geolocation.getCurrentPosition(fetchSuggestion); // get the latitude and longitude then pass it to the function fetchSuggestion()
    history.push('/result')
  }

  return (
      <div className="home">
        <img id="logo" src={logo} alt="logo"/>
        <Typography className="title" variant="h3" gutterBottom>
          Where Shall We Eat?
        </Typography>
        <Button variant="contained" className={classes.btn} onClick={suggest}>
          Suggest
        </Button>
      </div>
  );
}

export default Home
