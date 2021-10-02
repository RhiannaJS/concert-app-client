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
        handleSubmit = (event: any) => {
        fetch(`http://localhost:4000/concerts/comment/comment/update/${this.props.id}`, {
            method: "PUT",
            body: JSON.stringify({
                concertsList: {
                    id: this.props.concertId,
                    bandName: this.props.bandName,
                    openingAct: this.props.openingAct,
                    dateAttended: this.props.dateAttended,
                    location: this.props.location,
                    description: this.props.description,
                    comment: this.state.comment,
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

    // componentDidUpdate() {
    //     this.state.concertsList
    // }
// SHOULD I PUT THIS FUNCTION ON MY APP.TSX FILE TO REMAIN CONSISTENT?
    updateComment=(newComment: string)=>{
        this.setState({comment: newComment})
        // console.log(this.state.newComment)
    }




    render() {
        return (
            <div>
                <h1>CommentCreate Component</h1>
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