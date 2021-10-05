import React from "react";
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link"
import FormGroup from "@mui/material/FormGroup"


interface ConcertDetails {
    id: string,
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
}


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
    // handleOpen: ()=> void,
    // handleClose: () => void,
    updateConcertId?: () => void,
    sessionToken: string | null,
    concertsList?: Concerts[],
    id: string,
    concertId: string,
    bandName: string,
    // concert: [],
    // Concerts: []
    // concertsList.id: string,
}

type StateType = {
    // handleOpen: ()=> void,
    // handleClose: () => void,
    concert: [],
    open: boolean,
    concertId: string,
    id: string,
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
    concerts: [{
        id: "",
        bandName: "",
        openingAct: "",
        dateAttended: "",
        location: "",
        description: "",
        comment: "",
    }],
    sessionToken: string,
    // updateConcert: ()=> void,
    concertsList: Concerts[]
}

// let concertsList: Array<Concerts>

class ConcertEdit extends React.Component<PropsType, StateType>{
    constructor(props: StateType) {
        super(props)
        this.state = {
            concert: [],
            open: false,
            concertId: "",
            id: "",
            bandName: "",
            openingAct: "",
            dateAttended: "",
            location: "",
            description: "",
            comment: "",
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
            sessionToken: "",
            // concertToUpdate: "",
            // updateConcert: ()=> void,

        }
    }

    // Edit Fetch with State Variables
    // componentDidMount() 
    fetchEditConcerts = (concertId: any) => {
        console.log("edit fetchEditConcerts")
        fetch(`http://localhost:4000/concerts/update/${this.props.id}`, {
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
            .then(res => res.json())
            .then((json) => {this.setState({ concertsList: json })},
            this.handleClose)
            .catch(e => console.log(e))
            this.setState({open: false})
    }

    handleOpen = () => {
        // event.preventDefault()
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    // componentDidUpdate() {
    //     this.state.concertsList
    // }


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

    // Will contain Edit Modal and Edit Functionality
    render() {
        return (
            <div>
                {/* <h1>ConcertEdit Component</h1> */}
            <Button variant='contained' onClick={this.handleOpen}>Edit</Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <FormGroup onSubmit={this.fetchEditConcerts}>
                    <Box sx={this.style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Edit a Show
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
                        <TextField value={this.state.bandName} onChange={(e) => {this.setState({bandName: e.target.value})}} id="outlined-basic" variant="outlined" label="Band Name" color="secondary" focused helperText="Band Name"/>
                        <br />
                        <TextField value={this.state.openingAct} onChange={(e) => {this.setState({openingAct: e.target.value})}}id="outlined-basic" label="Opening Act" variant="outlined" color="secondary" focused/>
                        <br />
                        <TextField value={this.state.dateAttended} onChange={(e) => {this.setState({dateAttended: e.target.value})}}id="outlined-basic" label="Date of Show" variant="outlined" color="secondary" focused/>
                        <br />
                        <TextField value={this.state.location} onChange={(e) => {this.setState({location: e.target.value})}}id="outlined-basic" label="Location" variant="outlined" color="secondary" focused/>
                        <br />
                        <TextField value={this.state.description} onChange={(e) => {this.setState({description: e.target.value})}} id="outlined-basic" label="Description" variant="outlined" color="secondary" focused/>
                        <br />
                        <TextField value={this.state.comment} onChange={(e) => {this.setState({comment: e.target.value})}}id="outlined-basic" label="Comment" variant="outlined" color="secondary" focused/>
                        <br />
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
                        <Button  variant="contained" color="secondary" onClick={(e) =>{this.fetchEditConcerts(e)}}>Update
                       </Button>
                    </Box>
                    </FormGroup>
                </Modal>
            </div>
        );
    }
}

export default ConcertEdit;







//     return (
//         <div>



