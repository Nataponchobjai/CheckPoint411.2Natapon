import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'

const Listings = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
            <h4>Welcome, {props.user.username}</h4>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listings.map((listing, idx) => (
                    <TableRow key={listing.id}>
                        <TableCell height="50px">
                     <Link to={`/${listing.id}`}>{listing["Name"]}</Link>
                        </TableCell>
                        <TableCell>{listing["Description"]}</TableCell>
                        <TableCell>{listing["Hours"]}</TableCell>
                        <TableCell>{listing["Address"]}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                onClick={() => props.removeListing(idx)}
                                style={{ color: 'red', cursor: 'pointer' }}
                            />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listings
