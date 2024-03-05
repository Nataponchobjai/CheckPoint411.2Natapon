import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import cookie from 'cookie';
import Listings from './containers/Listings'
import Listing from './containers/Listing'
import { useSelector } from 'react-redux'


import Login from './components/Login';

function checkAuth() {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  }

//   const ProtectedRoute = (props) => {
//     console.log(props)
//     const {component: Component, ...rest} = props;
  
//     return (
//       checkAuth() === true ? <Component {...rest}/> : <Navigate to="/login"/>
//     )
//    }
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
