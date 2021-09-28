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
    concerts: Concerts
}

class ConcertDisplay extends React.Component <PropsType, {}>{
    constructor(props: PropsType){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h4>{this.props.concerts.bandName}</h4>
                <h3>{this.props.concerts.openingAct}</h3>
                <h3>{this.props.concerts.dateAttended}</h3>
                <h3>{this.props.concerts.location}</h3>
                <h3>{this.props.concerts.description}</h3>
                <h3>{this.props.concerts.comment}</h3>
            </div>
        )
    }
}

export default ConcertDisplay;