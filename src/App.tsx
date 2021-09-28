import React from 'react';
import './App.css';
import Auth from "./auth/Auth"
import ConcertIndex from "./concerts/ConcertIndex"

type StateType = {
  username: string,
  sessionToken: string | null,
  userRole: string,
  userId: string
}

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
    }
    // this.protectedViews = this.protectedViews.bind(this)
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
    localStorage.setItem("userRole", "false")
    console.log("userRole", newUserRole)
}}

clearToken = () => {
  localStorage.clear();
  this.setState({sessionToken: "", userRole: "false"});
}

protectedViews = () => {
  return (this.state.sessionToken === localStorage.getItem("sessionToken") ? 

  <ConcertIndex sessionToken={this.state.sessionToken} userRole={this.state.userRole} username={this.state.username}/> : 

  <Auth sessionToken = {this.state.sessionToken} userRole={this.state.userRole} username={this.state.username} updateSessionToken={this.updateSessionToken} updateUserRole={this.updateRole}/>)

  //   localStorage.getItem("userRole") === "true" ? (

  //   )
  // )
  
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


