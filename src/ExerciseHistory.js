import React, { Component } from 'react';


class ExerciseHistory extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null,
        };
    };
    componentDidMount(){
        fetch('http://0.0.0.0:5000/exercise_history')
        .then(response => response.json())
        .then(data => this.setState({data: data}))
    }

    render(){
        console.log(this.state.data)
        return (<h1>
        {JSON.stringify(this.state.data)}
        </h1>
        );
    }
}
export default ExerciseHistory;