import React,{Component} from 'react'; 

export default class DataEntry extends Component {

    constructor() {
        super();
        this.state = {
          username: '',
          age: null,
        };
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

    render() {
        
        return (
            <div>
                <h1>Provide accident details</h1>
                <form>
                    <h1>Hello {this.state.username} {this.state.age}</h1>
                    <p>Enter your name:</p>
                    <input
                        type='text'
                        name='username'
                        onChange={this.myChangeHandler}
                    />
                    <p>Enter your age:</p>
                    <input
                        type='text'
                        name='age'
                        onChange={this.myChangeHandler}
                    />
                </form>
            </div>
        )
    }
}