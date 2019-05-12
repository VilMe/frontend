import React, { Component } from 'react';


class AddExercise extends Component {
    constructor(props){
        super(props);
        this.state = {
            exercise: '',
            weight: '',
            num_reps: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.state({
            [name]:value
        });
    }
    handleSubmit(event) {
        alert('Exercise logged! On to the next')
    }
    render(){
        return (
           <form onSubmit={this.handleSubmit} >
            Workin' it, log it here.
            <br />
                <label>
                Exercise:
                <input 
                type="text"
                name="exercise"/>
                </label>
                <label>
                Weight:
                <input 
                type="number"
                name="weight"/>
                </label>
                <label>
                Number of Reps:
                <input 
                type="value"
                name="num_reps"/>
                </label>
                <input type="submit" value="Log Exercise!"/>
            </form>
            );
    }
}

export default AddExercise;