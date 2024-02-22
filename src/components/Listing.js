import React from 'react'
import { Container, } from '@mui/material';
// import cars from '../cars.json' // remove this

const Listing = (props) => {
    const id = props.match.params.id

    {/* Change cars to props.cars and remove the cars.json import above */}
    const listing = props.listings.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
                <h2>{listing.Name}</h2>
                <b>{listing.Address}</b>
                <br></br>
                <br></br>
                <b>{listing.Hours}</b>
                <p>{listing.Description}</p>
        </Container>
    )
}

export default Listing