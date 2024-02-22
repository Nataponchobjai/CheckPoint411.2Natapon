import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'
import { Link } from 'react-router-dom'


const Listings = (props) => {


    return (
        <Container maxWidth="lg" className="car-container">
            <h4>Welcome, {props.user.username}</h4>
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {/* Change cars to props.cars and remove the cars.json import above */}
                {props.listings.map(listing => (
                    <TableRow  key={listing.id}>
                         <Link to={`/${listing.id}`}><TableCell  height = "50px" >{listing["Name"]}</TableCell></Link> 
                        <TableCell >{listing["Description"]}</TableCell>
                        <TableCell>{listing["Hours"]}</TableCell>
                        <TableCell>{listing["Address"]}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listings