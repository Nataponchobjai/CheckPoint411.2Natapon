import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import cookie from "cookie";


import AddListing from '../containers/AddListing';

const Navigation = () => {
  const navigate = useNavigate();

  const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] === "true"
  }
  

  return (
    <AppBar position="relative" sx={{ backgroundColor: '#3BB371' }}>
      <Toolbar>
       
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Listings</Link>
          </li>
          {checkAuth() === true && (
          <li className="nav-list-item">
            <AddListing /> 
          </li>
           )}  
           {checkAuth() ? (
    <li className="nav-list-item" onClick={() => {
        document.cookie = cookie.serialize("loggedIn", null, { maxAge: 0 });
        navigate("/login");
    }}>
        Logout
    </li>
) : (
    <li className="nav-list-item">
        <Link to="/login">Login</Link>
    </li>
)}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
