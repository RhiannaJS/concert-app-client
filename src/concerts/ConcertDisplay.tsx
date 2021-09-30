import React from "react";
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
}

type PropsType = {
    concerts?: Concerts[] | undefined, 
    updateConcertId?: (newConcertId: string) => void,
    sessionToken: string | null,
    concertId: string,
}

// type StateType = {
//     concertsList: Concerts[],
//     updateConcertId: () => void,


// }

// .map in return
class ConcertDisplay extends React.Component<PropsType, {}>{
    constructor(props: PropsType) {
        super(props)
        this.state = {
            // concertsList: [],

        }
    }

    concertMap = () => {
        return this.props.concerts?.map((concerts: Concerts, index) => {
            return(
            <TableRow key={index}>
                <TableCell component="th" scope="row">
                    {concerts.id}
                </TableCell>
                <TableCell>{concerts.bandName}</TableCell>
                <TableCell>{concerts.openingAct}</TableCell>
                <TableCell>{concerts.dateAttended}</TableCell>
                <TableCell>{concerts.location}</TableCell>
                <TableCell>{concerts.description}</TableCell>
                <TableCell>{concerts.comment}</TableCell>
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
                {/* {
                        this.state.concertsList.map((current, index)=>{
                            return(
                                
                                )
                            })
                    } */}
            </Table>
            </div> 
        )
    }
}

export default ConcertDisplay;