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
    comments: []
}

type StateType = {
   concertsList: Concerts[], 
   username: string,
   bandName: string,
   openingAct: string,
   dateAttended: string,
   location: string,
   description: string,
   comment: string,
   postId: string,
   comments: [],
   
  }

type PropsType = {
    sessionToken: string | null,
    userRole: string | null;
    username: string | null;
    concerts?: Concerts []
    concertId: string,
    // fetchConcerts: ()=> void,
   
}  
  


class ConcertIndex extends React.Component <PropsType, StateType> {
    constructor(props: PropsType){
        super(props)
        this.state={
            concertsList: [],
            // concerts: []
            username: "",
            bandName: "",
            openingAct: "",
            dateAttended: "",
            location: "",
            description: "",
            comment: "",
            postId: "",
            comments: [],
            
            
            
            }
        }
        
        componentDidMount(){this.fetchConcerts()}
        fetchConcerts = () => {
            fetch("http://localhost:4000/concerts/mine", {
            method: "GET",
            headers : new Headers ({
                "Content-Type": "application/json",
                "Authorization" : `${this.props.sessionToken}`
            })
        })
            .then(res=>res.json())
            .then((json)=> {this.setState({concertsList: json})})
            .catch(e=> console.log(e))
            
        }
        

        componentDidUpdate(){
            // this.fetchConcerts()
            console.log(this.state.concertsList)
        }

        render(){
            return(
                <div>
                    <Navbar sessionToken={this.props.sessionToken} username={this.props.username} />
                    <h1>ConcertIndex Component</h1>
                    <ConcertDisplay sessionToken={this.props.sessionToken} concertId={this.props.concertId} concerts={this.state.concertsList} bandName={this.state.bandName} openingAct={this.state.openingAct} dateAttended={this.state.dateAttended} location={this.state.location} description={this.state.description} comment={this.state.comment} comments={this.state.comments}  postId={this.state.postId}/>
                    
                    {/* clearToken={this.props.sessionToken} */}
                    </div>
                    )
                }
}


            
export default ConcertIndex;