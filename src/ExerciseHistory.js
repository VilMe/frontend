import React, { Component } from 'react';


class ExerciseHistory extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
        };
    };
    componentDidMount(){
        fetch('http://0.0.0.0:5000/exercise_history')
        .then(response => response.json())
        .then(data => this.setState({data: data}))
    }


    render(){
        const data = this.state.data;
        const dates = Object.keys(data);
        const listItems = dates.map((date) =>
            <ul>
            Date: {date}
            {data[date].map((item)=>{
                console.log(item)
                return(<div className="exercise_history">
            <li>Exercise Name:{item.exercise} {item.reps} reps {item.weight} lbs</li>
            </div>)})}
            </ul>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
}
export default ExerciseHistory;