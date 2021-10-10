import React from 'react';
import './App.css';
import Auth from "./auth/Auth"
import ConcertIndex from "./concerts/ConcertIndex"
// import {v4 as uuid} from "uuid";
import uuid from "uuid";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Admin from "./auth/Admin"
import Navbar from "./home/Navbar"
import SwitchController from './site/SwitchController';

type concert ={
  id: string,
  bandName: string,
  openingAct: string,
  dateAttended: string,
  location: string,
  description: string,
  comment: string,
  comments: any
}

type Concerts = {
  id: string,
  bandName: string,
  openingAct: string,
  dateAttended: string,
  location: string,
  description: string,
  comment: string,
  comments: any,
}

// type PropsType ={
//   fetchConcerts: ()=> void, 
// }

type StateType = {
  handleClose: any,
  handleOpen: any,
  username: string | null,
  sessionToken: string | null,
  userRole: string,
  userId: string,
  concertId: string,
  postId: string,
  // updateConcertId: ()=> void,
  updateActive: any,
  concertToUpdate: string,
  id: string,
  bandName: string,
  openingAct: string,
  dateAttended: string,
  location: string,
  description: string,
  comment: string,
  comments: [],
  commentId: string,
  concertsList: Concerts[],
  concerts: [],
 
  concert: []


}

// type PropsType = {
//   
//   sessionToken: string | null,
// }

// type PropsType = {
//   updateSessionToken: (newToken: string) => void;
//   updateUserRole: (newUserRole: string) => void;
//   clearToken: (clearToken: null) => void;
//   fetchConcerts: ()=> void,
// }

export default class App extends React.Component<{}, StateType> {
 
  constructor(props: any) {
    super(props);
    this.state = {
      concert: [],
      handleClose: false,
      handleOpen: true,
      username: "",
      sessionToken: "",
      userRole: "user",
      userId: "",
      postId: "",
      // updateConcert: "",
      updateActive: false,
      concertId: "",
      concertToUpdate: "",
      commentId: "",
      id: "",
      bandName: "",
      openingAct: "",
      dateAttended: "",
      location: "",
      description: "",
      comment: "",
      comments: [],
      concerts: [],
      concertsList: []

    }
    this.protectedViews = this.protectedViews.bind(this)
  }

  componentDidUpdate() {
    console.log("Update")
    console.log(`User is user: ${localStorage.getItem("userRole")}`)
  }

  updateSessionToken = (newToken: string) => {
    localStorage.setItem("sessionToken", newToken);
    this.setState({ sessionToken: newToken });
    console.log("sessionToken", newToken)
  }

  updateUsername = (newUsername: string) => {
    localStorage.setItem("username", newUsername)
    this.setState({ username: newUsername });
    console.log("userName", newUsername)
  }

  updateUserRole = (newUserRole: string) => {
    if (newUserRole !== null) {
      this.setState({ userRole: newUserRole })
      localStorage.setItem("userRole", "user")
      console.log("userRole", newUserRole)
    }
  }

  updateCommentId = (newCommentId: string) => {
    this.setState({ commentId: newCommentId })
  }

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: "", userRole: "user" });
  }


  updateUserId = (newUserId: string) => {
    this.setState({ userId: newUserId });
    console.log(newUserId)
  }

  updateConcertId = (newConcertId: string) => {
    this.setState({ concertId: newConcertId })
  }

  updateOn = () => {
    this.state.updateActive(true)
  }

  updateOff = () => {
    this.state.updateActive(false)
  }

  handleOpen = () => {
    this.state.handleOpen(true)
  }

  handleClose = () => {
    this.state.handleClose(false)
  }


  protectedViews = () => {
    return (this.state.sessionToken === localStorage.getItem("sessionToken") ?

      // (<Navbar sessionToken={this.state.sessionToken} username={this.state.username}/>)

      (<ConcertIndex concertId={this.state.concertId} commentId={this.state.commentId} sessionToken={this.state.sessionToken} userRole={this.state.userRole} username={this.state.username} clearToken={this.clearToken}/>)
      :

      (<Auth /*sessionToken = {this.state.sessionToken} userRole={this.state.userRole} username={this.state.username} */ updateSessionToken={this.updateSessionToken} updateUserRole={this.updateUserRole} />))
  }




  componentDidMount() {
    console.log("Mount")
    if (localStorage.getItem("username")) {
      this.setState({ username: localStorage.getItem("username") })
    }
    if (localStorage.getItem("sessionToken")) {
      this.setState({ sessionToken: localStorage.getItem("sessionToken") })
    }
  }

  render() {
    const session = localStorage.getItem("sessionToken")
    return (
      <Router>
        <div className="App">
          {this.protectedViews()}
          <SwitchController
            // fetchConcerts={this.props.fetchConcerts}
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
            id={this.state.id}
            bandName={this.state.bandName}
            openingAct={this.state.openingAct}
            dateAttended={this.state.dateAttended}
            location={this.state.location}
            description={this.state.description}
            comment={this.state.comment}
            concerts={this.state.concerts}
            concertsList={this.state.concertsList}
            postId={this.state.postId}
            comments={this.state.comments}
            // fetchConcerts={this.props.fetchConcerts}
            // concert={this.state.concert.id}

          />

          {/* <Auth sessionToken = {this.state.sessionToken} userRole={this.state.userRole} username={this.state.username} updateSessionToken={this.updateSessionToken} updateUserRole={this.updateRole} />
    <ConcertIndex sessionToken={this.state.sessionToken} userRole={this.state.userRole} username={this.state.username}/> */}
        </div>
      </Router>

    );
  }
}


