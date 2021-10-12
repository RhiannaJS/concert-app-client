import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ConcertCreate from "../concerts/ConcertCreate"

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

type PropsType = {
  clearToken: () => void,
  sessionToken: string | null,
  username: string | null | undefined,
}

// Stateless Component
class Navbar extends Component<PropsType, {}> {
  constructor(props: PropsType) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <>
        <Box
          sx={{ flexGrow: 1 }}>
          <AppBar
            className="Navbar"
            id="Appbar"
            position="fixed">
            <Toolbar>
              <Link
                to="/concerts/ConcertsGetAll">
                <Button
                  className="add_a_show"
                  variant="contained"
                  color="secondary">
                  All Shows
                </Button>
              </Link>
              <Link
                to="/concerts/ConcertDisplay">
                <Button
                  className="add_a_show"
                  variant="contained"
                  color="secondary">
                  My Shows
                </Button>
              </Link>
              <ConcertCreate
                sessionToken={this.props.sessionToken} />
              <Typography
                className="Navbar_text"
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                <h3>My Concert Experience</h3>
              </Typography>
              <Button
                id="logout"
                className="add_a_show"
                variant="contained"
                color="secondary"
                onClick={() => { this.props.clearToken() }}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    );
  }
}
export default Navbar