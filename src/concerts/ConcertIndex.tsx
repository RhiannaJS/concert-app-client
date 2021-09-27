import React from "react";

type StateType = {
//    concerts: string,
  }
  
  type PropsType = {
   
  }

class ConcertIndex extends React.Component <PropsType, StateType> {
    constructor(props:any){
        super(props);
        this.state={
            // concerts: "",

        }
    }

// componentDidMount(){
//     fetchConcerts("http://localhost:3000/concerts", {
//         method: "GET",
//         headers: new Headers ({
//             "Content-Type" : "application/json",
//             "Authorization" : `Bearer ${this.props.sessionToken}`
//         }
//     }) .then (
//         (res)=> res.json()
//     ) .then((logData)=>{
//        this.state.concerts(logData)
//        console.log(logData)
//     })
// }

    render(){
        return(
            <div>
                <h1>ConcertIndex Component</h1>
                
            </div>
        )
    }
}

export default ConcertIndex;