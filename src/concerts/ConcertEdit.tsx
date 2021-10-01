import React from "react";
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField"



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
    updateConcertId?: ()=> void,
    sessionToken: string | null,
    concertsList?: Concerts[],
    id: string,
    // Concerts: []
    // concertsList.id: string,
}

type StateType = {
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
    // sessionToken: string,
    // updateConcert: ()=> void,
    concertsList: Concerts[]
}

// let concertsList: Array<Concerts>

class ConcertEdit extends React.Component<PropsType, StateType>{
    constructor(props: PropsType) {
        super(props)
        this.state = {
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
            // sessionToken: "",
            // concertToUpdate: "",
            // updateConcert: ()=> void,

        }
    }

    // Edit Fetch with State Variables
    componentDidMount() {
        // fetchConcerts = () => {
        fetch(`http://localhost:4000/concerts/update/${this.props.id}`, {
            method: "PUT",
            body: JSON.stringify({
                concertsList: {
                    id: this.props.id,
                    bandName: this.state.bandName,
                    openingAct: this.state.openingAct,
                    dateAttended: this.state.dateAttended,
                    location: this.state.location,
                    description: this.state.description,
                    comment: this.state.comment
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            })
        })
            .then(res => res.json())
            .then(json => this.setState({ concertsList: json }))
            .catch(e => console.log(e))
    }

    // componentDidUpdate() {
    //     this.state.concertsList
    // }



    // Will contain Edit Modal and Edit Functionality
    render() {
        return (
            <div>
                <h1>ConcertEdit Component</h1>



            </div>
        )
    }
}

export default ConcertEdit;


const style = {
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


function EditModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        My New Concert Experience
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            THIS IS INCOMPLETE - COPIED FROM ANOTHER FILE TO WORK WITH, BUT HAVEN'T COME BACK TO IT YET
                        <TextField value={this.state.bandName} onChange={(event) => updateConcertId  (event)}
                        label="Outlined secondary" color="secondary" focused  helperText="Band Name"/>
                        <TextField label="Outlined secondary" color="secondary" focused helperText="Opening Act"/>
                        <TextField label="Outlined secondary" color="secondary" focused helperText="Date of the show"/>
                        <TextField label="Outlined secondary" color="secondary" focused helperText="Location"/>
                        <TextField label="Outlined secondary" color="secondary" focused helperText="Description"/>
                        <TextField label="Outlined secondary" color="secondary" focused helperText="Comment"/>
                        </Box>
                    </Typography>
                </Box>
            </Modal> */}
        </div>
    );
}



