import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

function Map() {
    
    const customIcon = {
        url: 'https://static.vecteezy.com/system/resources/previews/008/506/404/original/contact-person-red-icon-free-png.png', 
        scaledSize: new window.google.maps.Size(20, 20), 
    };

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 30.267153, lng: -97.743057 }}
        >
            <Marker
                position={{ lat: 30.267153, lng: -97.743057 }}
                icon={customIcon}
                animation={window.google.maps.Animation.DROP} 
            />
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Maps() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ width: "700px", height: "700px" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    );
}
