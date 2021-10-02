import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "../auth/Admin";
import Auth from "../auth/Auth";
import ConcertCreate from "../concerts/ConcertCreate";
import ConcertDisplay from "../concerts/ConcertDisplay";
import ConcertIndex from "../concerts/ConcertIndex";
import ConcertTable from "../concerts/ConcertTable";
import ConcertEdit from "../concerts/ConcertEdit";
import CommentCreate from "../concerts/CommentCreate";
import CommentEdit from "../concerts/CommentEdit";
import Navbar from "../home/Navbar";

type Concerts = {
    id: string,
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
}


type ControllerProps = {
    updateSessionToken: (newToken: string) => void,
    updateUserRole: (newUserRole: string) => void,
    updateUsername: (newUsername: string) => void,
    updateUserId: (newUseId: string) => void,
    protectedViews: () => void,
    clearToken: () => void,
    updateConcertId: (newConcertId: string) => void,
    updateOn?: () => void,
    updateOff?: () => void,
    sessionToken: string | null,
    username: string | null | undefined,
    userRole: string,
    concertId: string,
    userId: string,
    bandName: string,
    id: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
    concerts: [],
    concertsList: Concerts[]

};

const SwitchController: FC<ControllerProps> = (props) => {
    console.log("switchController:", props.sessionToken);

    return (
        <div className="VisualDiv">
            <div className="routes">
                <Switch>
                    <Route exact path="/home/Navbar">
                        <Navbar sessionToken={props.sessionToken} username={props.username} />
                    </Route>
                    <Route exact path="/auth">
                        <Auth updateSessionToken={props.updateSessionToken} updateUserRole={props.updateUserRole} />
                    </Route>
                    <Route exact path="/concerts/ConcertCreate">
                        <ConcertCreate sessionToken={props.sessionToken} />
                    </Route>
                    <Route exact path="/concerts/ConcertEdit">
                        <ConcertEdit sessionToken={props.sessionToken} id={props.concertId}/>
                    </Route>
                    <Route exact path="/concerts/CommentCreate">
                        <CommentCreate sessionToken={props.sessionToken} concertId={props.concertId} bandName={props.bandName} id={props.id} openingAct={props.openingAct} dateAttended={props.dateAttended} location={props.location} description={props.description} comment={props.comment} concertsList={props.concertsList}/>
                    </Route>
                    {/* <Route exact path="/concerts/CommentEdit">
                        <CommentEdit sessionToken={props.sessionToken} concertId={props.concertId} comment={props.comment}  bandName={props.bandName} id={props.id} openingAct={props.openingAct} dateAttended={props.dateAttended} location={props.location} description={props.description} concertsList={props.concertsList} />
                    </Route> */}
                    <Route exact path="/concerts/ConcertDisplay">
                        <ConcertDisplay sessionToken={props.sessionToken} concertId={props.concertId} updateConcertId={props.updateConcertId}/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default SwitchController;
