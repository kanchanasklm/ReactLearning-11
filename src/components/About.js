
import Profile from "./Profile";

import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);
        // console.log("Parent-Constructor");
    }
    componentDidMount(){
        // console.log("Parent-componentDidMount");
    }
    render(){
        // console.log("Parent-render")
    
    return(
        <>
        <h1>About us page</h1>
        
       
        <Profile name={"First Child"} />
        
        </>
    )
}
}

export default About;

