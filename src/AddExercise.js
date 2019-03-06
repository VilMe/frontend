import React, { Component } from 'react';


class AddExercise extends Component {
    constructor(props){
        super(props);
        this.state = {
            exercise: '',
            weight: '',
            num_reps: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Exercise logged! On to the next');
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://0.0.0.0:5000/exercise_entry/', {
            method: 'POST',
            body: data,
        });
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
                name="weight"
                min="0" max="10000"/>
                </label>
                <label>
                Number of Reps:
                <input 
                type="number"
                name="num_reps"
                min="1" max="1000"/>
                </label>
                <input type="submit" value="Log Exercise!"/>
            </form>
            );
    }
}

export default AddExercise;