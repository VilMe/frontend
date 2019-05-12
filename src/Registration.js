import React, { Component } from 'react';


class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    alert('Logged In! Have fun exercising! ' + this.state.email);
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('http://0.0.0.0:5000/register',{ 
          method: 'POST',
          body: data
    });
  }
    render() {
        return (
          <div className="register">
          <form onSubmit={this.handleSubmit} >
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
                    type="password" 
                    name="password"/>
                  </label> 
                {/* TO DO, add confirm password, */}
                  <br />
                <input type="submit" value="Register!"/>
          </form>
          </div>
        );
  }
}
export default Registration;