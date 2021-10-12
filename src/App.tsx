import React from 'react';
import './App.css';
import Auth from "./auth/Auth"
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import SwitchController from './site/SwitchController';

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

type StateType = {
  handleClose: any,
  handleOpen: any,
  username: string | null,
  sessionToken: string | null,
  userRole: string,
  userId: string,
  concertId: string,
  postId: string,
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

export default class App extends React.Component<{}, StateType> {
 
  constructor(props: StateType) {
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
      concertId: "",
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

  componentDidMount() {
    console.log("Mount")
    if (localStorage.getItem("username")) {
      this.setState({ username: localStorage.getItem("username") })
    }
    if (localStorage.getItem("sessionToken")) {
      this.setState({ sessionToken: localStorage.getItem("sessionToken") })
    }
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

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: "", userRole: "user" });
  }

  handleOpen = () => {
    this.state.handleOpen(true)
  }

  handleClose = () => {
    this.state.handleClose(false)
  }

  protectedViews = () => {
    return (this.state.sessionToken === localStorage.getItem("sessionToken") ?

      (<div> <SwitchController
        updateSessionToken={this.updateSessionToken}
        updateUsername={this.updateUsername}
        updateUserRole={this.updateUserRole}
        sessionToken={this.state.sessionToken}
        username={this.state.username}
        userRole={this.state.userRole}
        protectedViews={this.protectedViews}
        clearToken={this.clearToken}
        concertId={this.state.concertId}
        userId={this.state.userId}
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
        allConcerts={this.state.concerts}
        commentId={this.state.commentId}
      />

      </div>)

      :

      (<Auth updateSessionToken={this.updateSessionToken} updateUserRole={this.updateUserRole} />))
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.protectedViews()}
        </div>
      </Router>

    );
  }
}


