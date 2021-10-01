import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ConcertIndex from '../concerts/ConcertIndex';
import SwitchController from '../site/SwitchController';


import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
// import Route from "react-router-dom";


type PropsType = {
    // clearToken: ()=> void,
    sessionToken: string | null,
    username: string | null | undefined,
    
    // clearToken: () => void,
}



class Navbar extends Component <PropsType, {}> {
    constructor(props: PropsType){
    super(props)
    this.state={
      
    }
    }
render(){
  return (
    <>
    <Box sx={{ flexGrow: 1, opacity: .5 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >

          

           
              <Link to="/concerts/ConcertCreate">Create a New Experience!</Link>
              <Link to="/concerts/ConcertEdit">Edit an Experience</Link>
              <Link to="/concerts/ConcertDisplay">My Experiences</Link>
            
            <MenuIcon/> 
            
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
    <h1>!!!!!!!!!!!!!!!!!!!!!!!</h1>
    {/* <ConcertIndex concertId={this.state.concertId} updateConcertId={this.updateConcertId} sessionToken={this.state.sessionToken} userRole={this.state.userRole} username={this.state.username} /> */}
    </>
  );
}
}
export default Navbar