import React,{Component} from 'react'; 
import "./ExcelData.css";
import axios from "axios";

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
            this.setState({jsonObj:this.state.fetchedData[7]})
            console.log(this.state.jsonObj);
            //console.log(this.state.fetchedData[0]['Month']);
          }, 1500);
    }

    render() {

        return (
            <div>
                <h1>Hello</h1>

                <hr/>
                <p>{this.state.jsonObj.AccidentNo}</p>
                <p>{this.state.jsonObj.Year}</p>
                <p>{this.state.jsonObj.Month}</p>
                <p>{this.state.jsonObj.Date}</p>
                <p>{this.state.jsonObj.CrimeNo}</p>
                <p>{this.state.jsonObj.Section}</p>
                <p>{this.state.jsonObj.InvestigationOfficer}</p>
                <p>{this.state.jsonObj.Location}</p>
                <p>{this.state.jsonObj.Lattitude}</p>
                <p>{this.state.jsonObj.Longitude}</p>
                <p>{this.state.jsonObj.Time}</p>
                <p>{this.state.jsonObj.District}</p>
                <p>{this.state.jsonObj.State}</p>
                <p>{this.state.jsonObj.RoadName}</p>
                <p>{this.state.jsonObj.RoadType}</p>
                <p>{this.state.jsonObj.NoOfLanes}</p>
                <p>{this.state.jsonObj.SpeedLimit}</p>
                <p>{this.state.jsonObj.VehicleType}</p>
                <p>{this.state.jsonObj.RegistrationNo}</p>
                <p>{this.state.jsonObj.VehicleDamageType}</p>
                <p>{this.state.jsonObj.DriverName}</p>
                <p>{this.state.jsonObj.DriverGender}</p>
                <p>{this.state.jsonObj.DriverAge}</p>
                <p>{this.state.jsonObj.DriverCondition}</p>
                <p>{this.state.jsonObj.NoOfPassengers}</p>
                <p>{this.state.jsonObj.VictimName}</p>
                <p>{this.state.jsonObj.VictimAge}</p>
                <p>{this.state.jsonObj.VictimGender}</p>
                <p>{this.state.jsonObj.AccidentCause}</p>
                <hr/>

                <h1>Bye</h1>
            </div>
        )
    }
}