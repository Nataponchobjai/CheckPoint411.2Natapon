import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import cookie from 'cookie';
import Listings from './containers/Listings'
import Listing from './containers/Listing'


import Login from './components/Login';

// checkAuth function
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies.loggedIn && cookies.loggedIn === 'true';
};

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
    return checkAuth() ? children : <Navigate to="/login" replace />;
};

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute><Listings /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            
            <Route path="Listing/:id" element={<ProtectedRoute><Listing /></ProtectedRoute>} />
        </Routes>
    );
};

export default Router;
