import React from "react";
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup"

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
    id: string,
    com: string,
    commentId: string,
    fetchConcerts: ()=> void
    commentsMap: ()=> void
    
  

}

type StateType = {
    // comments: [],
    open: boolean,
    com: string,
    sessionToken: string | null,
    id: string,
 
}


class CommentEdit extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
        this.state = {
            com: this.props.com,
            open: false,
            sessionToken: "",
            id: this.props.id,
         
        }
    }

    // componentDidMount() {
    fetchCommentEdit = (com: any) => {
        console.log("fetchCommentEdit")
        fetch(`http://localhost:4000/comment/comment/update/${this.props.id}`, {
            method: "PUT",
            body: JSON.stringify({
                comment: {
                    content: this.state.com,
                    // id: this.props.commentId,
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            })
        })
            .then((res) => res.json())
            .then((json) => { this.setState({ com: json })}, 
            this.handleClose)
            .catch(e => console.log(e))
            this.setState({ open: false })
            this.props.fetchConcerts()
            this.props.commentsMap()
    }

    handleOpen = () => {
        // event.preventDefault()
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
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
    }

    // componentDidUpdate() {
    //     this.state.concertsList
    // }

    render() {
        return (
            <div>
                <Button id="Btn" variant="contained" color="primary" onClick={this.handleOpen}>Edit{console.log(this.props)}</Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <FormGroup onSubmit={this.fetchCommentEdit}>
                        <Box sx={this.style}>
                        <div id="closeBtn">
                            <Button className="closeBtn" onClick={this.handleClose}>X</Button>
                            </div>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                               Update your comment
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>


                                <br />
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField value={this.state.com} onChange={(e) => { this.setState({com: e.target.value })}} id="outlined-basic" variant="outlined" label="Comment" color="error" focused helperText="Comment" />
                                </Box>
                            </Typography>
                            <Button id="Btn" variant="contained" color="secondary" onClick={(e) => { this.fetchCommentEdit(e) }}>Update
                            </Button>
                        </Box>
                    </FormGroup>
                </Modal>

            </div>
        )
    }
}

export default CommentEdit;
