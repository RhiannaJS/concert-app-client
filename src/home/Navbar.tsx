import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ConcertIndex from '../concerts/ConcertIndex';
import ConcertCreate from "../concerts/ConcertCreate"
import ConcertsGetAll from '../concerts/ConcertsGetAll';
import SwitchController from '../site/SwitchController';


import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
// import Route from "react-router-dom";


type PropsType = {
    clearToken: ()=> void,
    sessionToken: string | null,
    username: string | null | undefined,
    // fetchConcerts: () => void,
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
    <Box sx={{ flexGrow: 1}}>
      <AppBar className="Navbar" id="Appbar" position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >

          

           
              {/* <Link to="/concerts/ConcertCreate"><Button variant="contained" color="secondary">Create a New Experience!</Button></Link> */}
              {/* <hr/> */}
              {/* <Link to="/concerts/CommentCreate"><Button variant="contained" color="secondary">Add Comment</Button></Link>
              <Link to="/concerts/ConcertEdit"><Button variant="contained" color="secondary">Edit an Experience
              </Button></Link> */}
              {/* <hr/> */}
              <Link to="/concerts/ConcertsGetAll"><Button className="add_a_show" variant="contained" color="secondary">All Shows</Button></Link>
              <Link to="/concerts/ConcertDisplay"><Button className="add_a_show"  variant="contained" color="secondary">My Shows</Button></Link>
              <ConcertCreate sessionToken={this.props.sessionToken}/>
              
            
            {/* <MenuIcon/>  */}
            
          </IconButton>
          <Typography 
            className="Navbar_text"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            My Concert Experience
          </Typography>
          <Button id="logout" className="add_a_show" variant="contained" color="secondary"  onClick={()=>{this.props.clearToken()}}>Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
   
    {/* <ConcertIndex concertId={this.state.concertId} updateConcertId={this.updateConcertId} sessionToken={this.state.sessionToken} userRole={this.state.userRole} username={this.state.username} /> */}
    </>
  );
}
}
export default Navbar