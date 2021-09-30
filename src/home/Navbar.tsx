import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";

type PropsType = {
    clearToken: ()=> void,
    sessionToken: string | null,
    username: string | null | undefined,
}



class Navbar extends Component <PropsType, {}> {
    constructor(props: PropsType){
    super(props)
    this.state={}
    }
render(){
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
              <Link to="/concerts/ConcertCreate">Create a New Experience!</Link>
              <Link to="/cocerts/ConcertEdit">Edit an Experience</Link>
              <Link to="/concerts/ConcertDisplay">My Experiences</Link>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            My Concert Experience
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
}
export default Navbar;