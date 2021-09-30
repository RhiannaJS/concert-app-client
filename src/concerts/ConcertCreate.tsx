import React from "react";

type PropsType ={
    sessionToken: string | null,
}

// Will contain create Fetch, and form to create new concert experience, with state variables

class ConcertCreate extends React.Component<PropsType, {}>{
    constructor(props: PropsType){
    super(props)

    }


    render(){
        return(
            <div>
                <h1>ConcertCreate Component</h1>
            </div>
        )
    }
}

export default ConcertCreate;