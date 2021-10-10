import React from "react";
import ConcertEdit from "./ConcertEdit";
import CommentCreate from "./CommentCreate";
import ConcertComments from "../concerts/ConcertComments"


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
    concertId: string,
    commentId: string,
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
    comments: any,
    fetchConcerts: () => void,
   
}

type StateType = {
    concerts: []
}

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
                        {/* {concerts.id} */}
                        <TableCell component="th" scope="row">{concerts.bandName}</TableCell>
                        <TableCell align="right">{concerts.openingAct}</TableCell>
                        <TableCell align="right">{concerts.dateAttended}</TableCell>
                        <TableCell align="right">{concerts.location}</TableCell>
                        <TableCell align="right">{concerts.description}</TableCell>
                        <TableCell align="right">{concerts.comment}</TableCell>
                     
                        <TableCell>
                            <Button id="Btn" variant="contained" color="secondary" 
                            onClick={(event) => this.deleteHandleSubmit(concerts)}>Delete Show</Button>
                        </TableCell>
                        {/* <TableCell><Button variant="contained" color="primary">Edit</Button></TableCell> */}
                        <TableCell>
                            <ConcertEdit sessionToken={this.props.sessionToken} concertId={concerts.id}  concert={concerts} />
                        </TableCell>
                        <TableCell>
                            <ConcertComments concert={concerts}  sessionToken={this.props.sessionToken} commentId={this.props.commentId} fetchConcerts={this.props.fetchConcerts}
                            comment={this.props.comment}
                            />
                        </TableCell>
                        <TableCell>
                            <CommentCreate sessionToken={this.props.sessionToken}  bandName={concerts.bandName} concertId={concerts.id}  comment={this.props.comment}/>
                        </TableCell>
                      
                    </TableRow>
                 
            )
        })
    }
    // bandName={this.props.bandName}
    // concertId={this.props.concertId} 
    // concertId={this.props.concertId}

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

