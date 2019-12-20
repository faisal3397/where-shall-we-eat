import React from 'react';
import './Home.css';
import Typography from '@material-ui/core/Typography';
import logo from '../../asset/logo3.png'

function home() {
  return (
      <div className="home">
        <img id="logo" src={logo} alt="logo"/>
        <Typography className="title" variant="h3" gutterBottom>
          Where Shall We Eat?
        </Typography>
      </div>
  );
}

export default home
