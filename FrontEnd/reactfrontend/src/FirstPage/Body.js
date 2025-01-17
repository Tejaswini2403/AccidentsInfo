import React from 'react'
import './Body.css'
import { render } from 'react-dom';
import { Redirect, Link } from 'react-router-dom';

class Body extends React.Component{
     constructor(){
        super()
        this.state={
            redirectFlag:false
        }
    }
    handleChange= (e) =>{
        if(e.target.name==='homePage' )
        this.setState({redirectFlag:true})
            
    }
    render()
    {
        const {names,count,redirectFlag} = this.state
        if(redirectFlag === true) return <Redirect to = '/Dataquery'  />
        return(
         <div class="Bod m-5 p-5">
            <div>
            <h2>Welcome to Michigan Traffic Crash Facts </h2>
            <br></br>
            <br></br>
            <p class="col-8">The Michigan Traffic Crash Facts (MTCF) website provides users with annual
            official Michigan crash data. There are two sections to the website: the Publications section
            that contains crash data statistics dating back to 1952; and the Data Query Tool, which allows
            users to perform advanced searches... </p>
            <br></br>
            <br>
            </br>
            </div>
            <button type="button" class="btn btn-primary m-3" onClick={this.handleChange} name='homePage'>Data Query </button>

        </div>
        )
    }
}

export default Body;