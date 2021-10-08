import React from "react";
import CommentCreate from "../concerts/CommentCreate"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
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
                    {console.log(index)}
                        {/* {comment.bandName} */}
                    <TableRow key={index}>
                    <TableCell>{comment.content.bandName}</TableCell>
                    <TableCell>{comment.openingAct}</TableCell>
                    <TableCell>{comment.dateAttended}</TableCell>
                    <TableCell>{comment.comments}</TableCell>
                    </TableRow>
                 
                </div>
            )

        })
    }
    
    render() {
        return (
            <div>
                <Button id="Btn" variant="contained" color="secondary" onClick={this.handleOpen}>Concert Comments234</Button>
                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={this.style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            {this.commentsMap()}
                            
                            </Typography>
                            <Typography  id="modal-modal-description" sx={{ mt: 2 }} >
                            {/* {this.commentsMap()} */}
                            </Typography>
                        </Box>
                    </Modal>
                    {/* {this.commentsMap} */}
                    {/* { console.log(this.props)} */}
                    {/* <h1>THIS IS CONCERT COMMENTS</h1> */}
                    {/* <h3>concert comments</h3> */}
                    <Button variant="contained" color="secondary" onClick={this.commentsMap}>Comment567
                    </Button>
                
                {/* {this.commentsMap} */}
            </div>
        )
    }
}

export default ConcertComments;