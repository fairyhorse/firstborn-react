import React, {Component} from "react";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
// import {robots} from '../robots';
import './App.css'
import ErrorBoundary from "../components/ErrorBoundary";


class App extends Component {
    constructor() {
        super()
        this.state = {
            // robots,
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https:jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
        <h1 className="tc font-effect-neon f1">Loading...</h1> :
        (
            <div className="tc">
                <h1 className="font-effect-neon f1">RoboPool</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            
        );
    }
}

export default App;