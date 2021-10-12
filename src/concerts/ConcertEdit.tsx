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
    comments: any
}

type PropsType = {
    sessionToken: string | null,
    concertId: string,
    concert: Concerts
    fetchConcerts: ()=> void,
    concertMap: ()=> void,
}

type StateType = {
    concert: [],
    open: boolean,
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
}

class ConcertEdit extends React.Component<PropsType, StateType>{
    constructor(props: PropsType) {
        super(props)
        this.state = {
            concert: [],
            open: false,
            bandName: this.props.concert.bandName,
            openingAct: this.props.concert.openingAct,
            dateAttended: this.props.concert.dateAttended,
            location: this.props.concert.location,
            description: this.props.concert.description,
            comment: this.props.concert.comment,
        }
    }

// Concert Edit Fetch
    // componentDidMount() 
    fetchEditConcerts = (concertId: any) => {
        console.log("edit fetchEditConcerts")
        fetch(`http://localhost:4000/concerts/update/${this.props.concertId}`, {
            method: "PUT",
            body: JSON.stringify({
                concert: {
                    bandName: this.state.bandName,
                    openingAct: this.state.openingAct,
                    dateAttended: this.state.dateAttended,
                    location: this.state.location,
                    description: this.state.description,
                    comment: this.state.comment,
                    id: this.props.concertId,
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            })
        })
            .then((res) => res.json())
            .then((json) => { this.setState({ concert: json }) },
                this.handleClose)
            .catch(e => console.log(e))
        this.setState({ open: false })
        this.props.fetchConcerts()
        this.props.concertMap()
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
                {/* {console.log(this.props)} */}
                <Button id="Btn" variant='contained' onClick={this.handleOpen}>Edit Show</Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <FormGroup onSubmit={this.fetchEditConcerts}>
                        <Box sx={this.style}>
                            <div id="closeBtn">
                                <Button className="closeBtn" onClick={this.handleClose}>X</Button>
                            </div>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Edit a Show
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <br />
                                <Box
                                    id="cmtTbl" style={{ backgroundColor: 'rgb(82, 82, 82)' }}
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >

                                    <TextField
                                        value={this.state.bandName}
                                        onChange={(e) => { this.setState({ bandName: e.target.value }) }}
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="Band Name"
                                        color="error"
                                        focused
                                        helperText="Band Name" />
                                    <br />
                                    <TextField
                                        value={this.state.openingAct}
                                        onChange={(e) => { this.setState({ openingAct: e.target.value }) }}
                                        id="outlined-basic"
                                        label="Opening Act"
                                        variant="outlined"
                                        color="error"
                                        focused 
                                        helperText="Opening Act"/>
                                    <br />
                                    <TextField
                                        value={this.state.dateAttended}
                                        onChange={(e) => { this.setState({ dateAttended: e.target.value }) }}
                                        id="outlined-basic"
                                        label="Date of Show"
                                        variant="outlined"
                                        color="error"
                                        focused 
                                        helperText="Date"/>
                                    <br />
                                    <TextField
                                        value={this.state.location}
                                        onChange={(e) => { this.setState({ location: e.target.value }) }}
                                        id="outlined-basic"
                                        label="Location"
                                        variant="outlined"
                                        color="error"
                                        focused 
                                        helperText="Location"/>
                                    <br />
                                    <TextField
                                        value={this.state.description}
                                        onChange={(e) => { this.setState({ description: e.target.value }) }}
                                        id="outlined-basic"
                                        label="Description"
                                        variant="outlined"
                                        color="error"
                                        focused 
                                        helperText="Description"/>
                                    <br />
                                    <TextField
                                        value={this.state.comment}
                                        onChange={(e) => { this.setState({ comment: e.target.value }) }}
                                        id="outlined-basic"
                                        label="Comment"
                                        variant="outlined"
                                        color="error"
                                        focused 
                                        helperText="Comment"/>
                                    <br />
                                </Box>
                            </Typography>
                            <Button
                                id="Btn"
                                variant="contained"
                                color="secondary"
                                onClick={(e) => { this.fetchEditConcerts(e) }}>
                                Update
                            </Button>
                        </Box>
                    </FormGroup>
                </Modal>
            </div>
        );
    }
}

export default ConcertEdit;










