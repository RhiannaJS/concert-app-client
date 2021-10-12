import React from "react";
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup"
import { Link } from "react-router-dom"

type PropsType = {
    updateConcertId?: () => void,
    sessionToken: string | null,
}

type StateType = {
    concert: [],
    open: boolean,
    userId: string,
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
}

class ConcertCreate extends React.Component<PropsType, StateType>{
    constructor(props: PropsType) {
        super(props)
        this.state = {
            concert: [],
            open: false,
            userId: "",
            bandName: "",
            openingAct: "",
            dateAttended: "",
            location: "",
            description: "",
            comment: "",
        }
    }

    // Concert Create Fetch
    createHandleSubmit(event: any) {
        console.log("create handleSubmit")
        event.preventDefault()
        fetch(`http://localhost:4000/concerts/create`, {
            method: "POST",
            body: JSON.stringify({
                concert: {
                    bandName: this.state.bandName,
                    openingAct: this.state.openingAct,
                    dateAttended: this.state.dateAttended,
                    location: this.state.location,
                    description: this.state.description,
                    comment: this.state.comment,
                    userId: this.state.userId,
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
            .catch(err => console.log(err))
        this.setState({ open: false })
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
                <Button id="addShow" className="add_a_show" variant="contained" color="secondary" onClick={this.handleOpen}>Add a Show</Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <FormGroup onSubmit={this.createHandleSubmit}>
                        <Box sx={this.style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                My New Concert Experience
                            </Typography>
                            <div id="closeBtn">
                                <Button id="Btn" className="closeBtn" onClick={this.handleClose}>X</Button>
                            </div>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Put in all of the details you don't want to forget!
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
                                        label="Band Name"
                                        color="error"
                                        focused
                                        helperText="Band Name" />
                                    <TextField
                                        value={this.state.openingAct}
                                        onChange={(e) => { this.setState({ openingAct: e.target.value }) }}
                                        label="Opening Act"
                                        color="error"
                                        focused
                                        helperText="Opening Act" />
                                    <TextField
                                        value={this.state.dateAttended}
                                        onChange={(e) => { this.setState({ dateAttended: e.target.value }) }}
                                        label="Date of Show"
                                        color="error"
                                        focused
                                        helperText="Date of the show" />
                                    <TextField
                                        value={this.state.location}
                                        onChange={(e) => { this.setState({ location: e.target.value }) }}
                                        label="Location"
                                        color="error"
                                        focused
                                        helperText="Location" />
                                    <TextField
                                        value={this.state.description}
                                        onChange={(e) => { this.setState({ description: e.target.value }) }}
                                        label="Description"
                                        color="error"
                                        focused
                                        helperText="Description" />
                                    <TextField
                                        value={this.state.comment}
                                        onChange={(e) => { this.setState({ comment: e.target.value }) }}
                                        label="Comment"
                                        color="error"
                                        focused
                                        helperText="Comment" />
                                </Box>
                            </Typography>
                            <Link to="/concerts/ConcertDisplay"><Button
                                id="Btn"
                                variant="contained"
                                color="error"
                                onClick={(e) => { this.createHandleSubmit(e) }}>Add</Button>
                            </Link>
                        </Box>
                    </FormGroup>
                </Modal>
            </div>
        );
    }
}

export default ConcertCreate;