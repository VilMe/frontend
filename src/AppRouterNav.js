import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom"
import Registration from './Registration'
import AddExercise from './AddExercise'
import ExerciseHistory from './ExerciseHistory'
import Login from './Login'
{/* can i keep the user login information props, no backend e.g. cookies handles this*/}

class AppRouterNav extends Component {
    render() {
        return (
        <Router>
            <div>
                <nav>
                    <ul>

                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/exercise_history">Exercise History</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/add_exercise"> Add Exercise</Link>
                        </li>
                    </ul>
                </nav>
                {/*if I want something on every page, then i can put here*/}
                {/*have all routes here*/}

                <Route path="/" exact component={Registration}/>
                <Route path="/register" exact component={Registration}/>
                <Route path="/exercise_history" exact component={ExerciseHistory}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/add_exercise" exact component={AddExercise}/>
            </div>
        </Router>
        );
    }
}

export default AppRouterNav;