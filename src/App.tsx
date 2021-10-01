import React from 'react';
import './App.css';
import Auth from "./auth/Auth"
import ConcertIndex from "./concerts/ConcertIndex"
// import {v4 as uuid} from "uuid";
import uuid from "uuid";
import {Route, Link, Switch, BrowserRouter as Router} from "react-router-dom";
import Admin from "./auth/Admin"
import Navbar from "./home/Navbar"
import SwitchController from './site/SwitchController';

type StateType = {
  username: string | null,
  sessionToken: string | null,
  userRole: string,
  userId: string,
  concertId: string,
  // updateConcertId: ()=> void,
  updateActive: any,
  concertToUpdate: string


}

// type PropsType = {
//   
//   sessionToken: string | null,
// }

// type PropsType = {
//   updateSessionToken: (newToken: string) => void;
//   updateUserRole: (newUserRole: string) => void;
//   clearToken: (clearToken: null) => void;
// }

export default class App extends React.Component <{}, StateType> {
  constructor(props: StateType){
    super(props); 
    this.state = {
      username: "",
      sessionToken: "",
      userRole: "user",
      userId: "",
      // updateConcert: "",
      updateActive: false,
      concertId: "",
      concertToUpdate: ""
      
    }
    this.protectedViews = this.protectedViews.bind(this)
  }

componentDidUpdate(){
  console.log("Update")
  console.log(`User is user: ${localStorage.getItem("userRole")}`)
}  

updateSessionToken = (newToken: string) => {
  localStorage.setItem("sessionToken", newToken);
  this.setState({sessionToken: newToken});
  console.log("sessionToken", newToken)
}

updateUsername = (newUsername: string) => {
  localStorage.setItem("username", newUsername)
  this.setState({username: newUsername});
  console.log("userName", newUsername)
}

updateUserRole = (newUserRole: string) => {
  if(newUserRole !== null){
    this.setState({userRole: newUserRole})
    localStorage.setItem("userRole", "user")
    console.log("userRole", newUserRole)
}} 

clearToken = () => {
  localStorage.clear();
  this.setState({sessionToken: "", userRole: "user"});
}


updateUserId = (newUserId: string) =>{
  this.setState({userId: newUserId});
  console.log(newUserId)
}

updateConcertId = (newConcertId: string) => {
  this.setState({ concertId: newConcertId})
}

updateOn = () =>{
  this.state.updateActive(true)
}

updateOff = () =>{
  this.state.updateActive(false)
}

protectedViews = () => {
  return (this.state.sessionToken === localStorage.getItem("sessionToken") ? 

// (<Navbar sessionToken={this.state.sessionToken} username={this.state.username}/>)
  
  (<ConcertIndex concertId={this.state.concertId} updateConcertId={this.updateConcertId} sessionToken={this.state.sessionToken} userRole={this.state.userRole} username={this.state.username} />) 
  :  
      
  (<Auth /*sessionToken = {this.state.sessionToken} userRole={this.state.userRole} username={this.state.username} */ updateSessionToken={this.updateSessionToken} updateUserRole={this.updateUserRole}/>)) 
}
  



componentDidMount(){
  console.log("Mount")
  if (localStorage.getItem("username")){
    this.setState({username: localStorage.getItem("username")})
  }
  if (localStorage.getItem("sessionToken")) {
    this.setState({sessionToken: localStorage.getItem("sessionToken")})
  }
}

  render(){
    const session = localStorage.getItem("sessionToken")
  return (
      <Router>
    <div className="App">
          <SwitchController 
            updateSessionToken={this.updateSessionToken}
            updateUsername={this.updateUsername}
            updateUserRole={this.updateUserRole}
            sessionToken={this.state.sessionToken}
            username={this.state.username}
            userRole={this.state.userRole}
            protectedViews={this.protectedViews}
            clearToken={this.clearToken}
            updateConcertId={this.updateConcertId}
            updateUserId={this.updateUserId}
            concertId={this.state.concertId}
            userId={this.state.userId}
            updateOn={this.state.updateActive}
            updateOff={this.state.updateActive}
          />
    {this.protectedViews()}
    {/* <Auth sessionToken = {this.state.sessionToken} userRole={this.state.userRole} username={this.state.username} updateSessionToken={this.updateSessionToken} updateUserRole={this.updateRole} />
    <ConcertIndex sessionToken={this.state.sessionToken} userRole={this.state.userRole} username={this.state.username}/> */}
    </div>
    </Router>
  
  );
}
}


