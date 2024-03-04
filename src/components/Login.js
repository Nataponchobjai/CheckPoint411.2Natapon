import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  };

  const login = (e) => {
    e.preventDefault();
    // Set cookie here: loggedIn = true and max-age = 60 seconds (one minute)
    document.cookie = "loggedIn=true; max-age=60; path=/";
    navigate("/");
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            style={{ backgroundColor: 'gray', color: 'white' }} 
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
