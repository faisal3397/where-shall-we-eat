import React from 'react'
import './Home.css'
import { Button, Typography, makeStyles, CircularProgress } from '@material-ui/core'
import logo from '../../asset/logo3.png'

const useStyles = makeStyles({
  btn: {
    backgroundColor: '#03B3E4',
    color: 'white',
    width: '50%'
  } ,
  progress: {
    color: 'white'
  }
})

const Home = (props) => {
  const classes = useStyles()
  const { suggest, loading } = props

  return (
      <div className="home">
        <img id="logo" src={logo} alt="logo"/>
        <div id="title">
          <Typography variant="h3" gutterBottom>
            Where Shall We Eat?
          </Typography>
        </div>
        <Button variant="contained" className={classes.btn} onClick={suggest}>
            {loading ? <CircularProgress className={classes.progress}/> : 'Suggest'}
        </Button>
      </div>
  );
}

export default Home
