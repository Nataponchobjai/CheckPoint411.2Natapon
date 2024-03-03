import React  from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "@mui/icons-material";





function Map() {
    return (
    <GoogleMap 
    defaultZoom={10} 
    defaultCenter= {{ lat: 30.267153, lng: -97.743057 }} 
    />
    );
}

const WarappedMap =  withScriptjs(withGoogleMap(Map));


export default function Maps() {
    return (
    <div style={{width: '100vw', height: '100vh'}}>
        <WarappedMap googleMapURL= {`googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`} 
        loadingsElement={<div style= {{height: "40%"}} />}
        containerElement={<div style= {{height: "40%"}} />}
        mapElement={<div style= {{height: "40%"}} />}
        />
        </div>
     );
}