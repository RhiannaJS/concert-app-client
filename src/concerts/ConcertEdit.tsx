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
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
    sessionToken: string,
    concertsList: Concerts[]

}

class ConcertEdit extends React.Component<PropsType, {}>{
    constructor(props: PropsType) {
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
        }
    }

    componentDidMount(){ /*{ this.fetchConcerts() }*/
    // fetchConcerts = () => {
        fetch("http://localhost:3000/concerts/update/:entryId", {
            method: "PUT",
            body: JSON.stringify({ concertsList: { bandName: this.props.bandName, openingAct: this.props.openingAct, dateAttended: this.props.dateAttended, location: this.props.location, description: this.props.description, comment: this.props.comment } }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer${this.props.sessionToken}`
            })
        })
        .then(res=>res.json())
        .then(json=>this.setState({concertsList: json.results}))
        .catch(e=>console.log(e))
            

     }
    


    render() {
        return (
            <div>
                <h1>ConcertEdit Component</h1>
            </div>
        )
    }
}

export default ConcertEdit;

