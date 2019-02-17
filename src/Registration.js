import React, { Component } from 'react';


class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.email);

  }
    render() {
        return (
           <form onSubmit={this.handleSubmit} action="http://0.0.0.0:5000/exercise_history" method="post">
                Register for Fitbub here! <br />
                  <label>
                  email:<br/>
                    <input 
                    type="text" 
                    name="email"/>
                  </label>
                  <br/>
                  <label>
                  password:<br/>
                    <input 
                    type="text" 
                    name="password"/>
                  </label> 
                {/* TO DO, add confirm password, */}
                  <br />
                <input type="submit" value="Register!"/>
          </form>
        );
  }
}
export default Registration;