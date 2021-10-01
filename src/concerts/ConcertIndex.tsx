import React from "react";
import ConcertDisplay from "./ConcertDisplay"
import Navbar from "../home/Navbar";

// THIS FILE SHOULD CONTAIN EDIT BUTTON SHOULD HAVE A FUNCTION THAT RUNS IF THE USER IS NEW AND HAS NO CONCERTS TO SHOW YET???.  IF TIME ADD A SEARCH BAR TO SEARCH FOR OTHERS CONCERT POSTS


interface ConcertDetails{
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

type StateType = {
   concertsList: Concerts[], 
   username: string,
  }

type PropsType = {
    
    sessionToken: string | null,
    userRole: string | null;
    username: string | null;
    concerts?: Concerts []
    concertId: string,
    updateConcertId: (newConcertId: string)=> void,
   
}  
  


class ConcertIndex extends React.Component <PropsType, StateType> {
    constructor(props: PropsType){
        super(props)
        this.state={
            concertsList: [],
            // concerts: []
            username: "",
            
            
            }
        }
        
        componentDidMount(){
        // fetchConcerts = () => {
            fetch("http://localhost:4000/concerts/mine", {
            method: "GET",
            headers : new Headers ({
                "Content-Type": "application/json",
                "Authorization" : `${this.props.sessionToken}`
            })
        })
            .then(res=>res.json())
            .then(json=> this.setState({concertsList: json}))
            .catch(e=> console.log(e))
            
        }
    
        componentDidUpdate(){
            console.log(this.state.concertsList)
        }

        render(){
            return(
                <div>
                    <Navbar sessionToken={this.props.sessionToken} username={this.props.username} />
                    <h1>ConcertIndex Component</h1>
                    <ConcertDisplay sessionToken={this.props.sessionToken} concertId={this.props.concertId}concerts={this.state.concertsList} />
                    
                    {/* clearToken={this.props.sessionToken} */}
                    </div>
                    )
                }
}


            
export default ConcertIndex;