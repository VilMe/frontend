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
            {date}
            {data[date].map((item)=>{
                console.log(item)
                return(
            <li>{item.exercise} {item.reps} {item.weight}</li>)})}
            </ul>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
}
export default ExerciseHistory;