import React, { Component } from 'react';


class ExerciseHistory extends Component {
    constructor(props){
        super(props)
        this.State = {
            data: ' ',
        };
    }
    componentDidMount(){
        fetch('http://0.0.0.0:5000/exercise_history', { mode: 'no-cors' })
        .then(data => this.setState({data}));
    }
    render(){
        console.log(this.state)
        return (
            <div className="ExerciseHistory">
                <header className="ExerciseHistory-header">
                    Exercise History!
                {/* create exercise_entry component */}
                </header>
                    <p>
                        Date
                        exercise number of reps and weight
                    </p>
            </div>
            );
    }
}
export default ExerciseHistory;