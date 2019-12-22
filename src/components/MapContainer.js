import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '80%'
};

const MapContainer = (props) => {
  const {lat, long}= props
  return (
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: parseFloat(lat),
         lng: parseFloat(long)
        }}
      >
        <Marker position={{ lat: parseFloat(lat), lng: parseFloat(long)}} />
      </Map>
  )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)
