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
            this.setState({jsonObj:this.state.fetchedData[1]})
            console.log(this.state.jsonObj);
            //console.log(this.state.fetchedData[0]['Month']);
          }, 1500);
    }

    render() {
        return(
            <div  style={{fontSize:"20"}}class="m-5">
               <div class="card text-left">
                  
                   <p style={{textAlign:"center"}}><h3>Hyderabad Crash Facts</h3></p>
                   <hr></hr>
                   <div >
                           <div class="row ">
                               <div class="col-3">
                                <p ><strong>1. District:</strong>{'\u00A0'}{'\u00A0'} {this.state.jsonObj.District}</p>
                               </div>
                               <div class="col-3">
                               <p><strong>P.S:</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.PS}</p>
                               </div>
                               <div class="col-2">
                               <p><strong>Year:</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.Year}</p>
                               </div>
                               <div class="col-2">
                               <p><strong>FIR:</strong> {'\u00A0'}{'\u00A0'}{this.state.jsonObj.FIRNo}</p>
                               </div>
                               <div class="col-2">
                               <p><strong>Date:</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.Date}</p>
                               </div>
                           </div>
                   
   
                           <div >
                               <p><strong>2. Acts & Section(s):</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.ActsSection}</p>
                           </div>
                   
                           <div>
                                   <div class="row ">
                                       <div class="col">
                                           <p><strong> 3.  a)Occurance of Offence :</strong></p>
                                       </div>
                                       <div class="col">
                                           <p><strong> Day</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.Day}</p> 
                                       </div>
                                       <div class="col">
                                       <p><strong> Date & Time Form</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.DateTimeFrom}</p>
                                       </div>
                                   </div>
   
                                   <div class="row ml-2">
                                       <div class="col">
                                           <p><strong> Data & Time To </strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.DateTimeTo}</p>
                                       </div>
                                       <div class="col">
                                           <p><strong> Prior To</strong></p> 
                                       </div>
                                       <div class="col">
                                       <p><strong>  Time Period</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.TimePeriod}</p>
                                       </div>
                                   </div>
   
                                   <div class="row ml-2">
                                       <div class="col">
                                           <p><strong>b) Information Recived at P.S:</strong></p>
                                       </div>
                                       <div class="col">
                                           <p><strong> Date & Time</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.Time}</p> 
                                       </div>
                                   </div>
   
                                   <div class="row ml-2 ">
                                       <div class="col">
                                           <p><strong>c) General Diary Reference:</strong></p>
                                       </div>
                                       <div class="col">
                                           <p><strong>Entry No.</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.EntryNo}</p> 
                                       </div>
                                       <div class="col">
                                           <p><strong> Date & Time</strong></p> 
                                       </div>
                                   </div>
                           </div>
   
                            <div >
                                  <p><strong>4.Types of Information:</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.TypeOfInformation}</p>
                            </div>
   
                              <div>
                                    <div >
                                  <p><strong>5.Place of Occurence:</strong></p>
                                   </div>
                                   
                                   <div class="row ml-2 ">
                                           <div class="col">
                                               <p><strong>a)Distance and Direction Form P.S.</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.DistanceDirectionFromPS}</p>
                                           </div>
                                           <div class="col">
                                               <p><strong>Beat No.</strong></p> 
                                           </div>
                                   </div>
   
                                   <div class="row ml-2 ">
                                       <div class="col">
                                           <p><strong>b)Address PLace</strong></p>
                                       </div>
                                       <div class="col">
                                           <p><strong>Area/Mandal</strong></p> 
                                       </div>
                                       <div class="col">
                                           <p><strong> Street/Village</strong></p> 
                                       </div>
                                   </div>
                                   <div class="row ml-4">
                                       <div class="col">
                                           <p class="blank">{'\u00A0'}{'\u00A0'}{this.state.jsonObj.Address}</p>
                                       </div>
                                       <div class="col">
                                       <p class="blank">{'\u00A0'}{'\u00A0'}{this.state.jsonObj.AreaMandal}</p> 
                                       </div>
                                       <div class="col">
                                       <p class="blank">{'\u00A0'}{'\u00A0'}{this.state.jsonObj.StreetVillage}</p> 
                                       </div>
                                   </div>
   
                                   <div class="row ml-4">
                                       <div class="col-6">
                                           <p><strong>City/District</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.CityDistrict}</p>
                                       </div>
                                       <div class="col-4">
                                           <p><strong>State</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.State}</p> 
                                       </div>
                                       <div class="col-2">
                                           <p><strong> PIN</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.PIN}</p> 
                                       </div>
                                   </div>
   
                                   <div class="row ml-4">
                                      <p><strong>c)In case,outside the limit of this Police Station,then</strong></p>
                                   </div>
   
   
                                   <div class="row ml-3">
                                       <div class="col">
                                           <p><strong>Name of P.S</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.NameOfPSOutside}</p>
                                       </div>
                                       <div class="col">
                                           <p><strong>District</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.DistrictOutside}</p> 
                                       </div>
                                   </div>
   
                               </div>
   
                               <div >
                                   <p><strong>6. Complaint/Information:</strong></p>
                                   <div class="row ml-4">
                                      <p><strong>a)Name</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.NameOfInfromant}</p>
                                   </div>
                                   <div class="row ml-4">
                                      <p><strong>b)Father's/Husbamd's Name</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.FathersHusbandNameOfInfromant}</p>
                                   </div>
                                   <div class="row ml-2">
                                       <div class="col-8">
                                           <p><strong>c)Date/Year of Birth</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.DateYearOfBirthOfInfromant}</p>
                                       </div>
                                       <div class="col">
                                           <p><strong>Age</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.AgeOfInfromant}</p> 
                                       </div>
                                   </div>
                                   <div class="row ml-2">
                                       <div class="col-7">
                                           <p><strong>d)Nationality</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.NationalityOfInfromant}</p>
                                       </div>
                                       <div class="col">
                                           <p><strong>e)Caste</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.CasteOfInfromant}</p> 
                                       </div>
                                   </div>
   
                                   <div class="row ml-2">
                                       <div class="col">
                                           <p><strong>f)Passport No.</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.PassportNoOfInfromant}</p>
                                       </div>
                                       <div class="col">
                                           <p><strong>Date of Issue</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.DateOfIssueOfInfromant}</p> 
                                       </div>
                                       <div class="col">
                                           <p><strong> Place of Issue</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.PlaceOfIssueOfInfromant}</p> 
                                       </div>
                                   </div>
   
                                   <div class="row ml-2">
                                       <div class="col-8">
                                           <p><strong>g)Occupation</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.OccupationOfInfromant}</p>
                                       </div>
                                       <div class="col">
                                           <p><strong>Mobile No.</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.MobileNoOfInfromant}</p> 
                                       </div>
                                   </div>
                                   
                                   <div class="row ml-2 ">
                                       <div class="col">
                                           <p><strong>h)Address House No</strong></p>
                                       </div>
                                       <div class="col">
                                           <p><strong>Area/Mandal</strong></p> 
                                       </div>
                                       <div class="col">
                                           <p><strong> Street/Village</strong></p> 
                                       </div>
                                   </div>
                                   <div class="row ml-4">
                                       <div class="col">
                                       <p class="blank">{'\u00A0'}{'\u00A0'}{this.state.jsonObj.AddressHNoOfInfromant}</p>
                                       </div>
                                       <div class="col">
                                       <p class="blank">{'\u00A0'}{'\u00A0'}{this.state.jsonObj.AreaMandalOfInfromant}</p> 
                                       </div>
                                       <div class="col">
                                       <p class="blank">{'\u00A0'}{'\u00A0'}{this.state.jsonObj.StreetVillageOfInfromant}</p> 
                                       </div>
                                   </div>
   
                                   <div class="row ml-4">
                                       <div class="col-6">
                                           <p><strong>City/District</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.CityDistrictOfInformant}</p>
                                       </div>
                                       <div class="col-4">
                                           <p><strong>State</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.StateOfInformant}</p> 
                                       </div>
                                       <div class="col-2">
                                           <p><strong> PIN</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.PINOfInformant}</p> 
                                       </div>
                                  </div>
   
                               </div>
   
                            <div >
                                   <p><strong>7.Deatails of Known/suspected/unknow accused with full particulars:</strong></p>
                                   
                                   {/* <div class="row ml-4">
                                       <p><strong>Serial No.</strong></p>
                                   </div> */}
   
                                   <div class="row ml-4">
                                       <p><strong>a)Name</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.NameOfSuspect}</p>
                                   </div>
   
                                   <div class="row ml-4">
                                       <p><strong>b)Father's/Husbamd's Name</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.FathersHusbandNameOfSuspect}</p>
                                   </div>
   
                                   <div class="row ml-3">
                                       <div class="col">
                                           <p><strong>c)Occupation</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.OccupationOfSuspect}</p>
                                       </div>
                                       <div class="col">
                                           <p><strong>d)Caste</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.CasteOfSuspect}</p> 
                                       </div>
                                       <div class="col">
                                           <p><strong>e)Gender</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.GenderOfSuspect}</p> 
                                       </div>
                                   </div>
   
                                   <div class="row ml-3">
                                       <div class="col-3">
                                           <p><strong>f)Age</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.AgeOfSuspect}</p>
                                       </div>
                                       <div class="col">
                                           <p><strong>Nationality</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.NationalityOfSuspect}</p> 
                                       </div>
                                   </div>
   
                                   <div class="row ml-4">
                                       <p><strong>g)Address:</strong></p>
                                   </div>
   
                                   <div class="row ml-5">
                                       <div class="col">
                                           <p><strong>House No.</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.HouseNoOfSuspect}</p>
                                       </div>
                                       <div class="col">
                                           <p><strong>Street/Village</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.StreetVillageOfSuspect}</p> 
                                       </div>
                                   </div>
   
                                   <div class="row ml-5">
                                       <div class="col">
                                           <p><strong>Area/Mandal</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.AreaMandalOfSuspect}</p>
                                       </div>
                                       <div class="col">
                                           <p><strong>City/District</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.CityDistrictOfSuspect}</p> 
                                       </div>
                                   </div>
   
                                   <div class="row ml-5">
                                       <div class="col">
                                           <p><strong>State</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.StateOfSuspect}</p>
                                       </div>
                                       <div class="col">
                                           <p><strong>PIN</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.PINOfSuspect}</p> 
                                       </div>
                                   </div>
   
                                   <div class="row ml-3">
                                       <div class="col">
                                           <p><strong>h)Phone(Off)</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.PhoneOffOfSuspect}</p>
                                       </div>
                                       <div class="col">
                                           <p><strong>Phone(Res)</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.PhoneResiOfSuspect}</p> 
                                       </div>
                                   </div>
                                   <div class="row ml-5">
                                           <p><strong>Cell No.</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.CellNoOfSuspect}</p> 
                                   </div>
   
                                   <div class="row ml-4">
                                           <p><strong>i)Email</strong>{'\u00A0'}{'\u00A0'}{this.state.jsonObj.EmailOfSuspect}</p> 
                                   </div>
                               </div> 
                              
                              <div class="ml-3">
                                  <p><strong>Physical features, deforities and other details of the Suspect: </strong></p>
                              </div>
   
                               <div className="card m-5">
   
                               <table class="table table-bordered">
                                   <thead>
                                       <tr>
                                       <th scope="col">S.NO.</th>
                                       <th scope="col">Sex</th>
                                       <th scope="col">Date/Year of Birth</th>
                                       <th scope="col">Build</th>
                                       <th scope="col">Height(cm)</th>
                                       <th scope="col">Complexion</th>
                                       <th scope="col">Indentification Marks</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       <tr>
                                       <td>1</td>
                                       <td>2</td>
                                       <td>3</td>
                                       <td>4</td>
                                       <td>5</td>
                                       <td>6</td>
                                       <td>7</td>
                                       </tr>
                                      
                                       <tr>
                                       <td>1</td>
                                       <td>2</td>
                                       <td>3</td>
                                       <td>4</td>
                                       <td>5</td>
                                       <td>6</td>
                                       <td>7</td>
                                       </tr>
                                   </tbody>
                                   </table>
                               </div>
                               <div className="card m-5">
                                   <table class="table table-bordered">
                                   <thead>
                                       <tr>
                                       <th scope="col">Deformaties/Pecularities</th>
                                       <th scope="col">Teeth</th>
                                       <th scope="col">Hair</th>
                                       <th scope="col">Eyes</th>
                                       <th scope="col">Habbits</th>
                                       <th scope="col">Dress Habbits</th>
                                       <th scope="col">Languages/Dialect</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       <tr>
                                       <td>8</td>
                                       <td>9</td>
                                       <td>10</td>
                                       <td>11</td>
                                       <td>12</td>
                                       <td>13</td>
                                       <td>14</td>
                                       </tr>
                                      
                                       <tr>
                                       <td>1</td>
                                       <td>2</td>
                                       <td>3</td>
                                       <td>4</td>
                                       <td>5</td>
                                       <td>6</td>
                                       <td>7</td>
                                       </tr>
                                   </tbody>
                                   </table>
                               </div>
                               <div className="card m-5">
                                   <table class="table table-bordered">
                                   <thead>
                                       <tr>
                                       <th colspan="5" scope="col" style={{textAlign:"center"}}>Parts Of</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       <tr>
                                       <th scope="col">Burn Marks</th>
                                       <th scope="col">Leucoderma</th>
                                       <th scope="col">Mole</th>
                                       <th scope="col">Scar</th>
                                       <th scope="col">Tattoo</th>
                                       </tr>
                                       <tr>
                                       <td>15</td>
                                       <td>16</td>
                                       <td>17</td>
                                       <td>18</td>
                                       <td>19</td>
                                       </tr>
                                      
                                       <tr>
                                       <td>1</td>
                                       <td>2</td>
                                       <td>3</td>
                                       <td>4</td>
                                       <td>5</td>
                                       </tr>
                                   </tbody>
                                   </table>
                              
                               </div>
   
                               <div >
                                   <p><strong>8.Reasons for delay in reporting by the complainant / informant : </strong></p>
                                   <p class="blank">{'\u00A0'}{'\u00A0'}{this.state.jsonObj.ReasonsForDelay}</p>
                               </div>
   
                               <div >
                                   <p><strong>9.Particulars of properties stolen/involved (Attach separate sheet, if necessary) : </strong></p>
                                   <p class="blank">{'\u00A0'}{'\u00A0'}{this.state.jsonObj.ParticularsOfPropertiesStolenInvolved}</p>
                               </div>
   
                               <div >
                                   <p><strong>10. Total value of property stolen :  </strong></p>
                                   <p class="blank"> {'\u00A0'}{'\u00A0'}{this.state.jsonObj.TotalValueOfPropertyStolen}</p>
                               </div>
   
                               <div>
                                   <p><strong>11. Inquest Report/ U.D. Case No.  </strong></p>
                                   <p class="blank">{'\u00A0'}{'\u00A0'}{this.state.jsonObj.InquestReportUDCaseNo}</p>
                               </div>
   
                               <div >
                                   <p><strong>12. Contents of the complaint / statement of the complainant or informant : </strong></p>
                                   <p >{'\u00A0'}{'\u00A0'}{this.state.jsonObj.ContentsOfTheComplaint}</p>
                               </div>
   
   
                            
                   </div>
   
               </div>
   
               </div>
           )
    }
}