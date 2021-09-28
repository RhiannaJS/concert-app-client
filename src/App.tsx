import React from 'react';
import './App.css';
import Auth from "./auth/Auth"
import ConcertIndex from "./concerts/ConcertIndex"

type StateType = {
  username: string,
  sessionToken: string | null,
  userRole: string,
  userId: string,
  concertToUpdate: any,
  updateActive: any,
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
      concertToUpdate: "",
      updateActive: false,
    }
    this.protectedViews = this.protectedViews.bind(this)
  }

// componentDidMount(){
//   fetchConcerts = ()=> {
//     fetch("http://localhost:3000/concerts", {
//       method: "GET",
//       headers: new Headers ({
//         "Content-Type": "application/json",
//         "Authorization": `Bearer${this.props.sessionToken}`
//       })
//     }).then((res)=> res.json())
//     .then((logData)=>{
//       this.setState.concertsList(logData)
//       console.log(logData)
//     })
//     }
// }

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


updateConcert = (concert:any) =>{
  this.state.concertToUpdate(concert);
  console.log(concert)
}

updateOn = () =>{
  this.state.updateActive(true)
}

updateOff = () =>{
  this.state.updateActive(false)
}

protectedViews = () => {
  return (this.state.sessionToken === localStorage.getItem("sessionToken") ? 

  <ConcertIndex concertToUpdate={this.state.concertToUpdate} sessionToken={this.state.sessionToken} userRole={this.state.userRole} username={this.state.username}/> : 

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


