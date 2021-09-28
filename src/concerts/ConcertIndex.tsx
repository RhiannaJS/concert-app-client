import React from "react";
import ConcertDisplay from "./ConcertDisplay"

type Concerts = {
    bandName: string,
    openingAct: string,
    dateAttended: string,
    location: string,
    description: string,
    comment: string,
}

type StateType = {
   concertsList: Concerts[], 
   
  }

type PropsType = {
    sessionToken: string | null,
    userRole: string;
    username: string;
}  
  


class ConcertIndex extends React.Component <PropsType, StateType> {
    constructor(props: PropsType){
        super(props)
        this.state={
            concertsList: [],
            
            }
        }
        
        componentDidMount(){
            fetch("http://localhost:3000/concerts/mine", {
            method: "GET",
            headers : new Headers ({
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${this.props.sessionToken}`
            })
        })
            .then(res=>res.json())
            .then(json=> this.setState({concertsList: json.results}))
            .catch(e=> console.log(e))
            
        }
            render(){
                return(
                    <div>
                    <h1>ConcertIndex Component</h1>
                    {
                        this.state.concertsList.map((current, index)=>{
                            return(
                             <ConcertDisplay key={index} concerts={current}/>  
                            )
                        })
                    }
                    
                    </div>
                    )
                }
}

            
export default ConcertIndex;