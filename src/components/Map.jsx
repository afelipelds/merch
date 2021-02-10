import React from 'react'
import{ GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import pass from '../../pass';

const API_KEY = pass.googleMapsAPI;

const Map = ({data}) => {
  const containerStyle = {
    width: '100%',
    height: '50vh',
  }
  const center = {
    lat: data.lat, lng: data.lng,
  }
  
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={17}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
