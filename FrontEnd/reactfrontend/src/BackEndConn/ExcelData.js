import React,{Component} from 'react'; 
import "./ExcelData.css";
import axios from "axios";
import jsPDF from "jspdf"; 


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
            //console.log(this.state.fetchedData[0]);
        });
        
        setTimeout(() => {
            this.setState({jsonObj:this.state.fetchedData[7]})
            //console.log(this.state.jsonObj);
            //console.log(this.state.fetchedData[0]['Month']);
          }, 1000);
    }

    jsPdfGenerator = () => {
        var doc=new jsPDF('p','pt');
        doc.text(20,20,"PDF generated");
        doc.save("gen.pdf");
    }

    printDocument() {
        /*var doc = new jsPDF()
        doc.fromHTML(document.querySelector("#data"), 1, 1)
        doc.save("name.pdf")*/
        var doc = new jsPDF();          
        var elementHandler = {
        '#data': function (element, renderer) {
            return true;
        }
        };
        var source = window.document.getElementsByTagName("body")[0];
        doc.fromHTML(
            source,
            15,
            15,
            {
            'width': 180,'elementHandlers': elementHandler
            });

        doc.output("dataurlnewwindow");
    }

    render() {

        return (
            <div>
                <h1>Hello</h1>

                <p>{this.state.jsonObj.AccidentNo}</p>
                <p>{this.state.jsonObj.Month}</p>
                <p>{this.state.jsonObj.AccidentCause}</p>
                

                <hr/>

                 <div className="posts" id="data">
                     { this.state.fetchedData.map(post => {
                         return(
                         <div key={post.AccidentNo}>
                            <h1>Date is :{ post.Date }</h1>
                            <p>{post.Lattitude} {post.Longitude}</p>
                            <h3>{ post.AccidentCause} </h3>
                         </div>
                         ) 
                     }) }
                 </div>
                 
                <div className="mb5">
                    <button onClick={this.printDocument}>Print</button>
                </div>
                 <div id="capture" className="mt4">
                    <div>Note: Here the dimensions of div are same as A4</div> 
                    <div>You Can add any component here</div>
                </div>


                <h1>Bye</h1>
            </div>
        )
    }
}