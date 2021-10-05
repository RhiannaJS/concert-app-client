import React from "react";
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup"
import {Link} from "react-router-dom"

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
    sessionToken: string | null,
    concertId: string,
    id: string,
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
    // concerts: [{
    //     id: "",
    //     bandName: "",
    //     openingAct: "",
    //     dateAttended: "",
    //     location: "",
    //     description: "",
    //     comment: "",
    // }],
    // sessionToken: string,
    // updateConcert: ()=> void,
    concertsList: Concerts[]

}

type StateType = {
    open: boolean,
    comment: string,
    sessionToken: string | null,
    concertId: string,
    id: string,
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    concerts: [],
    concertsList: []
}


class CommentCreate extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
        this.state = {
            open: false,
            comment: "",
            sessionToken: "",
            concertId: "",
            id: "",
            bandName: "",
            openingAct: "",
            dateAttended: "",
            location: "",
            description: "",
            concerts: [],
            // sessionToken: string,
            // updateConcert: ()=> void,
            concertsList: []
        }
    }

    // componentDidMount() {
        fetchCommentCreate(comment: any) {
            console.log("fetchCommentCreate")
        fetch(`http://localhost:4000/concerts/comment/comment/${this.props.id}`, {
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
        .then(res=>res.json())
        .then(json=> this.setState({comment: json}))
        .catch(e => console.log(e))
    }
// SHOULD I PUT THIS FUNCTION ON MY APP.TSX FILE TO REMAIN CONSISTENT?
    commentCreate=(event: any)=>{
        this.setState({comment: event.target.value})
        console.log(this.state.comment)
    }

    // componentDidUpdate() {
    //     this.state.concertsList
    // }

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
    };


    render() {
        return (
            <div>
                <h1>CommentCreate Component</h1>
                <Button variant='contained' onClick={this.handleOpen}>Comment</Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <FormGroup onSubmit={this.fetchCommentCreate}>
                    <Box sx={this.style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Add a Comment
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
                        <TextField value={this.state.comment} onChange={(e) => {this.setState({comment: e.target.value})}} id="outlined-basic" variant="outlined" label="Comment" color="secondary" focused helperText="Comment"/>
                        {/* <br />
                        <TextField value={this.state.openingAct} onChange={(e) => {this.setState({openingAct: e.target.value})}}id="outlined-basic" label="Opening Act" variant="outlined" color="secondary" focused/>
                        <br />
                        <TextField value={this.state.dateAttended} onChange={(e) => {this.setState({dateAttended: e.target.value})}}id="outlined-basic" label="Date of Show" variant="outlined" color="secondary" focused/>
                        <br />
                        <TextField value={this.state.location} onChange={(e) => {this.setState({location: e.target.value})}}id="outlined-basic" label="Location" variant="outlined" color="secondary" focused/>
                        <br />
                        <TextField value={this.state.description} onChange={(e) => {this.setState({description: e.target.value})}} id="outlined-basic" label="Description" variant="outlined" color="secondary" focused/>
                        <br />
                        <TextField value={this.state.comment} onChange={(e) => {this.setState({comment: e.target.value})}}id="outlined-basic" label="Comment" variant="outlined" color="secondary" focused/>
                        <br /> */}
                        </Box>
                        </Typography>

                        {/* <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" >
                            <Grid item xs={8}>
                                <Button variant='contained' onClick={this.handleClose}>X</Button>
                            </Grid>
                            <Grid item xs={8}>
                                <Button variant='contained' onClick={this.handleClose}>Submit</Button>
                            </Grid>
                            <Grid item xs={8}>
                                <Button variant='contained' onClick={this.handleClose}>Update</Button>
                            </Grid>
                            <Link to="/concerts/ConcertEdit">
                        </Grid> */}
                        <Button  variant="contained" color="secondary" onClick={(e) =>{this.fetchCommentCreate(e)}}>Add
                       </Button>
                    </Box>
                    </FormGroup>
                </Modal>
            </div>
               
        )
    }
}

export default CommentCreate;

