import React from 'react';
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import cookie from 'cookie';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] === "true";
};

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
                        {checkAuth() && (
                        <TableCell>Delete</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.listings.map((listing, idx) => (
                        <TableRow key={listing.id}>
                            <TableCell component="th" scope="row">
                                <Link to={`/listing/${listing.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{listing.name}</Link>
                            </TableCell>
                            <TableCell>{listing.description}</TableCell>
                            <TableCell>{listing.hours}</TableCell>
                            <TableCell>{listing.address}</TableCell>
                            {checkAuth() && (
                                <TableCell>
                                    <DeleteIcon
                                        onClick={() => props.removeListing(idx)}
                                        style={{ color: 'red', cursor: 'pointer' }}
                                    />
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <br />
            {checkAuth() ? (
  <h1>Welcome! You can now add or delete listings. 😊😊😊</h1>
) : (
    <h1>Hey there! Please log in first to add or remove any listings. 😊</h1>
)}

        </Container>
    );
};

export default Listings;