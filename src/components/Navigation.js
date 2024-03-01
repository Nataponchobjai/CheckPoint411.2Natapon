import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import cookie from "cookie";


import AddListing from '../containers/AddListing';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="relative" sx={{ backgroundColor: '#3BB371' }}>
      <Toolbar>
        {/* Uncomment if using MenuIcon */}
        {/* <IconButton color="inherit">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Listings</Link>
          </li>
          {/* Ensure AddListing component is correctly imported and functional */}
          <li className="nav-list-item">
            <AddListing /> 
          </li>
          {/* Logout functionality */}
          <li className="nav-list-item" onClick={() => {
            document.cookie = cookie.serialize("loggedIn", null, { maxAge: 0 });
            navigate("/login");
          }}>
            Logout
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
