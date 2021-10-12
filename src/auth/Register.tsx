import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import APIURL from "../helpers/environment";

type StateType = {
    username: string,
    email: string,
    password: string,
}

type PropsType = {
    updateSessionToken: (newToken: string) => void;
    updateUserRole: (newUserRole: string) => void;
}


class Register extends React.Component <PropsType, StateType> {
    constructor(props: PropsType){
        super(props)
        this.state={
            username: "",
            email: "",
            password: "",
        }

    }
    // User Register Fetch
        // componentDidUpdate()?
        handleSubmit = (event: any) => {
            event.preventDefault();
            fetch(`${APIURL}/user/register`, {
                method: "POST",
                body: JSON.stringify({user: {username: this.state.username, email: this.state.email, password: this.state.password}}),
                headers: new Headers ({
                    "Content-Type" : "application/json"
                })
            }) .then(
                (response) => response.json()
            ) .then((data) => {
                this.props.updateSessionToken(data.sessionToken)
            }).catch (err=> console.log(err))
        }

        changeHandlerUsername(event: any){
            this.setState({username: event.target.value})
        }

        changeHandlerPassword(event: any){
            this.setState({password: event.target.value})
        }

        changeHandlerEmail(event:any){
            this.setState({email: event.target.value})
        }

    // Register Form and button
    render(){
        return(
            <div>
                <h1>Welcome to My Concert Experience!</h1>
                <h3>Please create an account</h3>
                <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField value={this.state.username} onChange={(event)=>this.changeHandlerUsername(event)}
          required
          id="outlined-required"
          label="username"
          defaultValue="username"
          helperText="Create your username"
        />
      
        <TextField value={this.state.password} onChange={(event)=>this.changeHandlerPassword(event)}
          required
          id="outlined-requried"
          label="Password"
          type="password"
          defaultValue="password"
          helperText="Create a 5 character password"
        />
        
        <TextField value={this.state.email} onChange={(event)=>this.changeHandlerEmail(event)}
          id="outlined-number"
          label="email"
          type="email"
          defaultValue="email@email.com"
          helperText="Enter email Address"
          InputLabelProps={{
            shrink: true,
          }}
        />
            </div>
            </Box>
            <Button variant="contained" color="primary" onClick={(event)=>this.handleSubmit(event)}>Register</Button>
            </div>
        )
        }
    }


export default Register;