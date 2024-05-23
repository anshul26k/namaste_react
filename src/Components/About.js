import User from "./User"
import UserClass from "./UserClass"
import React from "react"
import UserContext from "../utils/UserContext"


class About extends React.Component{
    constructor(){
        super()
        console.log("about contructor")
    }

    componentDidMount(){
        console.log("about mount")
    }


    render(){
        console.log("about render")
        return (
            
            <div >
                {/* <User name="sk" location="nagpur" /> */}
                <UserClass name="ak" location="Goa"/>
                {/* <h1>This is swiggey page</h1>
                <h1>Contact us at 7828....</h1> */}
                <div>
                <UserContext.Consumer>        
                    {({userlog})=><h1>{userlog}</h1>}
                </UserContext.Consumer>
                </div>
            </div>
            
        )
    }

}


// const About = () =>{
    

//     return (
//         <div >
//             {/* <User name="sk" location="nagpur" /> */}
//             <UserClass name="ak" location="Goa"/>
//             {/* <h1>This is swiggey page</h1>
//             <h1>Contact us at 7828....</h1> */}
//         </div>`
//     )
// }

export default About;