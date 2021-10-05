import React from "react";
import ConcertEdit from "./ConcertEdit";
import CommentCreate from "./CommentCreate";
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
    comments: [],

}

type PropsType = {
    concerts?: Concerts[] | undefined, 
    updateConcertId?: (newConcertId: string) => void,
    sessionToken: string | null,
    concertId: string,
    bandName: string,
    // comments: [],
    
    // id: string,
    // fetchConcerts: ()=> void,
}

// type StateType = {
//     concertsList: Concerts[],
//     updateConcertId: () => void,


// }

// .map in return
class ConcertDisplay extends React.Component<PropsType, {}>{
    fetchConcerts(): ((value: any) => any) | null | undefined {
        throw new Error("Method not implemented.");
    }
    constructor(props: PropsType) {
        super(props)
        this.state = {
            // concertsList: [],
            

        }
    }

    handleSubmit=(concert: any)=>{
        console.log("delete handleSubmit")
        // event.preventDefault()
        fetch(`http://localhost:4000/concerts/delete/${concert.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type":"application/json",
                "Authorization": `${this.props.sessionToken}`
            })
        })
        .then((res)=> res.json())
        // .then(this.fetchConcerts())
    }

    concertMap = () => {
        return this.props.concerts?.map((concerts: Concerts, index) => {
            return(
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

                {/* <TableCell><Button variant="contained" color="secondary" onClick={(console.log(concerts.id)}>{concerts.id}</Button></TableCell> */}
                <TableCell><Button variant="contained" color="secondary" onClick={(event)=>this.handleSubmit(concerts)}>Delete</Button></TableCell>
                {/* <TableCell><Button variant="contained" color="primary">Edit</Button></TableCell> */}
                <ConcertEdit sessionToken={this.props.sessionToken}  id={concerts.id} concertId={this.props.concertId} bandName={this.props.bandName}/>
                {/* <CommentCreate sessionToken={this.props.sessionToken} concertId={this.props.concertId} bandName={this.props.bandName} id={this.props.concertId} openingAct={this.props.}/> */}
                {/* <TableCell>{this.props.concerts.bandName}</TableCell> */}
                {/* <Link to="concerts/ConcertEdit">
                    <Button type="submit" variant="contained" color="secondary" onClick={(event) => { this.state.updateConcertId(concerts.id)(event) }}>Update your experience</Button>
                </Link> */}


            </TableRow>
            )
        })
    }

    render() {
        return (
            <div>
                <h4></h4>
            <Table>
                {/* <TableBody> */}
                {this.concertMap()}
                
                
            </Table>
            </div> 
        )
    }
}

export default ConcertDisplay;