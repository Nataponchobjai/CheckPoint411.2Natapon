import React from 'react';
import { connect } from 'react-redux';
import { removeListing } from '../redux/actions';
import { Container, Chip } from '@mui/material'; // Make sure to import Chip
import { useParams } from 'react-router-dom'; // Import useParams

const Listing = (props) => {
    const { id } = useParams(); // Use useParams to get the id from the URL params

    // Find the listing by id.
    const listing = props.listings.find(listing => listing.id === id);

    

    return (
        <Container maxWidth="sm" className="car-container">
            <h2>{listing.Name}</h2>
            <b>{listing.Address}</b>
            <br /><br />
            <b>{listing.Hours}</b>
            <p>{listing.Description}</p>
    
            {Object.keys(listing).map((key, idx) => (
                <Chip key={idx} label={`${key}: ${listing[key]}`} />
            ))}
        </Container>
    );
};

const mapStateToProps = (state) => ({
    listings: state.listings,
});

const mapDispatchToProps = (dispatch) => ({
    removeListing: (id) => dispatch(removeListing(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
