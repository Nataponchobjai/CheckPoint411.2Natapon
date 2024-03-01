import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
// import MenuIcon from "@mui/icons-material/Menu";

import AddCar from '../containers/AddListing';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="relative" sx={{ backgroundColor: '#3BB371' }}> {/* แก้ไขสีที่นี่ */}
      <Toolbar>
        <IconButton color="inherit">
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Listings</Link>
          </li>
          <li className="nav-list-item">
                         <AddCar/> 
                    </li>
         
          <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              navigate("/login");
            }}
          >
            Logout
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
