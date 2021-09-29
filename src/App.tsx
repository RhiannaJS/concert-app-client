import React from 'react';
import './App.css';
import Auth from "./auth/Auth"
import ConcertIndex from "./concerts/ConcertIndex"
// import {v4 as uuid} from "uuid";
import uuid from "uuid";
import {Route, Link, Switch, BrowserRouter as Router} from "react-router-dom";
import Admin from "./auth/Admin"

type StateType = {
  username: string,
  sessionToken: string | null,
  userRole: string,
  userId: string,
  concertId: string,
  // updateConcertId: ()=> void,
  updateActive: any,
  concertToUpdate: string

}

// type PropsType = {
//   // concertToUpdate: {},
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
      userRole: "",
      userId: "",
      // updateConcert: "",
      updateActive: false,
      concertId: "",
      concertToUpdate: ""
    }
    this.protectedViews = this.protectedViews.bind(this)
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

updateRole = (newUserRole: string) => {
  if(newUserRole !== null){
    this.setState({userRole: newUserRole})
    localStorage.setItem("userRole", "user")
    console.log("userRole", newUserRole)
}} 

clearToken = () => {
  localStorage.clear();
  this.setState({sessionToken: "", userRole: "user"});
}


// updateConcert = (updateConcert:any) =>{
//   this.state.concertToUpdate(updateConcert);
//   console.log(updateConcert)
// }

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
  return (
    
    this.state.sessionToken === localStorage.getItem("sessionToken") ? 
    
    
    (<ConcertIndex updateConcertId={this.updateConcertId} sessionToken={this.state.sessionToken} userRole={this.state.userRole} username={this.state.username}/>) : (
      
      <Auth /*sessionToken = {this.state.sessionToken}*/ userRole={this.state.userRole} username={this.state.username} updateSessionToken={this.updateSessionToken} updateUserRole={this.updateRole}/>)
      
      // (localStorage.getItem("userRole") === "user") ? (
      
        // : (<Admin />)

    
  )
  
    }
  render(){
  return (
    <div className="App">
    {this.protectedViews()}
    {/* <Auth sessionToken = {this.state.sessionToken} userRole={this.state.userRole} username={this.state.username} updateSessionToken={this.updateSessionToken} updateUserRole={this.updateRole} />
    <ConcertIndex sessionToken={this.state.sessionToken} userRole={this.state.userRole} username={this.state.username}/> */}
    </div>
  );
}
}


