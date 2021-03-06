import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import APIURL from "../helpers/environment"

type PropsType = {
    updateSessionToken: (newToken: string) => void;
    updateUserRole: (newUserRole: string) => void;
}

type StateType = {
    username: string;
    password: string;
    email: string;
    error: boolean
}

export default class Login extends React.Component<PropsType, StateType>{

    constructor(props: PropsType) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            error: false,
        }
    }

    // Login Fetch
    handleSubmit = (event: any) => {
        console.log("handlesSubmit hit")
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: "POST",
            body: JSON.stringify({ user: { username: this.state.username, password: this.state.password } }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.updateSessionToken(data.sessionToken)
            console.log(data)
        }).catch(err => console.log(err))
    }

    changeHandlerUsername(event: any) {
        this.setState({ username: event.target.value })
        console.log(this.state.username)
    }

    changeHandlerPassword(event: any) {
        this.setState({ password: event.target.value })
    }

    changeHandlerEmail(event: any) {
        this.setState({ email: event.target.value })
    }

    render() {
        return (
            <div>
                <h1>Welcome Back!</h1>
                <h3>Login and let's get this party started!</h3>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            className="tField"
                            value={this.state.username}
                            onChange={(event) => this.changeHandlerUsername(event)}
                            required
                            id="outlined-required"
                            label="username"
                            defaultValue="username"
                            helperText="Enter username"
                            color="error"
                            focused
                        />
                        <TextField
                            value={this.state.password}
                            onChange={(event) => this.changeHandlerPassword(event)}
                            required
                            id="outlined-requried"
                            label="Password"
                            type="password"
                            defaultValue="password"
                            helperText="Enter 5 character password"
                            color="error"
                            focused
                        />
                        <TextField
                            value={this.state.email}
                            onChange={(event) => this.changeHandlerEmail(event)}
                            required
                            id="outlined-number"
                            label="email"
                            type="email"
                            defaultValue="email@email.com"
                            helperText="Enter email Address"
                            color="error"
                            focused
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <Button
                        id="Btn"
                        variant="contained"
                        color="secondary"
                        onClick={(event) => this.handleSubmit(event)}>
                        Login
                    </Button>
                </Box>
            </div>
        )
    }
}


