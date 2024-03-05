import React from 'react';
import { connect } from 'react-redux';
import { Container } from '@mui/material'; 
import { useParams } from 'react-router-dom';
import Map from './Maps'
import { Marker } from 'react-google-maps';

const Listing = (props) => {
    const { id } = useParams(); 

    
    const listing = props.listings.find(listing => listing.id === parseInt(id)); 

   

    return (
        <Container maxWidth="sm" className="car-container">
            <h1>{listing.name}</h1> 
            <b>{listing.address}</b> 
            <br /><br />
            <b>{listing.hours}</b> 
            <p>{listing.description}</p> 
    
            
             <Map zoom={12} center={{lat: 53.54992, lng: 10.00678}}>
      <Marker position={{lat: 53.54992, lng: 10.00678}} />
    </Map>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    listings: state.listings,
});

export default connect(mapStateToProps)(Listing);
