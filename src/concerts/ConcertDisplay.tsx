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
    // commentsMap: ()=> void,
    concerts?: Concerts[],
    updateConcertId?: (newConcertId: string) => void,
    sessionToken: string | null,
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
    

    // id: string,
    // fetchConcerts: ()=> void,
}

type StateType = {
    // concertsList: Concerts[],
    // updateConcertId: () => void,
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
            // concertsList: [],
            concerts: []
            // concertsList: [],
            // updateConcertId: () => void,
            

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
                <TableRow key={index}>
                    <TableCell component="th" scope="row">
                        {/* {concerts.id} */}
                    </TableCell>
                    <TableCell>{concerts.bandName}</TableCell>
                    <TableCell>{concerts.openingAct}</TableCell>
                    <TableCell>{concerts.dateAttended}</TableCell>
                    <TableCell>{concerts.location}</TableCell>
                    <TableCell>{concerts.description}</TableCell>
                    <TableCell>{concerts.comment}</TableCell>
                    {/* <TableCell>{concerts.comments}</TableCell> */}
                    {/* <TableCell>{concerts.comments}</TableCell> */}

                    {/* <TableCell><Button variant="contained" color="secondary" onClick={(console.log(concerts.id)}>{concerts.id}</Button></TableCell> */}
                    <TableCell><Button variant="contained" color="secondary" onClick={(event) => this.deleteHandleSubmit(concerts)}>Concert Delete</Button></TableCell>
                    {/* <TableCell><Button variant="contained" color="primary">Edit</Button></TableCell> */}
                    <ConcertEdit sessionToken={this.props.sessionToken} id={concerts.id} concertId={this.props.concertId} bandName={this.props.bandName} concert={concerts}/>
                    <ConcertComments concert={concerts} />
                    <CommentCreate sessionToken={this.props.sessionToken} concertId={this.props.concertId} bandName={concerts.bandName} id={concerts.id} openingAct={this.props.openingAct} dateAttended={this.props.dateAttended} location={this.props.location} description={this.props.description} comment={this.props.comment} postId={this.props.postId} />
                    <CommentEdit sessionToken={this.props.sessionToken} concertId={this.props.concertId} id={concerts.id} comment={this.props.comment} />
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
/*.comments*/
    // commentsMap = () => {
    //     return this.props.concerts?.map((concerts: Concerts, index) => {
    //         console.log("commentsMap")
    //         return (
                
    //             <TableRow key={index}>
    //                 <TableCell component="th" scope="row">
    //                 </TableCell>
    //                 <TableCell>{concerts.bandName}</TableCell>
    //                 <TableCell>{concerts.comments}</TableCell>
    //                 <TableCell>{concerts.openingAct}</TableCell>
    //                  <TableCell>{concerts.dateAttended}</TableCell> 
    //                  <TableCell>{concerts.location}</TableCell> 
    //                  <TableCell>{concerts.description}</TableCell> 
    //                 <TableCell>{concerts.comment}</TableCell> 
    //                 <Button  variant="contained" color="secondary" onClick={this.commentsMap()}>Comment
    //                    </Button> 
    //             </TableRow>
    //         )

    //     })
    // }



    render() {
        return (
            <div>
                <h4></h4>
                <Table>

                    {this.concertMap()}
                    {/* <Button  variant="contained" color="secondary" onClick={this.commentsMap}>Comment
                       </Button> */}
                    {/* <Button type="submit" variant="contained" color="secondary"
                        onClick={() => { this.commentsMap() }}
                    >Concert Comments123</Button> */}

                </Table>
            </div>
        )
    }
}

export default ConcertDisplay;

