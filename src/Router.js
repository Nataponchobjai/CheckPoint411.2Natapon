import React from 'react';
import { Routes, Route } from 'react-router';
import Listings from './containers/Listings'
import Listing from './containers/Listing'
import { useSelector } from 'react-redux'
import Login from './components/Login';




   const Router = () => {
    const listings = useSelector(state => state.listings);
    return (
        <Routes>
           
            <Route path="/login" element={<Login />} />
             <Route path="/" element={<Listings listings={listings} />} />
            <Route path="Listing/:id" element={<Listing listings={listings} />} />
        </Routes>
    );
};

export default Router;
