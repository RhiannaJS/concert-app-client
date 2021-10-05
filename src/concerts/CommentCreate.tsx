import React from "react";

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
        handleSubmit(event: any) {
        fetch(`http://localhost:4000/concerts/comment/comment/${this.props.concertId}`, {
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
        .then(json=> this.setState({concertsList: json}))
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




    render() {
        return (
            <div>
                <h1>CommentCreate Component</h1>

                {/* <Button variant="contained" color="secondary" onClick={this.handleOpen}>Add a Show</Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <FormGroup onSubmit={this.handleSubmit}>
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
                            > */}
                                {/* THIS IS INCOMPLETE - COPIED FROM ANOTHER FILE TO WORK WITH, BUT HAVEN'T COME BACK TO IT YET */}
                                {/* <Input defaultValue="Band Name" color="secondary"  onChange={(event) => this.createBandName(event)} /> */}
                                {/* <TextField value={this.state.bandName} onChange={(event) => this.createBandName(event)} label="Band Name" color="secondary" focused helperText="Band Name" />
                                <TextField value={this.state.openingAct} onChange={(event) => this.createOpeningAct(event)} label="Opening Act" color="secondary" focused helperText="Opening Act" />
                                <TextField value={this.state.dateAttended} onChange={(event) => this.createDateAttended(event)} label="Date Attended" color="secondary" focused helperText="Date of the show" />
                                <TextField value={this.state.location} onChange={(event) => this.createLocation(event)} label="Location" color="secondary" focused helperText="Location" />
                                <TextField value={this.state.description} onChange={(event) => this.createDescription(event)} label="Description" color="secondary" focused helperText="Description" />
                                <TextField value={this.state.comment} onChange={(event) => this.createComment(event)} label="Comment" color="secondary" focused helperText="Comment" />

                            </Box>
                        </Typography>
                       {/*                                              Tried adding this, gets an empty object  - thats progess I guess */}
                        {/* <Button variant="contained" color="secondary" onClick={this.concertCreate}>Add</Button>
                    </Box>
                    </FormGroup>
                </Modal> */} 

            </div>
        )
    }
}

export default CommentCreate;

// const style = {
//     position: 'absolute' as 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };


// function EditModal() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

// return (
//     <div>
//         <Button onClick={handleOpen}>Open modal</Button>
//         <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//         >
//             <Box sx={style}>
//                 <Typography id="modal-modal-title" variant="h6" component="h2">
//                     My New Concert Experience
//                 </Typography>
//                 <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                     <Box
//                         component="form"
//                         sx={{
//                             '& > :not(style)': { m: 1, width: '25ch' },
//                         }}
//                         noValidate
//                         autoComplete="off"
//                     >
//                         THIS IS INCOMPLETE - COPIED FROM ANOTHER FILE TO WORK WITH, BUT HAVEN'T COME BACK TO IT YET
//                     <TextField value={this.state.bandName} onChange={(event) => updateConcertId  (event)}
//                     label="Outlined secondary" color="secondary" focused  helperText="Band Name"/>
//                     <TextField label="Outlined secondary" color="secondary" focused helperText="Opening Act"/>
//                     <TextField label="Outlined secondary" color="secondary" focused helperText="Date of the show"/>
//                     <TextField label="Outlined secondary" color="secondary" focused helperText="Location"/>
//                     <TextField label="Outlined secondary" color="secondary" focused helperText="Description"/>
//                     <TextField label="Outlined secondary" color="secondary" focused helperText="Comment"/>
//                     </Box>
//                 </Typography>
//             </Box>
//         </Modal>
//     </div>
// );
// }