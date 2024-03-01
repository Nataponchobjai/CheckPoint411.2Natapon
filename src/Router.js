import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import cookie from 'cookie';
import Listings from './containers/Listings'
import Listing from './containers/Listing'
import About from './components/About';

import Login from './components/Login';

// checkAuth function
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies.loggedIn && cookies.loggedIn === 'true';
};

// ProtectedRoute component
const ProtectedRoute = ({ component: Component, ...rest }) => {
    return checkAuth() ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute component={Listings} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<ProtectedRoute component={About} />} />
            <Route path="/:id" element={<ProtectedRoute component={Listing} />} />
        </Routes>
    );
};

export default Router;
