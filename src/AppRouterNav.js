import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Registration from './Registration'
import AddExercise from './AddExercise'
import ExerciseHistory from './ExerciseHistory'
import Login from './Login'

class AppRouterNav extends Component {
    render() {
        return (
        <Router>
            <div>
                
{/*if I want something on every page, then i can put here, have all routes here*/}
                <Route path="/" exact component={Login}/>
                <Route path="/register" exact component={Registration}/>
                <Route path="/exercise_history" exact component={ExerciseHistory}/>
                <Route path="/add_exercise" exact component={AddExercise}/>
            </div>
        </Router>
        );
    }
}

export default AppRouterNav;