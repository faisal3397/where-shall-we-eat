import React, {useEffect} from 'react';
import { Button, makeStyles, Typography, CircularProgress } from '@material-ui/core';
import MapContainer from '../../components/MapContainer.js'
import './Result.css'
import {useHistory} from "react-router-dom";
const useStyles = makeStyles({
  btn: {
    backgroundColor: '#03B3E4',
    color: 'white',
    width: '50%',
    '&:hover': {
       background: "#03B3E4",
    },
  },
  progress: {
    color: 'white'
  }
})


const Result = (props) => {
  const classes = useStyles()
  let history = useHistory()
  const {data, suggest, loading} = props

  useEffect(() => {
    if(Object.entries(data).length === 0 && data.constructor === Object){
     console.log('I am here');
     history.push('/')
    }
  },[data, history])

  return (
      <div className="result-container">
        <div className="result-data">
            <Typography className="name" variant="h4" gutterBottom>
                {data.name}
            </Typography>
            <Typography className="title" variant="h5" gutterBottom>
                {data.cat}
            </Typography>
        </div>
        <div id="map"> 
            <MapContainer lat={data.Ulon} long={data.Ulat}/>
        </div>

        <div id="suggest-btn">
            <Button variant="contained" className={classes.btn} onClick={suggest}>
            {loading ? <CircularProgress className={classes.progress}/> : 'Suggest another one'}
            </Button>
        </div>
      </div>
  );
}

export default Result
