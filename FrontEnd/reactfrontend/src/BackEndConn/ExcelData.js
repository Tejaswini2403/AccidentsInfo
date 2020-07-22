import React,{Component} from 'react'; 
import "./ExcelData.css";
import axios from "axios";
import col1 from './../Images/col1.jpg'

export default class ExcelData extends Component {
    constructor() {
        super();
        this.state = {
            fetchedData:[],
            jsonObj:{}
        };
    }
    componentWillMount() {
        axios.get("/getData").then(res => {
            this.setState({fetchedData:res.data})
            //console.log(this.state.fetchedData);
        });
        
        setTimeout(() => {
            this.setState({jsonObj:this.state.fetchedData[11]})
            console.log(this.state.jsonObj);
            //console.log(this.state.fetchedData[0]['Month']);
          }, 1500);
    }

    render() {
        return(
            <div class="card m-5">
              <h5 class="card-header  card text-center h5 ">Hyderabad City Traffic Crash Facts</h5>
                  <div class="card-body text-left ">
                      <div class="row">
                          <div class="col">
                          <p><strong>  FIR No.</strong> {this.state.jsonObj.CrimeNo}</p>
                              </div>
                              <div class="col">
                              <p><strong>  Section No.</strong>{this.state.jsonObj.Section}</p>
                              </div>
                       </div>
      
                       <hr class="bd"></hr>
                      <div class="row ">
                          <div class="col">
                              <p><strong>  Year:- </strong> {this.state.jsonObj.Year}</p>
                          </div>
                          <div class="col">
                              <p><strong>  Month:- </strong> {this.state.jsonObj.Month}</p>
                          </div>
                          <div class="col">
                               <p><strong>  Date:- </strong> {this.state.jsonObj.Date}</p>
                          </div>
                          <div class="col">
                              <p><strong>  Time:- </strong>{this.state.jsonObj.Time}</p>
                          </div>
                      </div>
      
                      <hr class="bd"></hr>
                      <div >
                          <p><strong>  Investigation Officer:- </strong> {this.state.jsonObj.InvestigationOfficer}</p>
                      </div>
      
                      <hr class="bd"></hr>
                      <p><strong><mark><u>Location</u></mark></strong></p>
                      <div>
                          <p><strong> Location:- </strong> {this.state.jsonObj.Location}</p>
                      </div>
      
                      {/* <hr class="bd"></hr> */}
                      
                      <div class="row ">
                          <div class="col">
                              <p><strong>  RoadName:- </strong> {this.state.jsonObj.RoadName}</p>
                          </div>
                          <div class="col">
                              <p><strong>  District:- </strong> {this.state.jsonObj.District}</p>
                          </div>
                          <div class="col">
                               <p><strong>  State:- </strong> {this.state.jsonObj.State}</p>
                          </div>
                      </div>
                      
                      {/* <hr class="bd"></hr> */}
                      <div class="row ">
                          <div class="col">
                              <p><strong>  RoadType:- </strong> {this.state.jsonObj.RoadType}</p>
                          </div>
                          <div class="col">
                              <p><strong>  No. of Lanes:-</strong> {this.state.jsonObj.NoOfLanes}</p>
                          </div>
                          <div class="col">
                               <p><strong>  Speed Limit:- </strong> {this.state.jsonObj.SpeedLimit}</p>
                          </div>
                      </div>
      
                      <hr class="bd"></hr>
                      <p ><strong><mark><u>Vehicle Deatails</u></mark></strong></p>
                      <div class="row">
                          <div class="col">
                              <p><strong>  Vehicle Type:- </strong> {this.state.jsonObj.VehicleType}</p>
                          </div>
                          <div class="col">
                              <p><strong>  Registration No:- </strong> {this.state.jsonObj.RegistrationNo}</p>
                          </div>
                          <div class="col">
                               <p><strong>  Vehicle Damage Type:- </strong> {this.state.jsonObj.VehicleDamageType}</p>
                          </div>
                      </div>
      
                      <hr class="bd"></hr>
                      <div className="ds">
                      <p ><strong><mark><u>Driver Deatails</u></mark></strong></p>
                      <br></br>
                      <div class="row ">
                          <div class="col">
                              <p><strong>  Driver Name:- </strong> {this.state.jsonObj.DriverName}</p>
                          </div>
                          <div class="col">
                              <p><strong>  Driver Gender:- </strong> {this.state.jsonObj.DriverGender}</p>
                          </div>
                          <div class="col">
                               <p><strong>  Driver Age:- </strong> {this.state.jsonObj.DriverAge}</p>
                          </div>
                      </div>
                      </div>
                        <br></br>
                      {/* <hr class="bd"></hr> */}
                      <div class="row">
                          <div class="col">
                              <p><strong> Driver Condition:- </strong> {this.state.jsonObj.DriverCondition}</p>
                          </div>
                          <div class="col">
                              <p><strong> No. of passengers:- </strong> {this.state.jsonObj.NoOfPassengers}</p>
                          </div>
                      </div>
      
                      <hr class="bd"></hr>
                      <div className="ds">
                      <p ><strong><mark><u>Victim Deatails</u></mark></strong></p>
                      <div class="row">
                          <div class="col">
                              <p><strong>  Victim Name:- </strong> {this.state.jsonObj.VictimName}</p>
                          </div>
                          <div class="col">
                              <p><strong>  Victim Gender:- </strong> {this.state.jsonObj.VictimGender}</p>
                          </div>
                          <div class="col">
                               <p><strong>  Victim Age:- </strong> {this.state.jsonObj.VictimAge}.</p>
                          </div>
                      </div>
                        </div>
                      <hr class="bd"></hr>
                      <div class="li">
                          <p><strong><mark> Accident Cause:- </mark>  </strong> {this.state.jsonObj.AccidentCause}</p>
                      </div>
      
                      <hr class="bd"></hr>
                      
                      <div class="row">
                          <div class="col-z">
                              <p><strong> Condition Diagram:- </strong> <img src={col1} /></p>
                          </div>
                          <br/>
                          <br/>
                          <div class="col-z">
                              <p><strong> Collision Diagram:- </strong> <img src={col1} /></p>
                          </div>
                      </div>
                   </div>
               </div>
              )
    }
}