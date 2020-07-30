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
            <h5 style={{backgroundColor: "aqua"}}>PS and Case Details</h5>
  <div class="form-row">
  
  <div class="form-group col-md-3">
    <label>Select District</label>
    <select id="distrcit" class="form-control">
        <option selected>Only Telangana</option>
        <option>Adilabad</option>
        <option>Hyderabad City</option>
        <option>Secundrabaad</option>
        <option>Warangal</option>
        <option>Nizamabad</option>
        <option>Nalgonda</option>
        <option>Karimnagar</option>
        <option>Mahaboobnagar</option>
      </select>     
   </div> 

   <div class="form-group col-md-3">
      <label>PS Name</label>
      <input type="text" class="form-control" id="psname" placeholder="PS Name"></input> 
    </div>

    <div class="form-group col-md-3">
      <label>Section</label>
      <input type="text" class="form-control" id="Sect" placeholder="Acts & Section"></input> 
    </div>

    <div class="form-group col-md-3">
      <label>Date please!</label>
      <input type="date" class="form-control" id="date" placeholder="Enter the date here">
        </input>
    </div>
  </div>

  <h5 style={{backgroundColor: "aqua"}}>Occurence of Offense</h5>

  <div class="form-row">

  <div class="form-group col-md-3">
      <label>Date please!</label>
      <input type="date" class="form-control" id="odate" placeholder="Enter the date here">
        </input>
    </div>    

    <div class="form-group col-md-2">
      <label>From Time</label>
      <input type="time" class="form-control" id="tfrom" placeholder="Time from">
        </input>
    </div>

    <div class="form-group col-md-2">
      <label>To Time</label>
      <input type="time" class="form-control" id="tto" placeholder="Time to">
        </input>
    </div>

    <div class="form-group col-md-2">
      <label>Time</label>
      <input type="time" class="form-control" id="time" placeholder="Time">
        </input>
    </div>

    <div class="form-group col-md-3">
      <label>Information Type</label>
    <select id="Info Type" class="form-control">
        <option>Written</option>
        <option>Suo-Moto</option>
      </select>     
    </div>

<br></br>
  </div>
 

  <h5 style={{backgroundColor: "aqua"}}>Place of Occurence</h5>
<div class="form-row">

<div class="form-group col-md-4">
      <label>Distance & District from PS</label>
      <input type="text" class="form-control" id="ddps" placeholder="From PS">
        </input>
    </div>

    <div class="form-group col-md-4">
      <label>Address</label>
      <input type="text" class="form-control" id="poadd" placeholder="Address Here!">
        </input>
    </div>

    <div class="form-group col-md-4">
      <label>Area/ Mandal </label>
      <input type="text" class="form-control" id="area" placeholder="Area">
        </input>
    </div>    
        <div class="form-group col-md-4">
      <label>Street/ Village </label>
      <input type="text" class="form-control" id="street" placeholder="Street">
        </input>
        </div>

        <div class="form-group col-md-4">
      <label>City/District </label>
      <input type="text" class="form-control" id="city" placeholder="City">
        </input>     
        </div>

        <div class="form-group col-md-4">
      <label>PIN</label>
      <input type="number" class="form-control" id="pin" placeholder="PIN">
        </input>
    </div>

<br></br>
<label>In case , outside the limit of this Police Station</label>
<div class="form-group col-md-4">
  <input type="text" class="form-control" id="ops" placeholder="Name of PS"></input>     
   </div>  
<div class="form-group col-md-4">
  <input type="text" class="form-control" id="ods" placeholder="District"></input>     
   </div> 

</div>

<br></br>

  <h5 style={{backgroundColor: "aqua"}}>Informant Details</h5>

  <div class="form-row">

  <div class="form-group col-md-3">
  <label>Name</label>
  <input type="text" class="form-control" id="iname" placeholder="Name"></input>     
   </div> 

   <div class="form-group col-md-3">
   <label>Father/Husband Name</label>
  <input type="text" class="form-control" id="iconame" placeholder="Father/Husband"></input>     
   </div> 

   <div class="form-group col-md-3">
   <label>Date of Birth</label>
  <input type="date" class="form-control" id="idob"></input>     
   </div> 

   <div class="form-group col-md-3">
   <label>Nationality</label>
  <input type="text" class="form-control" id="ination" placeholder="Nationality here!"></input>     
   </div> 

   <div class="form-group col-md-4">
   <label>Caste</label>
  <input type="text" class="form-control" id="icaste" placeholder="Caste"></input>     
   </div> 

   <div class="form-group col-md-4">
   <label>Passport Number</label>
  <input type="number" class="form-control" id="ipass" placeholder="Passport"></input>     
   </div> 

   <div class="form-group col-md-4">
   <label>Date of Issue</label>
  <input type="date" class="form-control" id="idoi" placeholder="Date of issue"></input>     
   </div> 

   <div class="form-group col-md-4">
   <label>Place of issue</label>
  <input type="text" class="form-control" id="ipoi" placeholder="Plac of issue"></input>     
   </div> 

   <div class="form-group col-md-4">
   <label>Occupation</label>
  <input type="text" class="form-control" id="iocc" placeholder="Occupation"></input>     
   </div> 

   <div class="form-group col-md-4">
   <label>Mobile Number</label>
  <input type="number" class="form-control" id="inum" placeholder="Number"></input>     
   </div> 

  <div class="form-group col-md-4">
      <label>Address/ House No.</label>
      <input type="text" class="form-control" id="iadd" placeholder="Address Here!">
        </input>
    </div>

    <div class="form-group col-md-4">
      <label>Area/ Mandal </label>
      <input type="text" class="form-control" id="iarea" placeholder="Area">
        </input>
    </div>    
        <div class="form-group col-md-4">
      <label>Street/ Village </label>
      <input type="text" class="form-control" id="istreet" placeholder="Street">
        </input>
        </div>

        <div class="form-group col-md-4">
      <label>City/District </label>
      <input type="text" class="form-control" id="icity" placeholder="City">
        </input>     
        </div>

        <div class="form-group col-md-4">
      <label>PIN</label>
      <input type="number" class="form-control" id="ipin" placeholder="PIN">
        </input>
    </div>
  </div>

