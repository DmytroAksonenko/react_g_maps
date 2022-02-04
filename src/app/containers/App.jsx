import React from "react";

import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
  Polyline
} from "react-google-maps";

const MapWrapped = withScriptjs(withGoogleMap(Map));

function Map(props) {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{
        lat: 50.44,
        lng: 30.51,
      }}
    >
      {props.isClicked && <Marker
        position={{
          lat: props.latitude,
          lng: props.longitude,
        }}
      />}
      <Polyline
        strokeColor={"#000000"}
        strokeOpacity={1.0}
        strokeWeight={3}
        path={[
          {lat: 50.00, lng: 30.50},
          {lat: 51.00, lng: 30.50}
        ]}
      />
      <Polyline
        strokeColor={"#000000"}
        strokeOpacity={1.0}
        strokeWeight={3}
        path={[
          {lat: 50.00, lng: 30.50},
          {lat: 51.00, lng: 30.50}
        ]}
      />
    </GoogleMap>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 50.44,
      longitude: 30.51,
      isClicked: true
    }
  }

  render() {
    return (
      <div style={{width: "98vw", height: "98vh"}}>
        <MapWrapped
          googleMapURL={
            `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,
            drawing,places`
          }
          loadingElement={<div style={{height: `100%`}}/>}
          containerElement={<div style={{height: `100%`}}/>}
          mapElement={<div style={{height: `100%`}}/>}
          isClicked={this.state.isClicked}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
      </div>
    );
  }
}

export default App;
