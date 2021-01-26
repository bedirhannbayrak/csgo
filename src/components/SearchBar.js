import React from 'react';
import {Link } from 'react-router-dom';


class SearchBar extends React.Component {

    state = {
        searchQuery: ""
    }
    handleFormSubmit =(e) => {
        e.preventDefault();
        
    } 

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
            <div className="form-row mb-5 mt-5">
                <div className="col-10">
                    <input 
                    
                        onChange={this.props.searchMovieProp} 
                        type="text" className="form-control" 
                        placeholder="Seach a movie" 
                    />
                </div>
                <div className="col-2">
                    <Link 
                            to="/add"
                            type="Link" 
                            className="btn btn-md btn-danger"
                            style={{float:'right'}}>Add Movie
                    </Link>
                </div>
            </div>
        </form>
        )
    }
}

export default SearchBar;