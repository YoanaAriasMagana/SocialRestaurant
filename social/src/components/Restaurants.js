import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


//styling for the map
const containerStyle = {
  width: '95%',
  height: '90vh',
  margin: '5rem auto',
  boxShadow:  '0 10px 10px 10px grey',
  borderRadius: '10px'
};

//centering the map on my location
const center = {
  lat: 33.7490,
  lng: -84.3880
};

function RestaurantsMap() {
  
  //pulling the map using my api key
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDv_yczwa6809aRbD9GVnYJoS5FQ8ABND0"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      > 
      </GoogleMap> 
  ) : 

  <>
  </>
  
}

export default React.memo(RestaurantsMap);