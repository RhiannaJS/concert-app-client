import React from "react";
import CommentCreate from "../concerts/CommentCreate"
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
// import { Concerts } from '../site/SwitchController'

// type Concerts = {
//     id: string,
//     bandName: string,
//     openingAct: string,
//     dateAttended: string,
//     location: string,
//     description: string,
//     comment: string,
//     comments: [
//         context: string,
//     ],

// }

type comments = {
    context: []
}

type Concerts = {
    id: string,
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
    comments: []
}

type PropsType = {
    concertsList?: Concerts[] | undefined,
    // open: boolean,
    concert: Concerts
}

class ConcertComments extends React.Component<PropsType, {}>{
    constructor(props: PropsType) {
        super(props)
        this.state = {
            concert: [],
            // open: false,
            concerts: [{
                id: "",
                bandName: "",
                openingAct: "",
                dateAttended: "",
                location: "",
                description: "",
                comment: "",
            }],
            concertsList: [{
                id: "",
                bandName: "",
                openingAct: "",
                dateAttended: "",
                location: "",
                description: "",
                comment: "",
            }],
        }
    }

    handleOpen = () => {
        // event.preventDefault()
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    componentDidMount() {
        console.log(this.props)
    }

    commentsMap = () => {
        return this.props.concert.comments?.map((concerts: Concerts, index) => {
            return (

                <TableRow  key={index}>
                    <TableCell component="th" scope="row">
                    </TableCell>
                    <TableCell>{concerts.bandName}</TableCell>
                    {/* <TableCell>{concerts.openingAct}</TableCell> */}
                    {/* <TableCell>{concerts.dateAttended}</TableCell> */}
                    {/* <TableCell>{concerts.location}</TableCell> */}
                    {/* <TableCell>{concerts.description}</TableCell> */}
                    {/* <TableCell>{concerts.comment}</TableCell> */}
                    <TableCell>{concerts.comments}</TableCell>
                    <Button  variant="contained" color="secondary" onClick={this.commentsMap}>Comment
                       </Button>
                </TableRow>
            )

        })
    }

    render() {
        return (
            <div>
               { console.log(this.props)}
                <h1>THIS IS CONCERT COMMENTS</h1>
                <h3>Band Name</h3>
               
                {/* {this.commentsMap} */}
            </div>
        )
    }
}

export default ConcertComments;