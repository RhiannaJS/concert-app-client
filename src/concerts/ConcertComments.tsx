import React from "react";
import CommentCreate from "../concerts/CommentCreate"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CommentEdit from "./CommentEdit"
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

// interface comments {
//     context: []
// }

type Concerts = {
    id: string,
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
    comments: any
}


type PropsType = {
    sessionToken: string | null,
    commentId: string,
    fetchConcerts: ()=> void,
    // commentsMap: ()=> void,
    // concertsList?: Concerts[] ,
    // open: boolean,
    concert: Concerts,
    // concerts?: Concerts[],
    // id: string,
    // bandName: string,
    // openingAct: string,
    // dateAttended: string,
    // location: string,
    // description: string,
    // comment: string,
    // comments: any,
    // commentsMap: ()=> void,
}

type StateType = {
    open: boolean,
    concert: [],
    concerts: [],
    comments: any,
    com: any
}

class ConcertComments extends React.Component<PropsType, StateType>{
    constructor(props: PropsType) {
        super(props)
        this.state = {
            concert: [],
            // [{
            //     id: this.props.id,
            //     bandName: this.props.bandName,
            //     openingAct: this.props.openingAct,
            //     dateAttended: this.props.dateAttended,
            //     location: this.props.location,
            //     description: this.props.description,
            //     comment: this.props.comment,
            //     comments: []
            // }],
            // open: false,
            concerts: [],
            // concertsList: [{
            //     id: "",
            //     bandName: "",
            //     openingAct: "",
            //     dateAttended: "",
            //     location: "",
            //     description: "",
            //     comment: "",
            // }],
            comments: [],
            open: false,
            com: [],
        }
    }

    // fetchCommentDelete = (com: any) => {
    //     console.log("Comment Delete")
    //     fetch(`http://localhost:4000/comment/comment/delete${this.props.id}`,{
    //         method: "DELETE",
    //         headers: new Headers({
    //             "Content-Type": "application/json",
    //             "Authorization": `${this.props.sessionToken}`
    //         })
    //     })
    //     .then((res) => res.json())
    //     .then((results) => {this.setState({ com: results.com})})
    //     this.props.fetchConcerts()
    //     this.commentsMap()
    // }

    handleOpen = () => {
        // event.preventDefault()
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    componentDidMount() {
        // console.log(this.props)
    }

    style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    commentsMap = () => {
        return this.props.concert?.comments.map((comment: any, index: any) => {
            console.log("this is the comment console.log", comment)
            return (
                <div>
                    {console.log(index, comment.content)}
                    {/* {comment.bandName} */}
                    <TableRow key={index}>
                        
                        <TableCell>{comment.content}</TableCell>
                       <TableCell><CommentEdit sessionToken={this.props.sessionToken}  id={comment.id} com={comment.content} commentId={this.props.commentId} fetchConcerts={this.props.fetchConcerts} commentsMap={this.commentsMap}/></TableCell>
                       {/* <TableCell><Button onClick={(e) =>{this.fetchCommentDelete(e)}}>Delete</Button></TableCell> */}
                        {/* <TableCell>{comment.dateAttended}</TableCell>
                        <TableCell>{comment.comments}</TableCell> */}
                        {/* <TableCell>{comment.content.bandName}</TableCell> */}
                    </TableRow>

                </div>
            )

        })
    }

    render() {
        return (
            <div>
                <Button id="Btn" variant="contained" color="secondary" onClick={this.handleOpen}>Comments</Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={this.style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <TableContainer>
                                <div id="closeBtn">
                            <Button className="closeBtn" onClick={this.handleClose}>X</Button>
                            </div>
                                <h4>{this.props.concert.bandName}</h4>
                                <p>{this.props.concert.dateAttended}</p>
                                <Table id="cmtTbl" style={{ backgroundColor: 'rgb(82, 82, 82)'}}>
                                    <TableHead>
                                        <TableRow className="commentRow">
                                            {this.commentsMap()}
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </TableContainer>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} >
                            {/* {this.commentsMap()} */}
                        </Typography>
                    </Box>
                </Modal>

                {/* {this.commentsMap} */}
                {/* { console.log(this.props)} */}
                {/* <h1>THIS IS CONCERT COMMENTS</h1> */}
                {/* <h3>concert comments</h3> */}
                {/* <Button variant="contained" color="secondary" onClick={this.commentsMap}>Comment567
                </Button> */}

                {/* {this.commentsMap} */}
            </div>
        )
    }
}

export default ConcertComments;