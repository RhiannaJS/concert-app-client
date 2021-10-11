import { ThemeContext } from "@mui/styled-engine";
import ConcertComments from "./ConcertComments"
import CommentCreate from "./CommentCreate"
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
    sessionToken: string | null,
    allConcerts: Concerts[],
    concerts: Concerts[],
    // concert: Concerts,
    id: string,
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
    comments: any,
    concertId: string,
    // commentId: string,
    // fetchConcerts: () => void,
}

type StateType = {
    allConcerts: Concerts[]
}






class ConcertsGetAll extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
        this.state = {
            allConcerts: [],
        }
    }

    fectchAllConcerts = () => {
        console.log("all concerts")
        fetch("http://localhost:4000/concerts/all", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            })
        })
            .then(res => res.json())
            .then((json) => {
                console.log(json)
                this.setState({ allConcerts: json })
            })
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.fectchAllConcerts()
    }

    allConcertsMap = () => {
        return this.state.allConcerts.map((allConcerts: Concerts, index: number) => {
            return (
                <TableRow key={index}>
                    {console.log(index, allConcerts)}
                    {/* {concerts.id} */}
                    <TableCell component="th" scope="row">{allConcerts.bandName}</TableCell>
                    <TableCell align="right">{allConcerts.openingAct}</TableCell>
                    <TableCell align="right">{allConcerts.dateAttended}</TableCell>
                    <TableCell align="right">{allConcerts.location}</TableCell>
                    <TableCell align="right">{allConcerts.description}</TableCell>
                    <TableCell align="right">{allConcerts.comment}</TableCell>
                    {/* <TableCell>
                        <CommentCreate sessionToken={this.props.sessionToken} bandName={this.props.concerts.bandName} concertId={this.props.concerts.id} comment={this.props.comment} />
                    </TableCell> */}
                    {/* <TableCell>
                        <ConcertComments concert={this.props.concerts} sessionToken={this.props.sessionToken} commentId={this.props.commentId} fetchConcerts={this.props.fetchConcerts}
                            comment={this.props.comment}
                        />
                    </TableCell> */}

                </TableRow>
            )
        })
    }


    render() {
        return (

            <div>
                <h1>Get All Concerts Component</h1>
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
                            {this.allConcertsMap()}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}
export default ConcertsGetAll;