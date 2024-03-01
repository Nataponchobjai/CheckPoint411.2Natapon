import React from 'react';
import { connect } from 'react-redux';
import { removeListing } from '../redux/actions'; // Adjust the path as necessary
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';

const Listing = ({ listings, removeListing }) => {
    const { id } = useParams(); // Correctly using useParams for React Router v6

    // Find the listing by id. Ensure id types match (string to string or number to number).
    const listing = listings.find(c => c.id.toString() === id);

    if (!listing) {
        return <div>Listing not found</div>; // Improved error handling can be implemented here.
    }

    return (
        <Container maxWidth="sm" className="car-container">
            <h2>{listing.Name}</h2>
            <b>{listing.Address}</b>
            <br /><br />
            <b>{listing.Hours}</b>
            <p>{listing.Description}</p>
        </Container>
    );
};

// Assuming your Redux state structure has `listings` at the top level
const mapStateToProps = (state) => ({
    listings: state.listings,
});

const mapDispatchToProps = (dispatch) => ({
    removeListing: (id) => dispatch(removeListing(id)),
});

// Correctly connect the `Listing` component, not `Listings`
export default connect(mapStateToProps, mapDispatchToProps)(Listing);
