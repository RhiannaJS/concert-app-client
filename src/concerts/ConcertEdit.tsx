import React from "react";


type Concerts = {
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
}

type PropsType = {
    sessionToken: string,
    concertToUpdate: any,
}

type StateType = {
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
    sessionToken: string,
    concertsList: Concerts[]
    concertToUpdate: any,
    

}

class ConcertEdit extends React.Component<PropsType, StateType>{
    constructor(props: StateType) {
        super(props)
        this.state = {
            bandName: "",
            openingAct: "",
            dateAttended: "",
            location: "",
            description: "",
            comment: "",
            sessionToken: "",
            concertsList: [],
            concertToUpdate: "",
            
        }
    }

    // Edit Fetch with State Variables
    componentDidMount(){ /*{ this.fetchConcerts() }*/
    // fetchConcerts = () => {
        fetch(`http://localhost:4000/concerts/update/${this.props.concertToUpdate.id}`, {
            method: "PUT",
            body: JSON.stringify({ concertsList: { bandName: this.state.bandName, openingAct: this.state.openingAct, dateAttended: this.state.dateAttended, location: this.state.location, description: this.state.description, comment: this.state.comment } }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer${this.props.sessionToken}`
            })
        })
        .then(res=>res.json())
        .then(json=>this.setState({concertsList: json.results}))
        .catch(e=>console.log(e))
     }
    
     componentDidUpdate(){
         this.state.concertsList 
     }

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

