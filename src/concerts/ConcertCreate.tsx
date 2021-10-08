import React from "react";
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog"
import FormGroup from "@mui/material/FormGroup"
import Input from "@mui/material/Input"
import FormControl from "@mui/material/FormControl"
import {Link} from "react-router-dom"

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
   
    updateConcertId?: () => void,
    sessionToken: string | null,
    concertsList?: Concerts[],
    // id: string,
}

type StateType = {
    concert: [],
    open: boolean,
    // modalOpen: boolean,
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
    concertsList: Concerts[]
}

// Will contain create Fetch, and form to create new concert experience, with state variables

class ConcertCreate extends React.Component<PropsType, StateType>{
    constructor(props: PropsType) {
        super(props)
        this.state = {
            concert: [],
            open: false,
            // modalOpen: false,
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
            concertsList: [],
        }

    }

    // componentDidMount(){
    createHandleSubmit(event: any){
        // This is not console.logging any more
        console.log("create handleSubmit")
        event.preventDefault()
        fetch(`http://localhost:4000/concerts/create`, {
            method: "POST",
            body: JSON.stringify({
                concert: {
                    // id: this.state.id,
                    bandName: this.state.bandName,
                    openingAct: this.state.openingAct,
                    dateAttended: this.state.dateAttended,
                    location: this.state.location,
                    description: this.state.description,
                    comment: this.state.comment,
                    userId: this.state.id,
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            })
        })
            .then((res) => res.json())
            .then((json) => {this.setState({ concert: json })},
            this.handleClose)
            .catch(err => console.log(err))
            this.setState({open: false})
    }
    // NEED TO COME BACK TO THIS TO GET THE MODAL TO CLOSE AND THE CONCERTINDEX TO 


    concertCreate = (event: any) => {
        this.setState({ concerts: event.target.value })
        console.log(this.state.concerts)
    }

    handleOpen = () => {
        // event.preventDefault()
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    createBandName(event: any) {
        this.setState({ bandName: event.target.value })
    }

    createOpeningAct(event: any) {
        this.setState({ openingAct: event.target.value })
    }

    createDateAttended(event: any) {
        this.setState({ dateAttended: event.target.value })
    }

    createLocation(event: any) {
        this.setState({ location: event.target.vaule })
    }

    createDescription(event: any) {
        this.setState({ description: event.target.value })
    }

    createComment(event: any) {
        this.setState({ comment: event.target.value })
    }

    // componentDidUpdate() {
    //     this.state.concertsList
    // }


    // I THINK ALL OF THESE LINES BELOW, MAY NEED TO BE AFTER THE EXPORT????
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
                {/* <h1>ConcertCreate Component</h1> */}
                {/* <Button variant="contained"{...this.state.open}>Create Button</Button> */}
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
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Put in all of the details you don't want to forget!
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                {/* THIS IS INCOMPLETE - COPIED FROM ANOTHER FILE TO WORK WITH, BUT HAVEN'T COME BACK TO IT YET */}
                                {/* <Input defaultValue="Band Name" color="secondary"  onChange={(event) => this.createBandName(event)} /> */}
                                <TextField value={this.state.bandName} onChange={(e) => {this.setState({bandName: e.target.value})}} label="Band Name" color="secondary" focused helperText="Band Name" />
                                <TextField value={this.state.openingAct} onChange={(e) => {this.setState({openingAct: e.target.value})}} label="Opening Act" color="secondary" focused helperText="Opening Act" />
                                <TextField value={this.state.dateAttended} onChange={(e) => {this.setState({dateAttended: e.target.value})}} label="Date of Show" color="secondary" focused helperText="Date of the show" />
                                <TextField value={this.state.location} onChange={(e) => {this.setState({location: e.target.value})}} label="Location" color="secondary" focused helperText="Location" />
                                <TextField value={this.state.description} onChange={(e) => {this.setState({description: e.target.value})}} label="Description" color="secondary" focused helperText="Description" />
                                <TextField value={this.state.comment} onChange={(e) => {this.setState({comment: e.target.value})}} label="Comment" color="secondary" focused helperText="Comment" />

                            </Box>
                        </Typography>
                       <Link to="/concerts/ConcertDisplay"><Button  variant="contained" color="secondary" onClick={(e) =>{this.createHandleSubmit(e)}}>Add
                       </Button>
                       </Link>
                    
                    </Box>
                    </FormGroup>
                </Modal>


            </div>
        );
    }
}


export default ConcertCreate;