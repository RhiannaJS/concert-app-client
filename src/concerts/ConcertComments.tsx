import React from "react";
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
} from "@material-ui/core"

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
    fetchConcerts: () => void,
    concert: Concerts,
    commentId: string,
    comment: string,
}

type StateType = {
    open: boolean,
    comments: [],
}

class ConcertComments extends React.Component<PropsType, StateType>{
    constructor(props: PropsType) {
        super(props)
        this.state = {
            open: false,
            comments: [],
        }
    }

    fetchCommentDelete = (comment: any) => {
        console.log("Comment Delete")
        fetch(`http://localhost:4000/comment/comment/delete/${comment.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            })
        })
            .then((res) => res.json())
            .then((results) => { this.setState({ comments: results.comments }) })
        this.props.fetchConcerts()
        this.commentsMap()
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
        return this.props.concert?.comments.map((comment: any, index: number) => {
            console.log("this is the comment console.log", comment)
            return (
                <div>
                    {console.log(index, comment.content)}
                    {/* {comment.bandName} */}
                    <TableRow key={index}>
                        <TableCell>{comment.content}</TableCell>
                        <TableCell>
                            <CommentEdit
                                sessionToken={this.props.sessionToken}
                                commentId={comment.id} com={comment.content}
                                fetchConcerts={this.props.fetchConcerts}
                                commentsMap={this.commentsMap} />
                        </TableCell>
                        <TableCell>
                            <Button
                                id="Btn"
                                onClick={(event) => this.fetchCommentDelete(comment)}>
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Button
                    id="Btn"
                    variant="contained"
                    color="secondary"
                    onClick={this.handleOpen}>
                    View Comments
                </Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={this.style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2">
                            <TableContainer>
                                <div id="closeBtn">
                                    <Button
                                        className="closeBtn"
                                        onClick={this.handleClose}>
                                        X
                                    </Button>
                                </div>
                                <h4>{this.props.concert.bandName}</h4>
                                <p>{this.props.concert.dateAttended}</p>
                                <Table
                                    id="cmtTbl"
                                    style={{ backgroundColor: 'rgb(82, 82, 82)' }}>
                                    <TableHead>
                                        <TableRow className="commentRow">
                                            <TableBody>
                                                {this.commentsMap()}
                                            </TableBody>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </TableContainer>
                        </Typography>
                        <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }} >
                        </Typography>
                    </Box>
                </Modal>
            </div>
        )
    }
}

export default ConcertComments;