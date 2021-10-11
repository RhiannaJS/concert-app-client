import React from "react";
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup"


type PropsType = {
    sessionToken: string | null,
    concertId: string,
    bandName: string,
    comment: string,


}

type StateType = {
    open: boolean,
    comment: string,
}


class CommentCreate extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
        this.state = {
            open: false,
            comment: "",
        }
    }

    // componentDidMount() {
    fetchCommentCreate(concertId: any) {
        console.log("fetchCommentCreate")
        fetch(`http://localhost:4000/comment/comment/${this.props.concertId}`, {
            method: "POST",
            body: JSON.stringify({
                comment: {
                    content: this.state.comment,
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            })
        })
            .then(res => res.json())
            .then((json) => { this.setState({ comment: json }) }, this.handleClose)
            .catch(e => console.log(e))
        this.setState({ open: false })
    }


    componentDidUpdate() {
        console.log(this.state.comment)
    }

    handleOpen = () => {
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
    };


    render() {
        return (
            <div>
                <h1></h1>
                <Button id="Btn" variant="contained" color="primary" onClick={this.handleOpen}>Add Comment{console.log(this.props)}</Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <FormGroup onSubmit={this.fetchCommentCreate}>
                        <Box sx={this.style}>
                            <div id="closeBtn">
                                <Button className="closeBtn" onClick={this.handleClose}>X</Button>
                            </div>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Add a Comment
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <h3>{this.props.bandName}</h3>

                                <br />
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >

                                    <TextField value={this.state.comment} onChange={(e) => { this.setState({ comment: e.target.value }) }} id="outlined-basic" variant="outlined" label="Comment" color="error" focused helperText="Comment" />
                                </Box>
                            </Typography>
                            <Button id="Btn" variant="contained" color="secondary" onClick={(e) => { this.fetchCommentCreate(e) }}>Add
                            </Button>
                        </Box>
                    </FormGroup>
                </Modal>
            </div>

        )
    }
}

export default CommentCreate;

