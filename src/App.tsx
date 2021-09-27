import React from 'react';
import './App.css';
import Auth from "./auth/Auth"

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
  }

updateSessionToken = (newToken: string) => {
  localStorage.setItem("sessionToken", newToken);
  this.setState({sessionToken: newToken});
}

updateUsername = (newUsername: string) => {
  localStorage.getItem("sessionToken")
  this.setState({username: newUsername});
}

updateRole = (newUserRole: string) => {
  localStorage.getItem("sessionToken")
  this.setState({userRole: newUserRole})
}

clearToken = () => {
  localStorage.clear();
  this.setState({sessionToken: ""});
}

// protectedViews = () => {
  
// }

  render(){
  return (
    <div className="App">
    <Auth sessionToken = {this.state.sessionToken} userRole={this.state.userRole} username={this.state.username} updateSessionToken={this.updateSessionToken} updateUserRole={this.updateRole}/>
    </div>
  );
}
}