<h5  style={{backgroundColor: "aqua"}}>Suspect Information here!</h5>


<div class="form-row">

<div class="form-group col-md-4">
<label>Name</label>
<input type="text" class="form-control" id="sname" placeholder="Name"></input>     
 </div> 

 <div class="form-group col-md-4">
 <label>Father/Husband Name</label>
<input type="text" class="form-control" id="sconame" placeholder="Father/Husband"></input>     
 </div> 

 <div class="form-group col-md-4">
 <label>Occupation</label>
<input type="text" class="form-control" id="socc" placeholder="Occupation"></input>     
 </div> 

  <div class="form-group col-md-4">
      <label>Gender</label>
      <select id="sgender" class="form-control">
        <option id="M">Male</option>
        <option id="F"> Female</option>
        <option id="O"> Others</option>
      </select>     
    </div>

 <div class="form-group col-md-4">
 <label>Caste</label>
<input type="text" class="form-control" id="scaste" placeholder="Caste"></input>     
 </div> 

 <div class="form-group col-md-4">
    <label>Nationality</label>
    <input type="text" class="form-control" id="snat" placeholder="Nationality Here!">
      </input>
  </div>
<br></br>
<br></br>
<br></br>
<div class="form-group col-md-4">
    <label>Address/ House No.</label>
    <input type="text" class="form-control" id="sadd" placeholder="Address Here!">
      </input>
  </div>
  <div class="form-group col-md-4">
    <label>Area/ Mandal </label>
    <input type="text" class="form-control" id="sarea" placeholder="Area">
      </input>
  </div>    
      <div class="form-group col-md-4">
    <label>Street/ Village </label>
    <input type="text" class="form-control" id="sstreet" placeholder="Street">
      </input>
      </div>

      <div class="form-group col-md-4">
    <label>City/District </label>
    <input type="text" class="form-control" id="scity" placeholder="City">
      </input>     
      </div>

      <div class="form-group col-md-4">
    <label>PIN</label>
    <input type="number" class="form-control" id="spin" placeholder="PIN">
      </input>
  </div>

  <div class="form-group col-md-4">
 <label>Phone(Off) Number</label>
<input type="number" class="form-control" id="soff" placeholder="Off Number"></input>     
 </div> 

 <div class="form-group col-md-4">
 <label>Phone(res) Number</label>
<input type="number" class="form-control" id="sres" placeholder="Res Number"></input>     
 </div> 

 <div class="form-group col-md-4">
 <label>Cell Number</label>
<input type="number" class="form-control" id="scell" placeholder="Number"></input>     
 </div> 

 <div class="form-group col-md-4">
 <label>Email ID</label>
<input type="mail" class="form-control" id="smail" placeholder="Email ID"></input>     
 </div> 

  </div>

  <h5 style={{backgroundColor: "aqua"}}>Other Details</h5>

  <div class="form-group col-md-12">
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Reasons for delay in reporting by the complainant / informant :</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
     </div>   

  <div class="form-row">
     
     <div class="form-group col-md-4">
     <label>Particulars Stolen</label>
      <input type="text" class="form-control" id="opart" placeholder="Particulars stolen"></input>     
        </div> 

        <div class="form-group col-md-4">
     <label>Total Value Stolen</label>
      <input type="number" class="form-control" id="oval" placeholder="Total value stolen"></input>     
        </div> 

      <div class="form-group col-md-4">
     <label>Inquest Report</label>
      <input type="number" class="form-control" id="orep" placeholder="U.D. Case No"></input>     
        </div> 

      </div>
    <div class="form-group col-md-12">
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Contents of the complaint / statement of the complainant or informant</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
     </div>   
    


  <button type="reset" class="btn btn-danger">Reset</button>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button type="submit" class="btn btn-primary">Submit</button>

<br></br>
<br></br>
</form>

 </div>

 </div>
      )    
        
    }
}