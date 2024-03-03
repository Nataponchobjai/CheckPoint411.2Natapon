import React from 'react';
import { connect } from 'react-redux';
import { Container, Chip } from '@mui/material'; // Import Container and Chip from '@mui/material'
import { useParams } from 'react-router-dom';

const Listing = (props) => {
    const { id } = useParams(); // Get the id from the URL params

    // Find the listing by id.
    const listing = props.listings.find(listing => listing.id === parseInt(id)); // Parse id to integer for comparison

    if (!listing) {
        return <div>Listing not found</div>; // Handle case when listing is not found
    }

    return (
        <Container maxWidth="sm" className="car-container">
            <h1>{listing.name}</h1> {/* Change to listing.name */}
            <b>{listing.address}</b> {/* Change to listing.address */}
            <br /><br />
            <b>{listing.hours}</b> {/* Change to listing.hours */}
            <p>{listing.description}</p> {/* Change to listing.description */}
    
            {/* Display other properties using Chip
            {Object.keys(listing).map((key, idx) => (
                <Chip key={idx} label={`${key}: ${listing[key]}`} />
            ))} */}
        </Container>
    );
};

const mapStateToProps = (state) => ({
    listings: state.listings,
});

export default connect(mapStateToProps)(Listing);
