import React from 'react';
import { Container } from '@mui/material';

const Listing = (props) => {
    const id = props.match.params.id;

    // Assuming `props.listings` is passed correctly and contains the necessary data,
    // this will find the listing by its ID.
    const listing = props.listings.find(c => c.id === id);

    // Ensure that `listing` is defined to avoid runtime errors.
    if (!listing) {
        // This is a simple way to handle a missing listing.
        // You might want to render something more informative.
        return <div>Listing not found</div>;
    }

    return (
        <Container maxWidth="sm" className="car-container">
            <h2>{listing.Name}</h2>
            <b>{listing.Address}</b>
            <br></br>
            <br></br>
            <b>{listing.Hours}</b>
            <p>{listing.Description}</p>
        </Container>
    );
}

export default Listing;
