import React, {useState} from "react";
import Register from "./Register";
import Login from "./Login";
import Admin from "./Admin";
import ConcertIndex from "../concerts/ConcertIndex";

type PropsType = {
    updateSessionToken: (newToken: string) => void;
    updateUserRole: (newRole: string) => void;
    sessionToken: string | null;
    userRole: string;
    username: string;

}


class Auth extends React.Component <PropsType, {}> {

    constructor(props: PropsType){
        super(props);
        this.state = {
            sessionToken: "",
            userRole: "",
            username: "",
            // updateSessionToken: "",
            // upddateUserRole: "",
        }
    }

    render(){
        return(
           
            <div>
            <h1>Auth Component</h1>
            
            <div className="loginDiv">
            {/* <Register updateSessionToken={this.props.updateSessionToken} updateUserRole={this.props.updateUserRole}/> */}

            {/* <Login updateSessionToken={this.props.updateSessionToken} updateUserRole={this.props.updateUserRole}/> */}

            {Login ? <Login sessionToken={this.props.sessionToken} updateUserRole={this.props.updateUserRole} updateSessionToken={this.props.updateSessionToken}/>  :  

            <Register updateUserRole={this.props.updateUserRole} updateSessionToken={this.props.updateSessionToken}/>}
            </div>
            {/* <ConcertIndex sessionToken={this.props.sessionToken} userRole={this.props.userRole} username={this.props.username} /> */}
            </div>
            
        )
    }
}

export default Auth;