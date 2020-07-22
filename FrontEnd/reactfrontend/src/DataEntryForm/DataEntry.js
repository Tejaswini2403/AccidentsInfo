import React,{Component} from 'react'; 
import axios from "axios";
import {Button, Form} from 'react-bootstrap';
//import "./DataEntry.css" ;

export default class DataEntry extends Component {

    constructor() {
        super();
        this.state = {
          username: '',
          age: null,
          fetchedData:[],
        };
      }

      componentWillMount() {
        axios.get("/getData").then(res => {
            this.setState({fetchedData:res.data})
            console.log(this.state.fetchedData);
        });
    }

      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
      }

    render() 
    {
      return(
        <div >
        <div class="container">
         
          <form>
            <h3 style={{backgroundColor: "violet"}}>Accident Details : Form</h3>
            <h5 style={{backgroundColor: "lightblue"}}>Basic Details</h5>
  <div class="form-row">
  
    <div class="form-group col-md-4">
      <label >Date please!</label>
      <input type="date" class="form-control" id="date" placeholder="Enter the date here">
        </input>
    </div>
    <div class="form-group col-md-4">
      <label>Crime No.</label>
      <input type="number" class="form-control" id="crno" placeholder="Crime Number">
        </input>
    </div>
    
    <div class="form-group col-md-4">
      <label>Section</label>
      <select id="Secno." class="form-control">
        <option selected>Choose...</option>
        <option>279</option>
        <option>304(A)</option>
        <option>377</option>
        <option>388</option>
        <option>Others</option>
      </select>
    </div>
<br></br>
  </div>
        
  <h5 style={{backgroundColor: "lightblue"}}>Investigation Details</h5>

  <div class="form-row">
   
  <div class="form-group col-md-4">
    <label>Hello Officer</label>
  <input type="text" class="form-control" id="InOf" placeholder="Investigation Officer"></input>     
   </div>     

   <div class="form-group col-md-2">
     <label>Duration please!</label>
  <input type="number" class="form-control" id="time" ></input>     
  </div>

  <div class="form-group col-md-3">
    
    <label>Select District</label>
    <select id="distrcit" class="form-control">
        <option selected>Only Telangana</option>
        <option>Adilabad</option>
        <option>Hyderabad</option>
        <option>Secundrabaad</option>
        <option>Warangal</option>
        <option>Nizamabad</option>
        <option>Nalgonda</option>
        <option>Karimnagar</option>
        <option>Mahaboobnagar</option>
      </select>     
   </div> 
  
   <div class="form-group col-md-3">
     <label>Road Name</label>
  <input type="text" class="form-control" id="rname" placeholder="Road Name"></input>     
   </div> 
  
   <div class="form-group col-md-2">
     <label>Road Type</label>
     <select id="rtpe" class="form-control">
        <option selected>Choose...</option>
        <option>Main Road</option>
        <option>Nh55</option>
      </select>        
   </div> 
  
   <div class="form-group col-md-2">
     <label>No. of lanes</label>
  <input type="number" class="form-control" id="lno" placeholder="0"></input>     
   </div> 
    
   <div class="form-group col-md-8">
     <label>Location here!</label>
  <input type="text" class="form-control" id="loc" placeholder="Location please!"></input>     
   </div> 
  </div>

<h5  style={{backgroundColor: "lightblue"}}>Vehicle Information here!</h5>

  <div class="form-row">
    
    <div class="form-group col-md-2">
      <label>Speed Limit (Range)</label>
      <input type="text" class="form-control" id="speedlimit" placeholder="Enter as range">
        </input>
    </div>

    <div class="form-group col-md-3">
      <label>Vehicle Type</label>
     <input type="text" class="form-control" id="vectype" placeholder="Vehicle type"></input>
    </div>

    <div class="form-group col-md-4">
    <label>Registration No.</label>
     <input type="text" class="form-control" id="regno" placeholder="Registration number"></input>
    </div>

    <div class="form-group col-md-3">
      <label>Vehicle Damage Type</label>
      <input type="text" class="form-control" id="dmgtype" ></input>
    </div>
  </div>


  <h5  style={{backgroundColor: "lightblue"}}>Driver Details here!</h5>

  <div class="form-row">
    
    <div class="form-group col-md-4">
      <label>Name</label>
      <input type="text" class="form-control" id="speedlimit" placeholder="Enter as range">
        </input>
    </div>

    <div class="form-group col-md-2">
      <label>Gender</label>
      <select id="dgender" class="form-control">
        <option id="M">Male</option>
        <option id="F"> Female</option>
        <option id="O"> Others</option>
      </select>     
    </div>

    <div class="form-group col-md-2">
    <label>Age</label>
     <input type="number" class="form-control" id="dage" placeholder="Age"></input>
    </div>

    <div class="form-group col-md-2">
      <label>Condition</label>
      <input type="text" class="form-control" id="dname" placeholder="Driver Condition"></input>
    </div>

    <div class="form-group col-md-2">
      <label>Passenger count</label>
      <input type="number" class="form-control" id="pcount"></input>
    </div>
  </div>


<h5  style={{backgroundColor: "lightblue"}}>Victim Details here!</h5>

  <div class="form-row">
    <div class="form-group col-md-4">
    <label>Number of Victims</label>
     <input type="number" class="form-control" id="vcount"></input>
    </div>

    <div class="form-group col-md-4">
    <label>Name</label>
      <input type="text" class="form-control" id="vname" placeholder="Victim's Name">
        </input>
    </div>

    <div class="form-group col-md-2">
    <label>Age</label>
     <input type="number" class="form-control" id="vage"></input>
    </div>

    <div class="form-group col-md-2">
    <label>Gender</label>
      <select id="vgender" class="form-control">
        <option id="M">Male</option>
        <option id="F"> Female</option>
        <option id="O"> Others</option>
      </select>  
    </div>

    <div class="form-group col-md-12">
    <h5 style={{backgroundColor: "lightblue"}}>Accident Cause</h5>
    <input type="testarea" class="form-control" id="cause" placeholder="Accident Cause here!"></input>
     </div>   
    
    </div>
    
    

  <button type="reset" class="btn btn-danger">Reset</button>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

 </div>

 </div>
      )    
        
    }
}
