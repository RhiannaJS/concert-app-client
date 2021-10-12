import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "../auth/Auth";
import ConcertsGetAll from "../concerts/ConcertsGetAll";
import ConcertIndex from "../concerts/ConcertIndex";
import Navbar from "../home/Navbar";

export type Concerts = {
    id: string,
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
    comments: any
}

type ControllerProps = {
    updateSessionToken: (newToken: string) => void,
    updateUserRole: (newUserRole: string) => void,
    updateUsername: (newUsername: string) => void,
    protectedViews: any,
    clearToken: () => void,
    updateOn?: () => void,
    updateOff?: () => void,
    sessionToken: string | null,
    username: any,
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
    postId: string,
    commentId: string,
    concerts: Concerts[],
    concertsList: Concerts[],
    comments: [],
    allConcerts: Concerts[],
};

// Routes
const SwitchController: FC<ControllerProps> = (props) => {
    console.log("switchController:", props.sessionToken);
    return (
        <div
            className="VisualDiv">
            <div
                className="routes">
                <Route
                    path="/">
                    <Navbar
                        sessionToken={props.sessionToken}
                        username={props.username}
                        clearToken={props.clearToken} />
                </Route>
                <Switch>
                    <Route
                        exact path="/concerts/ConcertDisplay">
                        <ConcertIndex
                            concertId={props.concertId}
                            commentId={props.commentId}
                            sessionToken={props.sessionToken}
                            userRole={props.userRole}
                            username={props.username}
                            clearToken={props.clearToken} />
                    </Route>
                    <Route
                        exact path="/auth">
                        <Auth
                            updateSessionToken={props.updateSessionToken}
                            updateUserRole={props.updateUserRole} />
                    </Route>
                    <Route
                        exact path="/concerts/ConcertsGetAll">
                        <ConcertsGetAll
                            sessionToken={props.sessionToken}
                            allConcerts={props.concerts}
                            concerts={props.concerts}
                            bandName={props.bandName}
                            id={props.id}
                            openingAct={props.openingAct}
                            dateAttended={props.dateAttended}
                            location={props.location}
                            description={props.description}
                            comment={props.comment}
                            comments={props.comments}
                            concertId={props.concertId} />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default SwitchController;
