import React from 'react';
import MatchList from './MatchList';
import SearchBar from './SearchBar';
import AddMatch from './AddMatch';
import Collapse from './Collapse';
import axios from 'axios';
import { BrowserRouter as Router, Route, } from "react-router-dom";


class App extends React.Component {

    state = {
        matches: [],

        searchQuery: ""
    }

    async componentDidMount() {
        await this.getMatches();
        console.log(this.state.matches)
    }

    async getMatches(){
        const baseURL = "http://localhost:3003";
        const response = await fetch(baseURL);
        const data = await response.json();
        this.setState({matches:data})
      }

        

    searchMatch = (event) => {
        //console.log(event.target.value)
        this.setState({ searchQuery: event.target.value })
    }

    

    render() {

        let filteredMatches = this.state.matches

        return (
            <Router>
                <div className="container">
                    
                        <MatchList
                        matches= {this.state.matches} />
                    
                </div>

            </Router>
        )
    }
}

export default App;