import React, {useState} from "react";
import Register from "./Register";
import Login from "./Login";
import Button from '@material-ui/core/Button';
import Admin from "./Admin";
import ConcertIndex from "../concerts/ConcertIndex";

type PropsType = {
    updateSessionToken: (newToken: string) => void;
    updateUserRole: (newRole: string) => void;
}

type StateType = {
    displayLogin: boolean,
}


class Auth extends React.Component <PropsType, StateType> {

    constructor(props: PropsType){
        super(props);
        this.state = {
            displayLogin: false,
        }
    }

    rlToggle = (event: any) => {
        event.preventDefault()
        if(this.state.displayLogin === false) {
            return this.setState({
                displayLogin: true,
            })
        }
        if (this.state.displayLogin === true) {
            return this.setState({
                displayLogin: false,
            })
        }
    }

    render(){
        return(
           
            <div>
            <h1>Auth Component</h1>
            
            <div className="loginDiv">
                {this.state.displayLogin ? (
                    <Register updateSessionToken={this.props.updateSessionToken} updateUserRole={this.props.updateUserRole}/>)
                : ( <Login updateSessionToken={this.props.updateSessionToken} updateUserRole={this.props.updateUserRole}/> )}
            
            <br/>
            <Button id="Btn" variant="contained" color="secondary" onClick={(event)=>this.rlToggle(event)}>
            {this.state.displayLogin ? "Login" : "Create an Account"}</Button>
            </div>
            </div>
            
        )
    }
}

export default Auth;