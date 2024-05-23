import React from "react"
import { json } from "react-router-dom";
// import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props){
        super(props)
    
        this.state={
           userinfo:{
            name:"ak",
            username:"akk"
           }
        }
    }

    async componentDidMount(){
       const data = await fetch("https://api.github.com/users/anshul26k");
       const json = await data.json();
       console.log(json)

       this.setState({
           userinfo:json
       })
    }

  render() {
    console.log("child render")
    const {avatar_url,name,login,id} = this.state.userinfo;

    return (
      
      <div className="user-card">
        <img src={avatar_url}></img>
        <p>Name: {name}</p>
        <p>username: {login}</p>
        <p>id: {id}</p>
        {/* <p>{userlog}</p> */}
      </div>
     
    );
  }
}

export default UserClass



{/* <h2>Count:{this.state.count}</h2>
<button onClick={()=>{
   this.setState({
       count : this.state.count+1,
       count1 : this.state.count1+1
   })
}}>click me</button>
<h2>Count1:{this.state.count1}</h2> */}