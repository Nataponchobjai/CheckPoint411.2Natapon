// import React from 'react';
// import { connect } from 'react-redux';
// import { Container, Chip } from '@mui/material';
// import { useParams } from 'react-router-dom'; // Import useParams

// const ListingDetail = (props) => {
//     const { idx } = useParams(); // Use useParams to get the id from the URL params

//     // Find the listing by id.
//     const listing = props.listings.find(listing => listing.idx === idx);

//     // รายละเอียดรายการ
//     return (
//         <Container maxWidth="sm" className="car-container">
//             <h2>{listing.name}</h2>
//             <b>{listing.address}</b>
//             <br /><br />
//             <b>{listing.hours}</b>
//             <p>{listing.description}</p>
//             {Object.keys(listing).map((key, idx) => (
//                 <Chip key={idx} label={`${key}: ${listing[key]}`} />
//             ))}
//         </Container>
//     );
// };

// const mapStateToProps = (state) => ({
//     listings: state.listings,
// });

// export default connect(mapStateToProps)(ListingDetail);
