import React from 'react'
import { AppBar, Toolbar, IconButton, 
  Typography
} from '@mui/material'
import { Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddCar from '../containers/AddListing'


const theme = createTheme({
    palette: {
      green: {
        main: '#3BB371',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
  });

const Navigation = () => {
    return (
        <ThemeProvider theme={theme}>

        <AppBar color="green" position="relative">
            <Toolbar>
                <IconButton color="inherit">
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }} color="white">
                    FakeCars.com
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                     <Typography color="white">   <Link  to="/">Listings </Link></Typography>
                    </li>
                    <li className="nav-list-item">
                     <Typography color="white">    <AddCar/> </Typography>
                    </li>
                    <li className="nav-list-item">
                        <Typography color="white"><Link to="/about">Login</Link></Typography>
                    </li>
                  
        
                </ul>
            </Toolbar>
        </AppBar>
        </ThemeProvider>

    )
}

export default Navigation
