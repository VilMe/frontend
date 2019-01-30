import React, { Component } from 'react';

class LoginRegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        alert('Login/Registration form submitted');
        console.log(this.state.username + this.state.password);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={this.state.username}/>
                </label>
                <br />
                <label>
                    Password:
                    <input type="text" value={this.state.passowrd}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            );
    }
}

export default LoginRegForm;