import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
class Footer extends React.Component {

    render(){
        return (
           <div class="box1">
           <div class="row" >
               <div class="col">
                   <p style={{color:"aqua"}}>These Data are Not Live</p>
               </div>
               <div class="col" style={{color:"aqua"}}>NOTE: The user is responsible for the accuracy of any 
               report or opinion based on the use of this data query tool.
               </div>
               <div class="col">
                   <ul>
                       <a href="https://www.htp.gov.in/">https://www.htp.gov.in/</a> 
                      <p style={{color:"aqua"}}>Questions for Us? Contact Us</p> 
                   </ul>
               </div>
           </div>
           </div>
        
        )
    }
    
}
export default Footer;