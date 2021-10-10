import React from "react";
import ConcertEdit from "./ConcertEdit";
import CommentCreate from "./CommentCreate";
import ConcertComments from "../concerts/ConcertComments"
import CommentEdit from "../concerts/CommentEdit"

import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@material-ui/core"
import { Link } from "react-router-dom";

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

type PropsType = {
    com: any,
    concerts?: Concerts[],
    sessionToken: string | null,
    commentId: string,
    concertId: string,
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
    postId: string,
    comments: any,
    fetchConcerts: () => void,
   
}

type StateType = {
    concerts: []
}


// 

// .map in return
class ConcertDisplay extends React.Component<PropsType, StateType> {
    fetchConcerts(): ((value: any) => any) | null | undefined {
        throw new Error("Method not implemented.");
    }
    constructor(props: PropsType) {
        super(props)
        this.state = {
            concerts: []
           


        }
    }

    deleteHandleSubmit = (concert: any) => {
        console.log("delete handleSubmit")
        // event.preventDefault()
        fetch(`http://localhost:4000/concerts/delete/${concert.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            })
        })
            .then((res) => res.json())
            .then((results) => { this.setState({ concerts: results.concerts }) })
        this.props.fetchConcerts()
        // {fetchConcerts()}
    }




    concertMap = () => {
        return this.props.concerts?.map((concerts: Concerts, index) => {
            return (
                
                   
                    <TableRow>
                        <TableCell component="th" scope="row">{concerts.bandName}</TableCell>
                        {/* {concerts.id} */}
                        {/* <TableCell>{concerts.bandName}</TableCell> */}
                        <TableCell align="right">{concerts.openingAct}</TableCell>
                        <TableCell align="right">{concerts.dateAttended}</TableCell>
                        <TableCell align="right">{concerts.location}</TableCell>
                        <TableCell align="right">{concerts.description}</TableCell>
                        <TableCell align="right">{concerts.comment}</TableCell>
                        {/* <TableCell>{concerts.comments}</TableCell> */}
                        {/* <TableCell>{concerts.comments}</TableCell> */}

                        {/* <TableCell><Button variant="contained" color="secondary" onClick={(console.log(concerts.id)}>{concerts.id}</Button></TableCell> */}
                        <TableCell><Button id="Btn" variant="contained" color="secondary" onClick={(event) => this.deleteHandleSubmit(concerts)}>Delete Show</Button></TableCell>
                        {/* <TableCell><Button variant="contained" color="primary">Edit</Button></TableCell> */}
                        <TableCell><ConcertEdit sessionToken={this.props.sessionToken} id={concerts.id} concertId={this.props.concertId} bandName={this.props.bandName} concert={concerts} /></TableCell>
                        <TableCell><ConcertComments concert={concerts}  sessionToken={this.props.sessionToken} commentId={this.props.commentId} fetchConcerts={this.props.fetchConcerts}/></TableCell>
                        <TableCell><CommentCreate sessionToken={this.props.sessionToken} concertId={this.props.concertId} bandName={concerts.bandName} id={concerts.id} openingAct={this.props.openingAct} dateAttended={this.props.dateAttended} location={this.props.location} description={this.props.description} comment={this.props.comment} postId={this.props.postId} /></TableCell>
                        {/* <TableCell></TableCell> */}
                        {/* {fetchConcerts()} */}
                        {/* <TableCell>{this.props.concerts.bandName}</TableCell> */}
                        {/* <Link to="/ConcertComments">
                        <Button type="submit" variant="contained" color="secondary" 
                         id="Btn1"
                            onClick={(e) => { this.commentsMap() }} 
                        >Con Com(display)</Button>
                    </Link> */}
                    </TableRow>
                 
            )
        })
    }
  



    render() {
        return (
            <div>
                <h4></h4>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell className="tField"> Headliner</TableCell>
                            <TableCell className="tField" align="right">Opening Act</TableCell>
                            <TableCell className="tField" align="right">Date of the show</TableCell>
                            <TableCell className="tField" align="right">Location</TableCell>
                            <TableCell className="tField" align="right">Description</TableCell>
                            <TableCell className="tField" align="right">Tell us about the show!</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.concertMap()}
                    </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default ConcertDisplay;

