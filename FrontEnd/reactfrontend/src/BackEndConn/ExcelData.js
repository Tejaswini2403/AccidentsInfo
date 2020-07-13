import React,{Component} from 'react'; 
import axios from "axios";

export default class ExcelData extends Component {
    constructor() {
        super();
        this.state = {
            fetchedData:[]
        };
    }
 
    componentDidMount = () => {
        axios.get("/getData").then(response => {
            response.data.forEach(element => {
                this.state.fetchedData.push(element)
            });
            
            console.log(this.state.fetchedData);
        });
    };

    render() {
        
        return (
            <div>
                <h1>hello</h1>
                <p>{this.te}</p>
            </div>
        )
    }
}
